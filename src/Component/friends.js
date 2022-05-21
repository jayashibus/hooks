import React from "react";
import jenny from "../images/jenny.jpeg";
import stevie from "../images/stevie.jpeg";
import veronika from "../images/veronika.jpeg";

const Friends = () => {
  return (
    <div>
      <div className="ui items">
        <div className="item">
          <a href="\#" className="ui tiny image">
            <img src={stevie} alt="profilpic" />
          </a>
          <div className="content">
            <a href="\#" className="header">
              Stevie Feliciano
            </a>
            <div className="description">
              <p>
                Stevie Feliciano is a <a href="\#"> library scientist</a> living
                in New York City. She likes to spend her time reading, running,
                and writing.
              </p>
            </div>
          </div>
        </div>
        <div className="item">
          <a href="\#" className="ui tiny image">
            <img src={jenny} alt="\#" />
          </a>
          <div className="content">
            <a href="\#" className="header">
              Veronika Ossi
            </a>
            <div className="description">
              <p>
                Veronika Ossi is a set designer living in New York who{" "}
                <a href="\#">enjoys</a> kittens, music, and partying.
              </p>
            </div>
          </div>
        </div>
        <div className="item">
          <a href="\#" className="ui tiny image">
            <img src={jenny} alt="\#" />
          </a>
          <div className="content">
            <a href="\#" className="header">
              Veronika Ossi
            </a>
            <div className="description">
              <p>
                Veronika Ossi is a set designer living in New York who{" "}
                <a href="\#">enjoys</a> kittens, music, and partying.
              </p>
            </div>
          </div>
        </div>

        <div className="item">
          <a href="\#" className="ui tiny image">
            <img src={veronika} alt="profilepoc" />
          </a>
          <div className="content">
            <a href="\#" className="header">
              Jenny Hess
            </a>
            <div className="description">
              <p>
                Jenny is a student studying Media Management at{" "}
                <a href="\#"> the New School</a>.
              </p>
            </div>
          </div>
        </div>
        <div className="item">
          <a href="\#" className="ui tiny image">
            <img src={jenny} alt="\#" />
          </a>
          <div className="content">
            <a href="\#" className="header">
              Veronika Ossi
            </a>
            <div className="description">
              <p>
                Veronika Ossi is a set designer living in New York who{" "}
                <a href="\#">enjoys</a> kittens, music, and partying.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
