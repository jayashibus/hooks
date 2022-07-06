import React, { useEffect, useState } from "react";
import data from "./data.js";
import "./style.css";

const test = () => {
  const [usersData, setUsersData] = useState(data);
  const [search, setSearch] = useState();
  const [showButton, setShowbutton] = useState(true);

  const onChangeHandler = (event) => {
    const keyword = event.target.value;
    setSearch(keyword);
    if (keyword !== "") {
      const results = data.filter((singleData) => {
        return singleData.name
          .toLocaleLowerCase()
          .includes(keyword.toLocaleLowerCase());
      });
      setUsersData(results);
    } else {
      setUsersData(data);
    }
  };

  return (
    <div>
      <h1>
        Welcome {search} {showButton ? "Hide" : "Show"}
      </h1>
      <div className={`Shibu Active ${showButton ? "hide" : "Show"}`}>
        <input type="text" onChange={onChangeHandler}></input>
      </div>
      <div
        className="Changecolor"
        style={{
          width: "400px",
          margin: "10px 10px",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        {usersData.map((userData) => (
          <h1 key={userData.id}>{userData.name}</h1>
        ))}
      </div>

      <button
        style={{
          margin: "10px",
          padding: "15px 45px",
          textAlign: "center",
          textTransform: "uppercase",
          transition: ".5s",
          backgroundSize: "200% auto",
          color: "#000",
          boxShadow: "0 0 20px #eee",
          borderRadius: "10px",
          display: "block",
          backgroundColor: "#85FFBD",
          backgroundImage: "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)",
        }}
        onClick={() => setShowbutton(!showButton)}
      >
        {showButton ? "hide" : "Show"}
      </button>
    </div>
  );
};

export default test;
