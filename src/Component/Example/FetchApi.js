import React, { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const FetchApi = () => {
  const [users, SetUser] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    SetUser(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="ui cards">
      {users.map((item) => {
        const { id, login, avatar_url } = item;
        return (
          <div className="card" key={id}>
            <div className="content">
              <img
                className="right floated mini ui image"
                alt="profilepic"
                src={avatar_url}
              />
              <div className="header">{login}</div>
              <div className="meta">Friends of Veronika</div>
              <div className="description">
                Elliot requested permission to view your contact details
              </div>
            </div>
            <div className="extra content">
              <div className="ui two buttons">
                <div className="ui basic green button">Approve</div>
                <div className="ui basic red button">Decline</div>
              </div>
            </div>
          </div>
        );
      })}
      ;
    </div>
  );
};

export default FetchApi;
