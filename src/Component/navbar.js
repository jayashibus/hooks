import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <div className="ui pointing menu">
        <Link to="/" className="active item">
          Home
        </Link>
        <Link to="/messages" className="item">
          Messages
        </Link>
        <Link to="/friends" className="item">
          Friends
        </Link>
        <Link to="/tasktracker" className="item">
          TaskTracker
        </Link>
        <Link to="/search" className="item">
          Search
        </Link>
        <Link to="/example" className="item">
          Example
        </Link>
        <Link to="/api" className="item">
          Api
        </Link>
        <Link to="/login" className="item">
          Login
        </Link>
        <div className="right menu">
          <div className="item">
            <div className="ui transparent icon input">
              <input type="text" placeholder="Search..." />
              <i className="search link icon"></i>
            </div>
          </div>
          <div className="right menu">
            <a href="/#" className="ui item">
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
