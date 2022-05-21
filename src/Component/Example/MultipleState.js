import React from "react";
import ListMultipleArray from "./ListMultipleArray";

const data = {
  id: 1,
  name: "John",
  age: 26,
  designation: "Top Contributer",
  imgname: "matt.jpeg",
};

const changeData = {
  id: 2,
  name: "Shibu",
  age: 40,
  designation: "HR",
  imgname: "tom.jpeg",
};

const MultipleState = () => {
  return (
    <div>
      <ListMultipleArray user={data} newData={changeData} />
    </div>
  );
};

export default MultipleState;
