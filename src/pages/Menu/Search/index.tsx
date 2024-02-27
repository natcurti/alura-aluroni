import styles from "./Search.module.scss";
import { CgSearch } from "react-icons/cg";

interface ISearch {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Search = ({ search, setSearch }: ISearch) => {
  return (
    <div className={styles.search}>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar"
      />
      <CgSearch size={20} color="#4C4D5E" />
    </div>
  );
};

export default Search;
