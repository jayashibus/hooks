import React, { useState } from "react";
import data from "./data";

const styles = {
  show: {
    backgroundColor: "red",
  },
  hide: {
    backgroundColor: "yellow",
  },
};

const list = () => {
  const [datas, setDatas] = useState(data);
  const [toggle, setToggle] = useState(false);

  const updateToggle = (id) => {
    const newData = datas.map((obj) => {
      if (obj.id === id) {
        return { ...obj, favorites: !obj.favorites };
      }
      return obj;
    });
    setDatas(newData);
  };

  const onDeleteHandler = (id) => {
    setDatas(datas.filter((item) => item.id !== id));
  };

  const onChangeHandler = (event) => {
    const keyword = event.target.value;
    if (keyword !== "") {
      const results = datas.filter((singleData) => {
        return singleData.name.toLowerCase().includes(keyword.toLowerCase());
      });
      setDatas(results);
    } else {
      setDatas(data);
    }
  };

  return (
    <div>
      <h1>Listing here</h1>
      <input type="text" onChange={onChangeHandler} />
      {datas.map((item) => (
        <div>
          <div key={item.id}> {item.name} </div>
          <button onClick={() => onDeleteHandler(item.id)}>Delete</button>

          <button
            style={item.favorites ? styles.show : styles.hide}
            onClick={() => updateToggle(item.id)}
          >
            {item.favorites ? "Show" : "Hide"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default list;
