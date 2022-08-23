import React from "react";
import "./Pipeline.css";
import data from "./data";
import Card from "./Card";

const Pipeline = () => {
  return (
    <div>
      <div class="main">
        <h1>Project Pipeline</h1>
        <ul class="cards">
          {data.map((item) => (
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img src={item.image} />
                </div>
                <div className="card_content">
                  <h2 className="card_title">{item.name}</h2>
                  <p className="card_text">{item.description}</p>
                  <h4 className="card_title">Round : {item.round}</h4>
                  <h4 className="card_title">Status : {item.status}</h4>
                  <button className="btn card_btn">Read More</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pipeline;
