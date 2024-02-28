import styles from "./Dish.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import menuItems from "data/menuItems.json";
import Tags from "components/Tags";

const Dish = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const item = menuItems.find((element) => element.id === Number(id));
  if (!item) {
    return "";
  }

  return (
    <>
      <button className={styles.back} onClick={() => navigate(-1)}>
        {"< Voltar"}
      </button>
      <section className={styles.container}>
        <h1 className={styles.title}>{item.title}</h1>
        <div className={styles.image}>
          <img src={item.photo} alt={item.title} />
        </div>
        <div className={styles.content}>
          <p className={styles.content__description}>{item.description}</p>
          <Tags {...item} />
        </div>
      </section>
    </>
  );
};

export default Dish;
