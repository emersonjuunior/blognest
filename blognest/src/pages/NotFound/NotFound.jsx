import styles from "./NotFound.module.css"

const NotFound = () => {
  return (
    <div className={styles.not_found}>
      <h1>Essa página <span>não existe</span></h1>
    </div>
  )
}

export default NotFound
