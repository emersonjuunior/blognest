import styles from "./PostDetails.module.css";
import { Link } from "react-router-dom";

// hooks
import { useParams } from "react-router-dom";
import { useFetchDocument } from "../../hooks/useFetchDocument";

const Post = () => {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument("posts", id);

  return (
    <section className={styles.details_container}>
      <div className={styles.details_wrapper}>
      {loading && <p>Carregando post...</p>}
      {post && (
        <>
          <h1>{post.title}</h1>
          <img src={post.image} alt={post.title} />
          <p className={styles.post_content}>{post.body}</p>
          <h3>Tags</h3>
          <div className={styles.tags_container}>
          {post.tagsArray.map((tag) => (
            <p key={tag}>
              <span>#</span>
              {tag}
            </p>
          ))}
        </div>
        <p className={styles.post_author}>Criado por: <span>{post.createdBy}</span></p>
        <div className={styles.button_container}>
          <Link to="/">
            <button className="submit-btn">Voltar</button>
          </Link>
        </div>
        </>
      )}
      </div>
    </section>
  );
};

export default Post;
