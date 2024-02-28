import { useCallback, useEffect, useState } from "react";
import Item from "./Item";
import itemsJson from "data/menuItems.json";
import styles from "./Items.module.scss";
import { AllMenuItems } from "types/MenuItem";

interface IPropsItems {
  search: string;
  filter: number | null;
  select: string;
}

const Items = ({ search, filter, select }: IPropsItems) => {
  const [list, setList] = useState(itemsJson);

  const searchTest = useCallback(
    (title: string) => {
      const regex = new RegExp(search, "i");
      return regex.test(title);
    },
    [search]
  );

  const filterTest = useCallback(
    (id: number) => {
      if (filter !== null) return filter === id;
      return true;
    },
    [filter]
  );

  const orderList = useCallback(
    (newList: AllMenuItems) => {
      switch (select) {
      case "porcao":
        return newList.sort((a, b) => (a.size > b.size ? 1 : -1));
      case "qtd_pessoas":
        return newList.sort((a, b) => (a.serving > b.serving ? 1 : -1));
      case "preco":
        return newList.sort((a, b) => (a.price > b.price ? 1 : -1));
      default:
        return newList;
      }
    },
    [select]
  );

  useEffect(() => {
    const newList = itemsJson.filter(
      (item) => searchTest(item.title) && filterTest(item.category.id)
    );
    setList(orderList(newList));
  }, [searchTest, filterTest, orderList]);

  return (
    <div className={styles.items}>
      {list.map((item) => (
        <div key={item.id}>
          <Item {...item} key={item.id} />
        </div>
      ))}
    </div>
  );
};

export default Items;
