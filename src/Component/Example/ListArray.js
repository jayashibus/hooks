import React from "react";

const ListArray = ({ users }) => {
  //const users = props.users;
  const ListUsers = users.map((user) => (
    <div className="item" key={user.id}>
      <img
        className="ui avatar image"
        src={require(`./Images/${user.imgname}`)}
        alt="profileimage"
      />
      <div className="content">
        <div className="header">{user.name}</div>
        <div className="header">Age : {user.age}</div>
        {user.designation}
      </div>
    </div>
  ));
  return (
    <div>
      <h4> Name Lists </h4>

      <div className="ui horizontal list">{ListUsers}</div>
    </div>
  );
};

export default ListArray;
