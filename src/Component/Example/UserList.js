import React, { useState } from "react";

const UserList = ({ users }) => {
  const [people, setPeople] = useState(users);

  const onDeleteHandler = (id) => {
    setPeople((oldPeople) => {
      let newpeople = oldPeople.filter((user) => user.id !== id);
      return newpeople;
    });
  };

  //const users = props.users;
  const ListUsers = people.map((user) => (
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
        <div>
          <button
            className="ui olive button"
            onClick={() => onDeleteHandler(user.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <h4> Name Lists </h4>

      <div className="ui horizontal list">{ListUsers}</div>
      <div className="ui hidden divider"></div>
      <div className="ui horizontal list center aligned">
        <div className="ui center aligned">
          <button className="ui olive button" onClick={() => setPeople([])}>
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserList;
