import styles from "./EditPost.module.css";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useUpdateDocument } from "../../hooks/useUpdateDocument";
import { useFetchDocument } from "../../hooks/useFetchDocument";

const EditPost = () => {
  const { id } = useParams();
  const { document: post } = useFetchDocument("posts", id);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
      setImage(post.image);
      setPreviewImage(post.image)

      const textTags = post.tagsArray.join(", ");
      setTags(textTags);
    }
  }, [post]);

  const { user } = useAuthValue();

  const { updateDocument, response } = useUpdateDocument("posts");

  const navigate = useNavigate();

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
    if (!title || !image || !tags || !body) {
      setFormError("Por favor, preencha todos os campos.");
    }

    const data = {
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    };

    updateDocument(id, data);

    // redirect to home page
    navigate("/dashboard");
  };

  const changeImages = (value) => {
    setImage(value);
    setPreviewImage(value);
  };

  return (
    <section className={styles.edit_post}>
      {post && (
        <>
          <div className={styles.edit_post_wrapper}>
            <div className={styles.edit_post_titles}>
              <h1>Editar Post</h1>
              <h2>
                Editando Post <span>{post.title}</span>
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
                  maxLength="30"
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
                  onChange={(e) => changeImages(e.target.value)}
                />
              </label>
              <p>Pré-Visualização</p>
              <img
                className={styles.post_image}
                src={previewImage}
                alt={post.title}
              />
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
              <button type="submit" className="submit-btn" >
                Editar Post
              </button>
              {response.error && <p className="error">{response.error}</p>}
              {formError && <p className="error">{formError}</p>}
              {response.loading && <p>Aguarde...</p>}
            </form>
          </div>
        </>
      )}
    </section>
  );
};

export default EditPost;
