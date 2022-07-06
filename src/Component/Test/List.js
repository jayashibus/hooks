import React, { useState } from "react";

const List = ({ data }) => {
  const [search, setSearch] = useState();
  const [foundUsers, setFoundUsers] = useState(data);
  const [showbutton, setShowbutton] = useState(true);
  const [buttonText, setButtonText] = useState("OFF");

  const toggleHandler = () => {
    setShowbutton(!showbutton);
    if (showbutton === false) {
      setButtonText("OFF");
    } else {
      setButtonText("ON");
    }
  };

  const onChangeHandler = (event) => {
    const keyword = event.target.value;
    setSearch(event.target.value);
    if (keyword !== "") {
      const results = data.filter((singleData) => {
        return singleData.name.toLowerCase().includes(keyword.toLowerCase());
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(data);
    }
  };

  return (
    <div>
      <form>
        <h1>{showbutton ? `class${buttonText}active` : ""}</h1>

        <h1> hi {search}</h1>
        <input
          type="text"
          name="search"
          placeholder="Search here"
          value={search}
          onChange={onChangeHandler}
        />
      </form>
      {foundUsers.map((user) => (
        <h1>{user.name}</h1>
      ))}

      <button onClick={toggleHandler}>{buttonText}</button>
    </div>
  );
};

export default List;

// import React, { useState } from "react";
// import data from "./data";

// const Test = () => {
//   const [usersData, setUserData] = useState(data);
//   const [search, setSearch] = useState();
//   const [buttonText, setButtonText] = useState("OFF");

//   const onClickHandler = () => {
//     buttonText == "ON" ? setButtonText("OFF") : setButtonText("ON");
//   };

//   const onChangeHandler = (event) => {
//     const keyword = event.target.value;
//     setSearch(keyword);
//     if (keyword !== "") {
//       const filter = usersData.filter((singleData) => {
//         return singleData.name.toLowerCase().includes(keyword.toLowerCase());
//       });
//       setUserData(filter);
//     } else {
//       setUserData(data);
//     }
//   };
//   return (
//     <div>
//       <h1>
//         Test details comes here {search} {buttonText}
//       </h1>
//       <input
//         type="text"
//         onChange={onChangeHandler}
//         value={search}
//         placeholder="Search Here !"
//       ></input>

//       {usersData.map((userData) => (
//         <h1>{userData.name}</h1>
//       ))}

//       <div className={`shibu ${search == "" ? "Jaidyn" : "Jaivyn"}`}></div>
//       <button onClick={onClickHandler}>{buttonText}</button>
//     </div>
//   );
// };

// export default Test;
