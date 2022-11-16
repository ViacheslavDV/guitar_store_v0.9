import { FC, useState } from "react";
import Search from "../search/Search";
import {
  MdNightlightRound,
  MdShoppingCart,
  MdOutlineWbSunny,
} from "react-icons/md";
import Link from "next/link";
import { useTheme } from "../../../providers/ThemeProvider";
import styles from "./Header.module.scss";

interface ISearch {
  search?: string;
  setSearch?: any;
}

const Header: FC<ISearch> = ({ search, setSearch }) => {
  const [openCart, setOpenCart] = useState<boolean>(false);
  const [changeThemeButton, setChangeThemeButton] = useState(true);
  const { setCurrentTheme } = useTheme();
  return (
    <div className={styles.wrapper}>
      <Link href="/">
        <div className={styles.logo}>Guitar Store</div>
      </Link>
      <div className={styles.search}>
        <Search search={search} setSearch={setSearch} />
      </div>
      <div className={styles.buttons}>
        <div
          className={styles.buttonsBg}
          onClick={() => setChangeThemeButton(!changeThemeButton)}
        >
          {changeThemeButton ? (
            <MdNightlightRound
              className={styles.MDNIcon}
              onClick={() => setCurrentTheme("dark")}
            />
          ) : (
            <MdOutlineWbSunny
              className={styles.MDOIcon}
              onClick={() => setCurrentTheme("light")}
            />
          )}
        </div>
        <Link href="/Cart">
          <div
            className={styles.cart}
            onClick={() => setOpenCart((openCart: boolean) => !openCart)}
          >
            <MdShoppingCart className={styles.cartIcon} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
