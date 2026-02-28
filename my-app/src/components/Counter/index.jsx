import { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const onAdd = () => {
    setCount(count + 1);
  };

  const onMinus = () => {
    setCount(count - 1);
  };

  const isHigher = count > 10;
  const isEven = count % 2 === 0;
  const isLower = count < 0;

  return (
    <div className={styles.counter_card}>
      <h2 className={styles.count_display}>{count}</h2>

      <div className={styles.button_group}>
        <button className={`${styles.btn} ${styles.btn_add}`} onClick={onAdd}>
          Add
        </button>
        <button
          className={`${styles.btn} ${styles.btn_minus}`}
          onClick={onMinus}
        >
          Minus
        </button>
      </div>

      <div className={styles.status_container}>
        {isEven && (
          <div className={`${styles.status_msg} ${styles.even}`}>
            Even Number
          </div>
        )}
        {isHigher && (
          <div className={`${styles.status_msg} ${styles.higher}`}>
            Value is Higher
          </div>
        )}
        {isLower && (
          <div className={`${styles.status_msg} ${styles.lower}`}>
            Value is Lower
          </div>
        )}
      </div>
    </div>
  );
};

export default Counter;
