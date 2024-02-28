import styles from "./Tags.module.scss";
import classNames from "classnames";
import { MenuItem } from "types/MenuItem";

const Tags = ({ category, size, serving, price }: MenuItem) => {
  return (
    <div className={styles.tags}>
      <div
        className={classNames({
          [styles.tags__type]: true,
          [styles[`tags__type__${category.label.toLowerCase()}`]]: true,
        })}
      >
        {category.label}
      </div>
      <div className={styles.tags__portion}>{size}g</div>
      <div className={styles.tags__amountOfPeople}>
        Serve {serving} pessoa {serving == 1 ? "" : "s"}
      </div>
      <div className={styles.tags__value}>R$ {price.toFixed(2)}</div>
    </div>
  );
};

export default Tags;
