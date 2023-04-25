import React, { useState } from "react";

const Assignment = () => {
  const [firstName, setFirstName] = useState("Jaya");
  const [list, setList] = useState([]);
  console.log("Not Ckciket tey...");

  const addHandler = (e) => {
    e.preventDefault();
    setList([...list, firstName]);
  };

  const removeHandler = (index) => {
    setList(list.filter((item) => item !== index));
  };

  return (
    <div>
      <h1>Assignment</h1>
      <form>
        <input
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
        <button onClick={addHandler}> Add </button>
        <ul>
          {list.length}
          {list.map((item, index) => (
            <>
              <li key={index}>{item}</li>
              <button onClick={() => removeHandler(item)}>remove</button>
            </>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default Assignment;
