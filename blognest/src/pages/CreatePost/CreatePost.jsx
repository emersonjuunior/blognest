import styles from "./CreatePost.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useInsertDocument } from "../../hooks/useInsertDocument";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const { user } = useAuthValue();

  const { insertDocument, response } = useInsertDocument("posts");

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    // validate image url
    try {
      new URL(image);
    } catch (error) {
      setFormError("Por favor, coloque uma url válida.");
    }

    // create tags array
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    // check all the values
    if(!title || !image || !tags || !body){
      setFormError("Por favor, preencha todos os campos.")
    }

    insertDocument({
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    // redirect to home page 
    navigate("/")

  };

  return (
    <section className={styles.create_post}>
      <div className={styles.create_post_wrapper}>
        <div className={styles.create_post_titles}>
          <h1>Criar Post</h1>
          <h2>
            Compartilhe suas <span>histórias</span>, escreva sobre o que quiser!
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Título</span>
            <input
              type="text"
              name="title"
              required
              placeholder="Pense em um bom título."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            <span>Url da imagem</span>
            <input
              type="text"
              name="image"
              required
              placeholder="Coloque uma bela imagem aqui."
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </label>
          <label>
            <span>Conteúdo</span>
            <textarea
              name="body"
              required
              placeholder="Escreva o conteúdo do post."
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </label>
          <label>
            <span>Tags</span>
            <input
              type="text"
              name="tags"
              required
              placeholder="Coloque as tags separadas por vírgula."
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </label>
          <button type="submit" className="submit-btn">
            Criar Post
          </button>
          {response.error && <p className="error">{response.error}</p>}
          {formError && <p className="error">{formError}</p>}
          {response.loading && <p>Aguarde...</p>}
        </form>
      </div>
    </section>
  );
};

export default CreatePost;
