import React, { useState } from "react";

const UnitTest = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [sum, setSum] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setSum(text1 + text2);
  };

  return (
    <div>
      <form>
        <div>
          <label>First Value</label>
          <input
            type="number"
            value={text1}
            onChange={(e) => setText1(e.target.value)}
          />
        </div>
        <div>
          <label>Second Value</label>
          <input
            type="number"
            value={text2}
            onChange={(e) => setText2(e.target.value)}
          />
        </div>
        <div>
          <button onClick={submitHandler}>Submit</button>
        </div>

        <div>Answer is : {sum}</div>
      </form>
    </div>
  );
};

export default UnitTest;
