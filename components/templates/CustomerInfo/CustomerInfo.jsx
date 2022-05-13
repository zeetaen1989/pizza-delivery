import Image from "next/image";
import styles from "./CustomerInfo.module.scss";

const CustomerInfo = () => {
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
          <div className={styles.list__summary}>
            <div className={styles.list__items}>
              <figure className={styles.item__img}>
                <Image
                  src="/images/Greek-Pizza.png"
                  alt="Greek Pizza"
                  height="50"
                  width="50"
                />
              </figure>
              <figcaption className={styles.item__info}>
                <section>
                  <h3>Greek Pizza</h3>
                  <p className={styles.extras}>
                    Mozerella, Mushroom, Spicey Sauce
                  </p>
                </section>
              </figcaption>
              <figcaption className={styles.item__details}>
                <span className={styles.price}>$11.99</span>
                <span>X</span>
                <span className={styles.quantity}>2</span>
              </figcaption>
            </div>
            <div className={styles.list__items}>
              <figure className={styles.item__img}>
                <Image
                  src="/images/Pizza-Alla-Diavola.png"
                  alt="Pizza Alla Diavola"
                  height="50"
                  width="50"
                />
              </figure>
              <figcaption className={styles.item__info}>
                <section>
                  <h3>Pizza Alla Diavola</h3>
                  <p className={styles.extras}>Parmesan, Salami, Spicy Sauce</p>
                </section>
              </figcaption>
              <figcaption className={styles.item__details}>
                <span className={styles.price}>$14.99</span>
                <span>X</span>
                <span className={styles.quantity}>3</span>
              </figcaption>
            </div>
          </div>
          <div className={styles.info__summary}>
            <p>Subtotal:</p>
            <span>$ 68.95</span>
          </div>
          <div className={styles.info__summary}>
            <p>*Delivery Charge:</p>
            <span>$ 5.50</span>
          </div>
          <div className={styles.info__summary}>
            <p>Discount:</p>
            <span>$ 0.00</span>
          </div>
          <div className={styles.notice}>
            <p>**Minimum Delivery Charge is $5.00</p>
            <p>
              *Extra Delivery Charges are added based upon your provided
              location.
            </p>
          </div>
          <hr />
          <div className={styles.info__summary}>
            <p>Total:</p>
            <span>$ 74.45</span>
          </div>
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
