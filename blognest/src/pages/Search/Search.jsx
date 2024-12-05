import styles from "./Search.module.css";
import { Link } from "react-router-dom";

// hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";
import Post from "../../components/Post";

const Search = () => {
  const query = useQuery();
  const search = query.get("q");

  const { documents: posts } = useFetchDocuments("posts", search);

  return (
    <section className={styles.search_container}>
      <div className={styles.search_wrapper}>
        <h2>
          Exibindo resultados para: <span>{search}</span>
        </h2>
        {posts && posts.length === 0 && (
          <div className={styles.nothing_found}>
            <p>Não foram encontrados posts a partir da sua busca.</p>
          </div>
        )}
        <div className={styles.button_container}>
          <Link to="/">
            <button className="submit-btn">Voltar</button>
          </Link>
        </div>
      </div>
      <div className={styles.posts_found}>
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
      </div>
    </section>
  );
};

export default Search;
