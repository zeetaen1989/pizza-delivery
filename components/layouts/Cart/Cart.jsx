import Image from "next/image";
import styles from "./Cart.module.scss";

const Cart = () => {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <article className={styles.left__col}>
          <h1>Product</h1>
          <Image
            src="/images/Greek-Pizza.png"
            alt="Greek Pizza"
            height="100"
            width="100"
          />
        </article>
        <article className={styles.left_col}>
          <h1>Name</h1>
          <p>Greek Pizza</p>
        </article>
        <article className={styles.left_col}>
          <h1>Extras</h1>
          <p>Mozerella, Mushroom, Tomato Sauce</p>
        </article>
        <article className={styles.left_col}>
          <h1>Price</h1>
          <span>$ 19.95</span>
        </article>
        <article className={styles.left_col}>
          <h1>Quantity</h1>
          <span>3</span>
        </article>
        <article className={styles.left_col}>
          <h1>Total</h1>
          <span>$ 49.95</span>
        </article>
      </div>
      <aside className={styles.right}>
        <h1>Cart Summary</h1>
        <hr />
        <div className={styles.right__summary}>
          <p>Subtotal:</p>
          <span>$ 49.95</span>
        </div>
        <div className={styles.right__summary}>
          <p>Delivery:</p>
          <span>$ 5.50</span>
        </div>
        <div className={styles.right__summary}>
          <p>Discount:</p>
          <span>$ 0.00</span>
        </div>
        <hr />
        <div className={styles.right__summary}>
          <p>Total:</p>
          <span>$ 55.45</span>
        </div>
      </aside>
    </section>
  );
};
export default Cart;
