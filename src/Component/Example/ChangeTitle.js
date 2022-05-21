import React, { useState } from "react";

const ChangeTitle = () => {
  const [title, setTitle] = useState("Change Title");

  const onClickHandler = (event) => {
    console.log(event);
    if (title === "Change Title") {
      setTitle("Title changed");
    } else {
      setTitle("Change Title");
    }
  };

  return (
    <div>
      <h1> Welcome to UseState {title}</h1>
      <button className="btn" onClick={onClickHandler}>
        Change Title
      </button>
    </div>
  );
};

export default ChangeTitle;
