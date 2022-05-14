import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "redux/cartRedux";
import styles from "./BillSummary.module.scss";

const BillSummary = ({ products, total }) => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(calculateTotals());
  // }, [products, dispatch]);

  let deliveryCharge = (5.55).toFixed(2);
  let discount = (0.0).toFixed(2);
  let extraCharge = deliveryCharge - discount;

  return (
    <div className={styles.container}>
      <div className={styles.summary}>
        <p>Subtotal:</p>
        <span>$ {total.toFixed(2)}</span>
      </div>
      <div className={styles.summary}>
        <p>Delivery Charge:</p>
        <span>$ {deliveryCharge}</span>
      </div>
      <div className={styles.summary}>
        <p>Discount:</p>
        <span>- $ {discount}</span>
      </div>
      <div className={styles.notice}>
        <p>**Minimum Delivery Charge is $5.00</p>
        <p>
          *Extra Delivery Charges are added based upon your provided location.
        </p>
      </div>
      <hr />
      <div className={styles.summary}>
        <p>Total:</p>
        <span>$ {(total + extraCharge).toFixed(2)}</span>
      </div>
    </div>
  );
};
export default BillSummary;
