import Image from "next/image";
import { useSelector } from "react-redux";

import { CartItems, CustomerInfo } from "@components/templates";
import { iconsData } from "@data/icons-data";
import styles from "./Cart.module.scss";

const Cart = () => {
  const { products, total } = useSelector((state) => state.cart);

  const status = 0;

  const iconStatus = (index) => {
    if (index - status < 1) return styles.completed;
    if (index - status === 1) return styles.pending;
    if (index - status > 1) return styles.incomplete;
  };

  return (
    <section className={styles.container}>
      <div className={styles.top}>
        {iconsData.map((icon) => (
          <figure key={icon.id} className={iconStatus(icon.id)}>
            <Image
              src={icon.img}
              alt={icon.title}
              height={icon.height}
              width={icon.width}
            />
            <figure className={styles.checked__icon}>
              <Image
                src="/images/checked.svg"
                alt="Checked"
                height="10"
                width="10"
              />
            </figure>
          </figure>
        ))}
      </div>
      <CartItems products={products} total={total} />
      <CustomerInfo products={products} total={total} />
    </section>
  );
};
export default Cart;
