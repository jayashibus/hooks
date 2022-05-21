import React from "react";

import ListArray from "./ListArray";

const data = [
  {
    id: 1,
    name: "John",
    age: 26,
    designation: "Top Contributer",
    imgname: "matt.jpeg",
  },
  {
    id: 2,
    name: "Shibu",
    age: 30,
    designation: "Admin",
    imgname: "christian.jpeg",
  },
  {
    id: 3,
    name: "Lundu",
    age: 40,
    designation: "Top Rated",
    imgname: "tom.jpeg",
  },
];

const UseStateArray = () => {
  return (
    <div>
      <ListArray users={data} />
    </div>
  );
};

export default UseStateArray;
