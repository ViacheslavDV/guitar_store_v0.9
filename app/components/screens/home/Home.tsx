import { FC, useState } from "react";
import { useGetStoreItemsQuery } from "../../../store/store-item/storeItem.api";
import { IStoreItem } from "../../../store/store-item/storeItem.type";
import ProductItem from "../../ui/productitems/ProductItem";
import { useDebounce } from "../../../hooks/useDebounce";
import Header from "../../ui/header/Header";
import { useTheme } from "../../../providers/ThemeProvider";
import styles from "./Home.module.scss";

const Home: FC = () => {
  const [search, setSearch] = useState("");
  const debounce = useDebounce(search);

  // Load data
  const { data, isLoading, error } = useGetStoreItemsQuery(debounce, {
    refetchOnFocus: true,
  });

  // Change theme
  const { theme } = useTheme();

  return (
    <div>
      <Header search={search} setSearch={setSearch} />
      <div
        className={styles.container}
        style={{ ...(theme as React.CSSProperties) }}
      >
        <div className={styles.items}>
          {isLoading ? (
            <div className={styles.info}>Loading...</div>
          ) : error ? (
            <div className={styles.info}>{error as any}</div>
          ) : (
            <div className={styles.items}>
              {data?.map((storeItems: IStoreItem) => (
                <ProductItem key={storeItems.id} storeItems={storeItems} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
