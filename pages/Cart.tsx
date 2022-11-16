import { FC, useState } from "react";
import Layout from "../app/components/layout/Layout";
import { useTypedSelector } from "../app/hooks/useTypedSelector";
import Image from "next/image";
import { IStoreItem } from "../app/store/store-item/storeItem.type";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useActions } from "../app/hooks/useActions";
import {
  MdNightlightRound,
  MdShoppingCart,
  MdOutlineWbSunny,
} from "react-icons/md";
import Link from "next/link";
import { useTheme } from "../app/providers/ThemeProvider";
import styles from "../app/components/screens/cart/Cart.module.scss";

const Cart: FC = () => {
  const { cart } = useTypedSelector((state) => state);
  const { removeItem } = useActions();

  const [changeThemeButton, setChangeThemeButton] = useState(true);
  const { setCurrentTheme } = useTheme();
  const { theme } = useTheme();

  return (
    <Layout>
      <div className={styles.wrapper}>
        <Link href="/">
          <div className={styles.link}>Guitar Store</div>
        </Link>

        <div className={styles.themeIcon}>
          <div
            className={styles.tIconBg}
            onClick={() => setChangeThemeButton(!changeThemeButton)}
          >
            {changeThemeButton ? (
              <MdNightlightRound
                className="h-[26px] w-[22px]"
                onClick={() => setCurrentTheme("dark")}
              />
            ) : (
              <MdOutlineWbSunny
                className="h-[24px] w-[22px] ml-1 mt-[2px]"
                onClick={() => setCurrentTheme("light")}
              />
            )}
          </div>
          <Link href="/Cart">
            <div className="w-[46px] rounded-full bg-emerald-400 cursor-pointer">
              <MdShoppingCart className="h-[26px] w-[22px] ml-3" />
            </div>
          </Link>
        </div>
      </div>
      <div
        style={{ ...(theme as React.CSSProperties) }}
        className={styles.background}
      >
        <div className="flex p-5 max-w-[1400px] mx-auto flex-col">
          {cart.length ? (
            <>
              {cart.map((data: IStoreItem) => (
                <div
                  className="flex mx-auto p-2 max-w-[1400px] w-[700px] h-[83px] m-2 justify-between bg-slate-200 border rounded-xl shadow-md"
                  key={data.id}
                >
                  <Image
                    className="rounded-md"
                    src={data.image}
                    alt={data.name}
                    width={65}
                    height={65}
                  />
                  <div className="text-center my-auto">{data.name}</div>
                  <div className="flex flex-row">
                    <div>
                      <p className="my-5 mr-4 whitespace-nowrap">
                        {data.price} $
                      </p>
                    </div>
                    <div
                      className="bg-emerald-300 h-8 w-10 rounded-md my-4 cursor-pointer"
                      onClick={() => removeItem({ id: data.id })}
                    >
                      <button>
                        <MdOutlineRemoveShoppingCart className="mx-2.5 my-2" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div
                className="flex mx-auto text-center mt-20 bg-teal-300 border p-1 rounded-lg cursor-pointer"
                onClick={() => alert("Order has been placed!")}
              >
                Place order
              </div>
            </>
          ) : (
            <div className="flex mx-auto text-center mt-20 bg-slate-200 border p-1 rounded-lg">
              Cart is Empty
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
