import Image from "next/image";

import { iconsData } from "@data/icons-data";
import styles from "./Cart.module.scss";
import { CartItems, CustomerInfo } from "@components/templates";

const Cart = () => {
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
          <>
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
            <hr />
          </>
        ))}
      </div>
      <CartItems />
      <CustomerInfo />
    </section>
  );
};
export default Cart;
