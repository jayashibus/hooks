import React from "react";
import { Link } from "react-router-dom";

const ProjectList = () => {
  return (
    <div>
      <h3>Project List</h3>
      <div className="ui relaxed divided list">
        <div className="item">
          <i className="large github middle aligned icon"></i>
          <div className="content">
            <Link to="/projects/birthdayremainder" className="item">
              Birthday Remainder
            </Link>

            <div className="description">Updated 10 mins ago</div>
          </div>
        </div>

        <div className="item">
          <i className="large github middle aligned icon"></i>
          <div className="content">
            <Link to="/projects/tour" className="item">
              Tour
            </Link>

            <div className="description">Updated 10 mins ago</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
