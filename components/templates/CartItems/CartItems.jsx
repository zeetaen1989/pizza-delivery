import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { ImBin } from "react-icons/im";

import { resetCart } from "redux/cartRedux";
import { Counter, OrderBtn } from "@components/elements";
import styles from "./CartItems.module.scss";

const CartItems = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    const filteredProduct = cart.products.filter(
      (product) => product._id !== id
    );
    dispatch(resetCart(filteredProduct));
  };

  let deliveryCharge = (5.55).toFixed(2);
  let discount = (0.0).toFixed(2);
  let extraCharge = deliveryCharge - discount;

  return (
    <>
      {cart.products.length > 0 ? (
        <div className={styles.container}>
          <h1>Shopping Cart</h1>
          <div className={styles.center}>
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
                  {cart.products.map((product) => (
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
                        <ImBin className={styles.bin} onClick={handleRemove} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </article>
            <aside className={styles.right}>
              <OrderBtn text="Continue Shopping" />
              <div className={styles.right__container}>
                <h1>Bill Summary</h1>
                <hr />
                <div className={styles.summary}>
                  <p>Subtotal:</p>
                  <span>$ {cart.total.toFixed(2)}</span>
                </div>
                <div className={styles.summary}>
                  <p>Delivery Charge:</p>
                  <span>$ {deliveryCharge}</span>
                </div>
                <div className={styles.summary}>
                  <p>Discount:</p>
                  <span>- $ {discount}</span>
                </div>
                <hr />
                <div className={styles.summary}>
                  <p>Total:</p>
                  <span>$ {(cart.total + extraCharge).toFixed(2)}</span>
                </div>
                <Link href="#customer" passHref>
                  <button className={styles.btn}>
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
                </Link>
              </div>
              <OrderBtn text="Continue Shopping" />
            </aside>
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          <h1>Your Shopping Cart is Empty!!</h1>
          <div className={styles.order__btn}>
            <OrderBtn text="Order Now" />
          </div>
        </div>
      )}
    </>
  );
};
export default CartItems;
