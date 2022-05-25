import Image from "next/image";
import styles from "./Orders.module.scss";

const Orders = ({ order }) => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1>Thank You for Ordering!!!</h1>
        <p>Your Pizza is getting ready to be delivered...</p>
        <figure>
          <Image
            src="/images/delivery.svg"
            alt="delivery"
            height="80"
            width="80"
          />
        </figure>
      </header>
      <section className={styles.content}>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{order._id}</td>
              <td>{order.customer}</td>
              <td>{order.address}</td>
              <td>${order.total}</td>
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
