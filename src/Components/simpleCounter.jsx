import { useState } from "react";
import cssClasses from "../CSS/simpleCounter.module.css";

const SimpleCounter = () => {
  var [initialNum, incrementCount] = useState(0);

  function makeIncrement() {
    incrementCount(initialNum + 1);
  }

  function makeDecrement() {
    incrementCount(initialNum - 1);
  }

  return (
    <>
      <h1>Counter App</h1>
      <div className={cssClasses.row}>
        <button onClick={makeIncrement} className={cssClasses.col}>
          +
        </button>
        <div className={cssClasses.col}>{initialNum}</div>
        <button className={cssClasses.col} onClick={makeDecrement}>
          -
        </button>
      </div>
    </>
  );
};
export default SimpleCounter;
