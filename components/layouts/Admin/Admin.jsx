import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import styles from "./Admin.module.scss";

const Admin = ({ products, orders }) => {
  const [productList, setProductList] = useState(products);
  const [orderList, setOrderList] = useState(orders);

  const status = [
    "Pending",
    "Ordered Received",
    "Ready to Deliver",
    "On The Way",
    "Delivered",
  ];

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/api/products/${id}`
      );
      setProductList(productList.filter((product) => product._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleStatus = async (id) => {
    const item = orderList.filter((order) => order._id === id)[0];
    const currentStatus = item.status;

    try {
      const res = await axios.put(`http://localhost:3000/api/orders/${id}`, {
        status: currentStatus + 1,
      });
      setOrderList([
        res.data,
        ...orderList.filter((order) => order._id !== id),
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className={styles.container}>
      <section className={styles.container__left}>
        <h1>Products</h1>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          {productList.map((product) => (
            <tbody key={product._id}>
              <tr>
                <td>
                  <Image
                    src={product.img}
                    alt={product.title}
                    height="50"
                    width="50"
                  />
                </td>
                <td>{product._id.slice(0, 7)}...</td>
                <td>{product.title}</td>
                <td>$ {product.prices[0]}</td>
                <td className={styles.btn__container}>
                  <button className={styles.btn}>Edit</button>
                  <button
                    className={styles.btn}
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </section>
      <section className={styles.container__right}>
        <h1>Orders</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Address</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {orderList.map((order) => (
            <tbody key={order._id}>
              <tr>
                <td>{order._id.slice(0, 7)}...</td>
                <td>{order.customer}</td>
                <td>{order.address}</td>
                <td>$ {order.total}</td>
                <td>
                  {order.method === 0 ? (
                    <span>Cash On Delivery</span>
                  ) : (
                    <span>PayPal</span>
                  )}
                </td>
                <td>{status[order.status]}</td>
                <td>
                  <button
                    className={styles.btn}
                    onClick={() => handleStatus(order._id)}
                  >
                    Next Stage
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </section>
    </section>
  );
};

export default Admin;
