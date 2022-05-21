import React, { useState, useEffect } from "react";
import axios from "axios";

const GetApi = () => {
  const [products, SetProducts] = useState([]);

  const getProductData = async () => {
    try {
      const data = await axios.get("https://api.github.com/users");
      console.log(data.data);
      SetProducts(data.data);
    } catch (e) {
      //console.log(e);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div>
      <div className="ui cards">
        {products.map((item) => {
          return (
            <div className="card" key={item.id}>
              <div className="content">
                <img
                  className="right floated mini ui image"
                  alt="profilepic"
                  src={item.avatar_url}
                />
                <div className="header">{item.login}</div>
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
    </div>
  );
};

export default GetApi;
