import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { calculateTotals } from "redux/cartSlice";
import styles from "./BillSummary.module.scss";

const BillSummary = ({ products, totalAmount }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [products, dispatch]);

  let noCharge = 0;
  let fixedDeliveryCharge = 5;
  let deliveryCharge, extraCharge;

  if (totalAmount > 50) {
    deliveryCharge = "FREE";
    extraCharge = 0;
  } else {
    deliveryCharge = fixedDeliveryCharge;
    extraCharge = deliveryCharge - noCharge;
  }

  return (
    <div className={styles.container}>
      <div className={styles.summary}>
        <p>Subtotal:</p>
        <span>$ {totalAmount.toFixed(2)}</span>
      </div>
      <div className={styles.summary}>
        <p>Delivery Charge:</p>
        {totalAmount > 50 ? (
          <span>FREE!!!</span>
        ) : (
          <span>$ {deliveryCharge}</span>
        )}
      </div>
      <div className={styles.summary}>
        <p>Discount:</p>
        <span>$ {noCharge}</span>
      </div>
      <div className={styles.notice}>
        <p>**Minimum Delivery Charge is $5</p>
        <p>
          *Extra Delivery Charges are added based upon your provided location.
        </p>
      </div>
      <hr />
      <div className={styles.summary}>
        <p>Total:</p>
        <span>$ {(totalAmount + extraCharge).toFixed(2)}</span>
      </div>
    </div>
  );
};
export default BillSummary;
