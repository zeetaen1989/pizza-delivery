import { useState } from "react";
import {
  MdAddCircleOutline,
  MdOutlineRemoveCircleOutline,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { decreaseProduct } from "redux/cartRedux";

import styles from "./Counter.module.scss";

const Counter = ({ count }) => {
  // const dispatch = useDispatch();
  const [counter, setCounter] = useState(1);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleMinus = () => {
    if (counter > 1) {
      setCounter(counter - 1);
      // dispatch(decreaseProduct(count._id));
    } else {
      setCounter(1);
    }
  };

  return (
    <section className={styles.container}>
      <MdOutlineRemoveCircleOutline
        className={styles.count__btn}
        onClick={handleMinus}
      />
      <span
        className={styles.count__num}
        onChange={(e) => setCounter(e.target.value)}
      >
        {count}
      </span>
      <MdAddCircleOutline className={styles.count__btn} onClick={handleAdd} />
    </section>
  );
};
export default Counter;
