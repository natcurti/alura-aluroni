import styles from "./Item.module.scss";
import Tags from "components/Tags";
import { MenuItem } from "types/MenuItem";

const Item = (props: MenuItem) => {
  const { title, description, photo } = props;

  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <Tags {...props} />
      </div>
    </div>
  );
};

export default Item;
