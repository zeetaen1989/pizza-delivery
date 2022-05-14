import { BillSummary } from "@components/elements";
import Image from "next/image";
import styles from "./CustomerInfo.module.scss";

const CustomerInfo = ({ products, total }) => {
  return (
    <div className={styles.container} id="customer">
      <h1>Customer Details</h1>
      <div className={styles.bottom}>
        <article className={styles.left}>
          <h2>Enter Your Information</h2>
          <form>
            <div className={styles.form__control}>
              <label htmlFor="name">Customer&apos;s Full Name</label>
              <input type="text" id="name" placeholder="Your Full Name" />
            </div>
            <div className={styles.form__control}>
              <label htmlFor="number">Customer&apos;s Mobile Number</label>
              <input type="tel" id="number" placeholder="+01 234 567 890" />
            </div>
            <div className={styles.form__control}>
              <label htmlFor="location">Delivery Location</label>
              <input
                type="text"
                id="location"
                placeholder="Your Detailed Delivery Location"
              />
            </div>
            <div className={styles.form__control}>
              <label htmlFor="note">Note</label>
              <textarea
                id="note"
                placeholder="Write Your Cooking Preferences..."
              />
            </div>
          </form>
        </article>
        <aside className={styles.right}>
          <h1>Order Summary</h1>
          <hr />
          {products.length > 0 ? (
            <div className={styles.list__summary}>
              {products.map((product) => (
                <div key={product._id} className={styles.list__items}>
                  <figure className={styles.item__img}>
                    <Image
                      src={product.img}
                      alt={product.title}
                      height="50"
                      width="50"
                    />
                  </figure>
                  <div className={styles.item__info}>
                    <h3>
                      {product.title}{" "}
                      <span style={{ fontSize: "0.8rem" }}>
                        (
                        {product.size === 0
                          ? "Small"
                          : product.size === 1
                          ? "Medium"
                          : "Large"}
                        )
                      </span>
                    </h3>
                    {product.extraToppings ? (
                      <>
                        {product.extraToppings.map((extra) => (
                          <span key={extra._id} className={styles.extras}>
                            {extra.text}
                          </span>
                        ))}
                      </>
                    ) : (
                      <span className={styles.extras}>No Extra Toppings</span>
                    )}
                  </div>
                  <div className={styles.item__details}>
                    <span className={styles.price}>
                      $ {product.price.toFixed(2)}
                    </span>
                    <span>X</span>
                    <span className={styles.quantity}>{product.count}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.list__summary}>
              <p className={styles.list__summary__empty}>Your Cart Is Empty</p>
            </div>
          )}
          <hr />
          <BillSummary products={products} total={total} />
          <button className={styles.btn}>
            Proceed To Pay
            <div className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M448 32C465.7 32 480 46.33 480 64C480 81.67 465.7 96 448 96H80C71.16 96 64 103.2 64 112C64 120.8 71.16 128 80 128H448C483.3 128 512 156.7 512 192V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM416 336C433.7 336 448 321.7 448 304C448 286.3 433.7 272 416 272C398.3 272 384 286.3 384 304C384 321.7 398.3 336 416 336z" />
              </svg>
            </div>
          </button>
        </aside>
      </div>
    </div>
  );
};
export default CustomerInfo;
