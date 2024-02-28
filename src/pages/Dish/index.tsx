import styles from "./Dish.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import menuItems from "data/menuItems.json";
import classNames from "classnames";

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
          <div className={styles.tags}>
            <div
              className={classNames({
                [styles.tags__type]: true,
                [styles[`tags__type__${item.category.label.toLowerCase()}`]]:
                  true,
              })}
            >
              {item.category.label}
            </div>
            <div className={styles.tags__portion}>{item.size}g</div>
            <div className={styles.tags__amountOfPeople}>
              Serve {item.serving} pessoa {item.serving == 1 ? "" : "s"}
            </div>
            <div className={styles.tags__value}>R$ {item.price.toFixed(2)}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dish;
