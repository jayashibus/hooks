import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

const Navbar = () => {
  const count = useSelector((state) => state.counter.value);

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
        <Link to="/projects" className="item">
          Projects
        </Link>
        <Link to="/redux" className="item">
          Redux
        </Link>
        <Link to="/test" className="item">
          Test
        </Link>
        <Link to="/list" className="item">
          List
        </Link>
        <Link to="/pipeline" className="item">
          Pipeline
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
              Logout {count}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
