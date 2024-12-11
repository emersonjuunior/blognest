import styles from "./Dashboard.module.css";

import { Link } from "react-router-dom";

// hooks
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  const { documents: posts, loading } = useFetchDocuments("posts", null, uid);

  const {deleteDocument} = useDeleteDocument("posts")

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <section className={styles.dashboard_container}>
      <h1>Dashboard</h1>
      <h2>
        Gerencie seus <span>posts</span>
      </h2>
      {posts && posts.length === 0 ? (
        <div className={styles.no_posts}>
          Não tem posts
          <Link to="/posts/create">
            <button className="submit-btn">Criar primeiro post</button>
          </Link>
        </div>
      ) : (
        <>

          {posts &&
            posts.map((post, index) => (
              <div key={index} className={styles.dashboard_post}>
                <div className={styles.post_title}>
                  <h3>{post.title}</h3>
                </div>
                <div className={styles.actions_container}>
                  <Link to={`/posts/${post.id}`}>
                    <button className={styles.dashboard_buttons}>Ver Post</button>
                  </Link>
                  <Link to={`/posts/edit/${post.id}`}>
                    <button className={styles.dashboard_buttons}>Editar</button>
                  </Link>
                  <button className="delete-button" onClick={() => deleteDocument(post.id)}>
                    Apagar
                  </button>
                </div>
              </div>
            ))}
        </>
      )}
    </section>
  );
};

export default Dashboard;
