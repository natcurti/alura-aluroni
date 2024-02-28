import { ReactComponent as Logo } from "assets/logo.svg";
import styles from "./NavigationMenu.module.scss";
import { Link } from "react-router-dom";

const NavigationMenu = () => {
  const routes = [
    { label: "Início", to: "/" },
    { label: "Cardápio", to: "/cardapio" },
    { label: "Sobre", to: "/sobre" },
  ];
  return (
    <nav className={styles.menu}>
      <Logo />
      <ul className={styles.menu__list}>
        {routes.map((item, index) => (
          <li key={index} className={styles.menu__link}>
            <Link to={item.to}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationMenu;
