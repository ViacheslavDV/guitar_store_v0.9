import { IStoreItem } from "../../../store/store-item/storeItem.type";
import Image from "next/image";
import {
  MdOutlineStarRate,
  MdAddShoppingCart,
  MdOutlineAddTask,
} from "react-icons/md";
import styles from "./ProductItem.module.scss";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useTheme } from "../../../providers/ThemeProvider";

const ProductItem = ({ storeItems }: { storeItems: IStoreItem }) => {
  const { addItem } = useActions();
  const { cart } = useTypedSelector((state) => state);
  const isExistsInCart = cart.some((p) => p.id === storeItems.id);
  const { theme } = useTheme();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div
          className={styles.item}
          style={{ ...(theme as React.CSSProperties) }}
        >
          <div>
            <Image
              className={styles.image}
              src={storeItems.image}
              alt={storeItems.name}
              width={250}
              height={250}
            />
          </div>
          <div className={styles.info}>
            <div>
              <p className={styles.name}>{storeItems.name}</p>
            </div>
            <div className={styles.numbers}>
              <p className={styles.price}>{storeItems.price} $</p>
              <p className={styles.rating}>
                {storeItems.rating}
                <MdOutlineStarRate className={styles.icon} />
              </p>
              <button
                className={
                  isExistsInCart ? styles.buttonapplyed : styles.buttoncart
                }
                onClick={() => !isExistsInCart && addItem(storeItems)}
              >
                {isExistsInCart ? (
                  <MdOutlineAddTask className={styles.cart} />
                ) : (
                  <MdAddShoppingCart className={styles.cart} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
