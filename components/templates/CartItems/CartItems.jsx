import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ImBin } from "react-icons/im";

import { BillSummary, Counter, OrderBtn } from "@components/elements";
import styles from "./CartItems.module.scss";
import { removeProduct } from "redux/cartRedux";

const CartItems = ({ products, total, setActiveTab }) => {
  const dispatch = useDispatch();
  const [list, setList] = useState(products);

  const handleRemove = (id) => {
    const filteredData = list.filter((item) => item._id !== id);
    setList(filteredData);
    dispatch(removeProduct(id));
  };

  return (
    <>
      {list.length > 0 ? (
        <div className={styles.container}>
          <h1>Shopping Cart</h1>
          <div className={styles.content}>
            <article className={styles.left}>
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Extra Toppings</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((product) => (
                    <tr key={product._id}>
                      <td>
                        <figure className={styles.img__size}>
                          <Image
                            src={product.img}
                            alt={product.title}
                            height="100"
                            width="100"
                          />
                          <figcaption className={styles.size__info}>
                            {product.size == 0
                              ? "Small"
                              : product.size == 1
                              ? "Medium"
                              : "Large"}
                          </figcaption>
                        </figure>
                      </td>
                      <td>{product.title}</td>
                      <td>
                        {product.extraToppings ? (
                          <span className={styles.extra__toppings}>
                            {product.extraToppings.map((extra) => (
                              <span key={extra._id}>{extra.text}</span>
                            ))}
                          </span>
                        ) : (
                          <span>No Extra Toppings</span>
                        )}
                      </td>
                      <td>$ {product.price.toFixed(2)}</td>
                      <td>
                        <div className={styles.counter}>
                          <Counter count={product.count} />
                        </div>
                      </td>
                      <td>$ {(product.price * product.count).toFixed(2)}</td>
                      <td>
                        <ImBin
                          className={styles.bin}
                          onClick={() => handleRemove(product._id)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </article>
            <aside className={styles.right}>
              <div className={styles.right__content}>
                <h1>Bill Summary</h1>
                <hr />
                <BillSummary products={products} total={total} />
                <button
                  className={styles.btn}
                  onClick={() => setActiveTab("2")}
                >
                  Checkout Now
                  <div className={styles.icon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M168 336C181.3 336 192 346.7 192 360C192 373.3 181.3 384 168 384H120C106.7 384 96 373.3 96 360C96 346.7 106.7 336 120 336H168zM360 336C373.3 336 384 346.7 384 360C384 373.3 373.3 384 360 384H248C234.7 384 224 373.3 224 360C224 346.7 234.7 336 248 336H360zM512 32C547.3 32 576 60.65 576 96V416C576 451.3 547.3 480 512 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H512zM512 80H64C55.16 80 48 87.16 48 96V128H528V96C528 87.16 520.8 80 512 80zM528 224H48V416C48 424.8 55.16 432 64 432H512C520.8 432 528 424.8 528 416V224z" />
                    </svg>
                  </div>
                </button>
              </div>
              <OrderBtn text="Continue Shopping" />
            </aside>
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          <h1>Your Shopping Cart is Empty!!</h1>
          <OrderBtn text="Order Now" />
        </div>
      )}
    </>
  );
};
export default CartItems;
