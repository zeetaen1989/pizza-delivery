import { useState } from "react";
import {
  MdAddCircleOutline,
  MdOutlineRemoveCircleOutline,
} from "react-icons/md";

import styles from "./Counter.module.scss";

const Counter = ({ quantity }) => {
  const [counter, setCounter] = useState(quantity);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleMinus = () => {
    if (counter > 1) {
      setCounter(counter - 1);
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
        {counter}
      </span>
      <MdAddCircleOutline className={styles.count__btn} onClick={handleAdd} />
    </section>
  );
};
export default Counter;
