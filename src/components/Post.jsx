import styles from "./Post.module.css";

export function Post({ author, content }) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/luisgbyte.png"
          />
          <div className={styles.authorInfo}>
            <strong>Luis</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="22 de Outubro às 11:00h" dateTime="2022-10-22">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>
          <p>
            Fala galera. Acabei de subir mais um projeto para meu portifólio.{" "}
          </p>

          <p>
            É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do
            projeto é DoctorCare.{" "}
          </p>
          <p>
            <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
            <a href="#">#rocketseat</a>
            {""}
          </p>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
}
