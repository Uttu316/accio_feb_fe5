import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  //   let count = 0; //normal variable

  const onAdd = (e) => {
    // count += 1;
    // const el = document.getElementById("countel");
    // el.innerHTML = count;
    setCount(count + 1);
  };

  const onMinus = (e) => {
    // count -= 1;

    // const el = document.getElementById("countel");
    // el.innerHTML = count;
    setCount(count - 1);
  };

  const isHigher = count > 10;

  const isEven = count % 2 === 0;

  const isLower = count < 0;
  return (
    <div>
      <h2 id="countel">{count}</h2>

      <button onClick={onAdd}>Add</button>
      <button onClick={onMinus}>Minus</button>

      {isEven && <h3>Number is Even</h3>}
      {isHigher && <h3>Number is Higher</h3>}
      {isLower && <h3>Number is Lower</h3>}
    </div>
  );
};

//Counter function will be re called by React internally when the state changes
// this process is knows as re render of component
export default Counter;
