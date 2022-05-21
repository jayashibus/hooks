import React, { useState } from "react";

const FormHandler = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const removeHandler = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (firstName && lastName && email) {
      const person = {
        id: new Date().getTime().toString(),
        firstName: firstName,
        lastName: lastName,
        email: email,
      };
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName("");
      setLastName("");
      setEmail("");
    } else {
      console.log("Empty Values");
    }
  };

  return (
    <div>
      <div className="ui form">
        <form onSubmit={onSubmitHandler}>
          <div className="three fields">
            <div className="field">
              <label>First name</label>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="field">
              <label>Last name</label>
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="field">
              <label>Email</label>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <button className="ui olive button" onSubmit={onSubmitHandler}>
            Add
          </button>
        </form>
      </div>

      <div className="ui cards">
        {people.map((item) => {
          const { id, firstName, lastName, email } = item;
          return (
            <div className="card" key={id}>
              <div className="content">
                <img
                  className="right floated mini ui image"
                  alt="profilepic"
                  src="https://avatars.githubusercontent.com/u/1?v=4"
                />
                <div className="header">
                  {firstName} {lastName}
                </div>
                <div className="meta">{email}</div>
                <div className="description">
                  Elliot requested permission to view your contact details
                </div>
              </div>
              <div className="extra content">
                <div className="ui two buttons">
                  <div className="ui basic green button">Approve</div>
                  <div
                    className="ui basic red button"
                    onClick={() => removeHandler(id)}
                  >
                    Decline
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FormHandler;
