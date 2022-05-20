import Link from "next/link";
import styles from "./OrderBtn.module.scss";

const OrderBtn = ({ text, link }) => {
  return (
    <Link href={`/${link}`} passHref>
      <a className={styles.btn__order}>
        <span className={styles.text}>{text}</span>
        <svg viewBox="0 0 13 10" height="10px" width="15px">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </a>
    </Link>
  );
};
export default OrderBtn;
