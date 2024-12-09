import styles from "./Post.module.css";
import { Link } from "react-router-dom";

const Post = ({ post, className }) => {
  return (
    <div className={className}>
      <div className={styles.post_wrapper}>
        <h2>{post.title}</h2>
        <img src={post.image} alt={post.title} />
        <p className={styles.post_author}>
          <i>Criado por:</i> {post.createdBy}
        </p>
        <div className={styles.tags_container}>
          {post.tagsArray.map((tag) => (
            <p key={tag}>
              <span>#</span>
              {tag}
            </p>
          ))}
        </div>
        <div className={styles.post_btn_container}>
          <Link to={`/posts/${post.id}`}>
            <button>Ver Post</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
