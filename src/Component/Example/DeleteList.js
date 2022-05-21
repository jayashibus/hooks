import React from "react";
import UserList from "./UserList";

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

const DeleteList = () => {
  return (
    <div>
      <h1>Delete List</h1>
      <UserList users={data} />
    </div>
  );
};

export default DeleteList;
