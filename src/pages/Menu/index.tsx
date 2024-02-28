import styles from "./Menu.module.scss";
import Search from "./Search";
import { useState } from "react";
import Filters from "./Filters";
import Select from "./Select";
import Items from "./Items";
import styleTheme from "styles/Theme.module.scss";

const Menu = () => {
  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState<number | null>(null);

  const [select, setSelect] = useState("");

  return (
    <section>
      <h3 className={styleTheme.title}>Cardápio</h3>
      <Search search={search} setSearch={setSearch} />
      <div className={styles.menu__filters}>
        <Filters filter={filter} setFilter={setFilter} />
        <Select select={select} setSelect={setSelect} />
      </div>
      <Items search={search} filter={filter} select={select} />
    </section>
  );
};

export default Menu;
