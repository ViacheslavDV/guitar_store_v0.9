import { FC } from "react";
import { MdSearch, MdClear } from "react-icons/md";
import styles from "./Search.module.scss";

interface ISearch {
  search?: string;
  setSearch?: any;
}

const Search: FC<ISearch> = ({ search, setSearch }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          //   onKeyPress={(e) => e.key === "q" && console.log("q")}
          type="text"
          placeholder="search"
          className={styles.input}
        />
        {search !== "" && (
          <MdClear className={styles.search} onClick={() => setSearch("")} />
        )}
      </div>
      <div>
        <MdSearch className={styles.clear} />
      </div>
    </div>
  );
};

export default Search;
