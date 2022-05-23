import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { calculateTotals } from "redux/cartRedux";
import styles from "./BillSummary.module.scss";

const BillSummary = ({ products, total }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [products, dispatch]);

  let noCharge = (0.0).toFixed(2);
  let deliveryCharge = (5.0).toFixed(2);
  let extraCharge = deliveryCharge - noCharge;

  return (
    <div className={styles.container}>
      <div className={styles.summary}>
        <p>Subtotal:</p>
        <span>$ {total.toFixed(2)}</span>
      </div>
      <div className={styles.summary}>
        <p>Delivery Charge:</p>
        {total > 50 ? (
          <span>$ {noCharge}</span>
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
        <span>$ {(total + extraCharge).toFixed(2)}</span>
      </div>
    </div>
  );
};
export default BillSummary;
