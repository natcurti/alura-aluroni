import styles from "./Menu.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import Search from "./Search";
import { useState } from "react";
import Filters from "pages/Filters";
import Select from "./Select";
import Items from "./Items";

const Menu = () => {
  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState<number | null>(null);

  const [select, setSelect] = useState("");

  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
      <section className={styles.menuContainer}>
        <h3 className={styles.menu__title}>Cardápio</h3>
        <Search search={search} setSearch={setSearch} />
        <div className={styles.menuContainer__filters}>
          <Filters filter={filter} setFilter={setFilter} />
          <Select select={select} setSelect={setSelect} />
        </div>
        <Items />
      </section>
    </main>
  );
};

export default Menu;
