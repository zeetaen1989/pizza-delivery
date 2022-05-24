import Image from "next/image";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

import { resetCart } from "redux/cartRedux";
import { BillSummary } from "@components/elements";
import styles from "./Payment.module.scss";

const Payment = ({ products, total, setActiveTab }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  let deliveryCharge, extraCharge;

  if (total > 50) {
    deliveryCharge = 0;
    extraCharge = 0;
  } else {
    deliveryCharge = 5;
    extraCharge = deliveryCharge;
  }

  const amount = cart.total + extraCharge;
  const currency = "USD";
  const style = { layout: "vertical" };

  const createOrder = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data);
      if (res.status === 201) {
        dispatch(resetCart());
        router.push(`/orders/${res.data._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Custom component to wrap the PayPalButtons and handle currency changes
  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner, dispatch]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              const shipping = details.purchase_units[0].shipping;
              createOrder({
                customer: shipping.name.full_name,
                address: shipping.address.address_line_1,
                total: cart.total,
                method: 1,
              });
            });
          }}
        />
      </>
    );
  };

  return (
    <div className={styles.container}>
      <h1>Payment Details</h1>
      <div className={styles.content}>
        <article className={styles.left}>
          <h1>Your Orders</h1>
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
        </article>
        <aside className={styles.right}>
          <h1>Bill Summary</h1>
          <hr />
          <BillSummary products={products} total={total} />
          <hr />
          <div style={{ maxWidth: "750px", minHeight: "200px" }}>
            <PayPalScriptProvider
              options={{
                "client-id":
                  "AfVuFJyu4kkvOizInmQWxAao66SNyKl7ztmYgmvX7ixBPWEvv9_5xIgzE9HNjxgsrsx1mN3vX9ExiCjD",
                components: "buttons",
                currency: "USD",
              }}
            >
              <ButtonWrapper currency={currency} showSpinner={false} />
            </PayPalScriptProvider>
          </div>
        </aside>
      </div>
    </div>
  );
};
export default Payment;
