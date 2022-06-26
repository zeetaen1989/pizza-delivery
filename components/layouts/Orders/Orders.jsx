import Image from "next/image";
import styles from "./Orders.module.scss";

const Orders = ({ order }) => {
  return (
    <section className={styles.container}>
      <article className={styles.header}>
        <header>
          <h1>Thank You for Ordering!!!</h1>
        </header>
        <p>Your Pizza is getting ready to be delivered...</p>
        <figure>
          <Image
            src="/images/delivery.svg"
            alt="delivery"
            height="80"
            width="80"
          />
        </figure>
      </article>
      <section className={styles.content}>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Address</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{order._id}</td>
              <td>{order.customer}</td>
              <td>{order.address}</td>
              <td>${order.total}</td>
              <td>{order.method}</td>
              <td>{order.status}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <footer className={styles.footer}>
        <p>We hope you enjoy your delicious pizza with your loved ones...</p>
      </footer>
    </section>
  );
};
export default Orders;
