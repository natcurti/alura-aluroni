import styles from "./About.module.scss";
import stylesTheme from "styles/Theme.module.scss";
import photoHome from "assets/casa.png";
import photoPasta1 from "assets/massa1.png";
import photoPasta2 from "assets/massa2.png";

const images = [photoPasta1, photoPasta2];

const About = () => {
  return (
    <section>
      <h3 className={stylesTheme.title}>Sobre Nós</h3>
      <div className={styles.aboutUs}>
        <img src={photoHome} alt="Casa Aluroni" />
        <div className={styles.aboutUs__text}>
          <p>
            Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa
            Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos
            pelos ingredientes tradicionais da culinária Italiana, frescos e de
            excelente qualidade para que sua experiência seja ainda mais
            intensa!
          </p>
          <p>
            Também possuímos uma cardápio de carnes com muitas opções de acordo
            com o seu gosto!
          </p>
          <p>
            Para acompanhar as massas italianas, Aluroni possui uma reserva de
            vinhos especiais, que harmonizam perfeitamente com o seu parto, seja
            carne ou massa!
          </p>
        </div>
      </div>
      <div className={styles.pastaPhotos}>
        {images.map((image, index) => (
          <div key={index} className={styles.pastaPhotos__photo}>
            <img src={image} alt="Imagem da Massa" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
