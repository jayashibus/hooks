import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increaseHandler = () => {
    setCounter(counter + 1);
  };

  const decreaseHandler = () => {
    setCounter(counter - 1);
  };

  const resetHandler = () => {
    setCounter(0);
  };

  return (
    <div>
      <h1>Counter</h1>
      <div class="ui compact menu">
        <a href="#" class="item">
          <i class="icon mail"></i> Messages
          <div class="floating ui red label">{counter}</div>
        </a>
        <a href="#" class="item">
          <i class="icon users"></i> Friends
          <div class="floating ui teal label">{counter}</div>
        </a>
      </div>
      <div className="ui hidden divider">
        <button className="ui olive button" onClick={increaseHandler}>
          Increase
        </button>
        <button className="ui red button" onClick={resetHandler}>
          Reset
        </button>
        <button className="ui teal button" onClick={decreaseHandler}>
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
