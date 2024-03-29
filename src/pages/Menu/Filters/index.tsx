import { memo } from "react";
import filters from "./filters.json";
import styles from "./Filters.module.scss";
import classNames from "classnames";

type Ioption = (typeof filters)[0];

interface IFilters {
  filter: number | null;
  setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

const Filters = ({ filter, setFilter }: IFilters) => {
  const selectFilter = (option: Ioption) => {
    if (filter === option.id) {
      return setFilter(null);
    }
    return setFilter(option.id);
  };

  return (
    <div className={styles.filters}>
      {filters.map((option) => (
        <button
          className={classNames({
            [styles.filters__filter]: true,
            [styles["filters__filter--active"]]: filter === option.id,
          })}
          key={option.id}
          onClick={() => selectFilter(option)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default memo(Filters);
