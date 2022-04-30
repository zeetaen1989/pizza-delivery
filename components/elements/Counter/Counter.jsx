import { useState } from "react";
import {
  MdAddCircleOutline,
  MdOutlineRemoveCircleOutline,
} from "react-icons/md";

import styles from "./Counter.module.scss";

const Counter = () => {
  const [count, setCount] = useState(1);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleMinus = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount(1);
    }
  };

  return (
    <div className={styles.container}>
      <MdOutlineRemoveCircleOutline
        className={styles.count__btn}
        onClick={handleMinus}
      />
      <span className={styles.count__num}>{count}</span>
      <MdAddCircleOutline className={styles.count__btn} onClick={handleAdd} />
    </div>
  );
};
export default Counter;
