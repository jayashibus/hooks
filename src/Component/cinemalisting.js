import React from "react";
import image1 from "../images/image.png";
import Blog from "./friends";

const CinemaListing = () => {
  return (
    <div>
      <div className="ui grid">
        <div className="ui divided items ten wide column">
          <div className="item">
            <div className="image">
              <img src={image1} alt="mainimage" />
            </div>
            <div className="content">
              <a href="\#" className="header">
                12 Years a Slave
              </a>
              <div className="meta">
                <span className="cinema">Union Square 14</span>
              </div>
              <div className="description">
                <p></p>
              </div>
              <div className="extra">
                <div className="ui label">IMAX</div>
                <div className="ui label">
                  <i className="globe icon"></i> Additional Languages
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="image">
              <img src={image1} alt="mainimage" />
            </div>
            <div className="content">
              <a href="\#" className="header">
                My Neighbor Totoro
              </a>
              <div className="meta">
                <span className="cinema">IFC Cinema</span>
              </div>
              <div className="description">
                <p></p>
              </div>
              <div className="extra">
                <div className="ui right floated primary button">
                  Buy tickets
                  <i className="right chevron icon"></i>
                </div>
                <div className="ui label">Limited</div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="image">
              <img src={image1} alt="mainimage" />
            </div>
            <div className="content">
              <a href="\#" className="header">
                Watchmen
              </a>
              <div className="meta">
                <span className="cinema">IFC</span>
              </div>
              <div className="description">
                <p></p>
              </div>
              <div className="extra">
                <div className="ui right floated primary button">
                  Buy tickets
                  <i className="right chevron icon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="six wide column">
          <Blog />
        </div>
      </div>
    </div>
  );
};

export default CinemaListing;
