// CSS
import styles from "./Home.module.css";

// hooks
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import Post from "../../components/Post";

// components

const Home = () => {
  const [query, setQuery] = useState("");
  const { documents: posts, loading } = useFetchDocuments("posts");

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`search?q=${query}`)
    }
  };

  return (
    <main id="teste" className={styles.home_container}>
      <div className={styles.home_top_container}>
        <div className={styles.home_top_wrapper}>
          <h1>Posts</h1>
          <h2>
            Veja sobre o que estão <span>falando</span>!
          </h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.search_container}>
              <input
                type="text"
                placeholder="Ou busque por tags..."
                onChange={(e) => setQuery(e.target.value)}
              />
              <button type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.home_content}>
        <div className={styles.home_content_wrapper}>
          {loading && <p>Carregando...</p>}
          {posts &&
            posts.map((post, index) => {
              return (
                <Post
                  className={
                    (index + 2) % 2 === 0
                      ? "post-background-gray"
                      : "post-background-normal"
                  }
                  key={post.id}
                  post={post}
                />
              );
            })}
          {posts && posts && posts.length === 0 && (
            <div className={styles.no_posts}>
              <p>Não foram encontrados posts...</p>
              <Link to="/posts/create">
                <button className="submit-btn">Criar primeiro post</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
