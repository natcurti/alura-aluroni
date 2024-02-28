import menuItems from "data/menuItems.json";
import styles from "./Home.module.scss";
import styleTheme from "styles/Theme.module.scss";
import photoHome from "assets/nossa_casa.png";
import { useNavigate } from "react-router-dom";
import { MenuItem } from "types/MenuItem";

const Home = () => {
  let recomendedItems = [...menuItems];
  recomendedItems = recomendedItems
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);
  const navigate = useNavigate();

  const redirectToDetails = (item: MenuItem) => {
    navigate(`/prato/${item.id}`, { state: { item } });
  };

  return (
    <section>
      <h3 className={styleTheme.title}>Recomendações da Cozinha</h3>
      <div className={styles.recomendedItems}>
        {recomendedItems.map((item) => (
          <div key={item.id} className={styles.recomended}>
            <div className={styles.recomended__img}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button
              className={styles.recomended__button}
              onClick={() => redirectToDetails(item)}
            >
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={styleTheme.title}>Nossa Casa</h3>
      <div className={styles.ourHome}>
        <img src={photoHome} alt="Casa Aluroni" />
        <div className={styles.ourHome__address}>
          Rua Vergueiro, 1385 <br />
          <br />
          Vila Mariana - SP
        </div>
      </div>
    </section>
  );
};

export default Home;
