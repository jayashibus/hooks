import React, { useState } from "react";

const ListMultipleArray = (props) => {
  const [user, setUser] = useState(props.user);

  const onClickHandler = (event) => {
    // setUser(...user, { age: 26 });
    setUser(props.newData);
  };

  return (
    <div>
      <h4> Name Lists </h4>
      <div className="ui horizontal list">
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
      </div>
      <button className="btn" onClick={onClickHandler}>
        Click Here...!
      </button>
    </div>
  );
};

export default ListMultipleArray;
