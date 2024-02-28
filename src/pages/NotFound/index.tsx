import styles from "./NotFound.module.scss";
import stylesTheme from "styles/Theme.module.scss";
import { ReactComponent as NotFoundImg } from "assets/not_found.svg";
import classNames from "classnames";

const NotFound = () => {
  return (
    <div
      className={classNames({
        [styles.container]: true,
        [stylesTheme.container]: true,
      })}
    >
      <NotFoundImg />
    </div>
  );
};

export default NotFound;
