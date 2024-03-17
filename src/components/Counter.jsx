import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(1);

  function handleIncrement() {
    setCounter(counter > 1 ? counter - 1 : counter);
  }

  function handleDecrement() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <button onClick={handleIncrement}>-</button>
      <p>{counter}</p>
      <button onClick={handleDecrement}>+</button>
    </div>
  );
}

export default Counter;
