import { useState } from "react";
import {
  MdAddCircleOutline,
  MdOutlineRemoveCircleOutline,
} from "react-icons/md";

import styles from "./Counter.module.scss";

const Counter = ({ count }) => {
  const [counter, setCounter] = useState(1);

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
    <div className={styles.container}>
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
    </div>
  );
};
export default Counter;
