import styles from "./Menu.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";

const Menu = () => {
  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
    </main>
  );
};

export default Menu;
