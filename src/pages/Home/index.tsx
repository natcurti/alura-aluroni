import menuItems from "data/menuItems.json";
import styles from "./Home.module.scss";

const Home = () => {
  let recomendedItems = [...menuItems];
  recomendedItems = recomendedItems
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  return (
    <section>
      <h3 className={styles.title}>Recomendações da Cozinha</h3>
      <div className={styles.recomendedItems}>
        {recomendedItems.map((item) => (
          <div key={item.id} className={styles.recomended}>
            <div className={styles.recomended__img}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button className={styles.recomended__button}>Ver mais</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
