// CSS
import styles from "./About.module.css";

const About = () => {
  return (
    <main>
      <section className={styles.start_container}>
        <div className={styles.start_content}>
          <h1>
            Sobre <span>Nós</span>
          </h1>
          <h5>
            Criatividade <span>&&</span> Originalidade
          </h5>
          <p>
            Escreva <span>sobre o que quiser</span>, a qualquer momento!
          </p>

          <div className={styles.about_data}>
            <div>
              <h5>2024</h5>
              <span>Ano de início</span>
            </div>
            <div>
              <h5>100%</h5>
              <span>Proteção e segurança</span>
            </div>
            <div>
              <h5>100.000+</h5>
              <span>Usuários</span>
            </div>
          </div>
        </div>
        <div className={styles.start_image}>
          <img src="/about.svg" alt="Início" />
        </div>
      </section>
      <section className={styles.values_container}>
        <div className={styles.values_content}>
          <div>
            <h3>
              Nós temos um <span>compromisso</span> com você.
            </h3>
            <h5>
              Nossos <span>Valores</span>
            </h5>
          </div>
          <div className={styles.cards_container}>
            <div>
              <i class="fa-regular fa-handshake"></i>
              <p>Suporte total</p>
            </div>
            <div>
              <i class="fa-regular fa-lightbulb"></i>
              <p>Criatividade</p>
            </div>
            <div>
              <i class="fa-solid fa-scale-balanced"></i>
              <p>Integridade</p>
            </div>
            <div>
              <i class="fa-solid fa-lock"></i>
              <p>Segurança</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.tech_container}>
        <div className={styles.tech_titles}>
          <h3>Tecnologias Utilizadas</h3>
          <h5>
            Fomos feitos com <span>amor</span>, e com:
          </h5>
        </div>
        <div className={styles.tech}>
          <div>
            <h6>JavaScript</h6>
            <i class="devicon-javascript-plain colored"></i>
          </div>
          <div>
            <h6>React</h6>
            <i class="devicon-react-original colored"></i>
          </div>
          <div>
            <h6>FireBase</h6>
            <i class="devicon-firebase-plain-wordmark colored"></i>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
