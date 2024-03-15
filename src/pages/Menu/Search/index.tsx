import { memo, useMemo } from "react";
import styles from "./Search.module.scss";
import { CgSearch } from "react-icons/cg";

interface ISearch {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Search = ({ search, setSearch }: ISearch) => {
  const icon = useMemo(() => <CgSearch size={20} color="#4C4D5E" />, []);

  return (
    <div className={styles.search}>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar"
      />
      {icon}
    </div>
  );
};

export default memo(Search);
