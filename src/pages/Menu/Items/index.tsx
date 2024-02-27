import Item from "./Item";
import itemsJson from "./items.json";
import styles from "./Items.module.scss";

const Items = () => {
  return (
    <div className={styles.items}>
      {itemsJson.map((item) => (
        <div>
          <Item key={item.id} {...item} />
        </div>
      ))}
    </div>
  );
};

export default Items;
