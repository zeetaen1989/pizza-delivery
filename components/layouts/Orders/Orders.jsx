import styles from "./Orders.module.scss";

const Order = ({ order }) => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1>Your Orders Info</h1>
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
              <td>{order.total + 5}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <footer className={styles.footer}>
        <p>
          Thank You for ordering! We hope you enjoy your delicious pizza&apos;s
          with your loved ones...
        </p>
      </footer>
    </section>
  );
};
export default Order;
