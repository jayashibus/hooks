import React from "react";
import { Link } from "react-router-dom";

const ListExample = () => {
  return (
    <div className="ui relaxed divided list">
      <div className="item">
        <i className="large github middle aligned icon"></i>
        <div className="content">
          <Link to="/example/changetitle" className="item">
            ChangeTitle
          </Link>

          <div className="description">Updated 10 mins ago</div>
        </div>
      </div>
      <div className="item">
        <i className="large github middle aligned icon"></i>
        <div className="content">
          <Link to="/example/usesstatearray" className="item">
            useStateArray
          </Link>
          <div className="description">Updated 22 mins ago</div>
        </div>
      </div>
      <div className="item">
        <i className="large github middle aligned icon"></i>
        <div className="content">
          <Link to="/example/multiplestate" className="item">
            Multiple Statevalue
          </Link>
          <div className="description">Updated 34 mins ago</div>
        </div>
      </div>
      <div className="item">
        <i className="large github middle aligned icon"></i>
        <div className="content">
          <Link to="/example/counter" className="item">
            Counter
          </Link>
          <div className="description">Updated 34 mins ago</div>
        </div>
      </div>
      <div className="item">
        <i className="large github middle aligned icon"></i>
        <div className="content">
          <Link to="/example/deletelist" className="item">
            Delete List
          </Link>
          <div className="description">Updated 34 mins ago</div>
        </div>
      </div>
      <div className="item">
        <i className="large github middle aligned icon"></i>
        <div className="content">
          <Link to="/example/fetchapi" className="item">
            API - Fetch data
          </Link>
          <div className="description">Updated 34 mins ago</div>
        </div>
      </div>
      <div className="item">
        <i className="large github middle aligned icon"></i>
        <div className="content">
          <Link to="/example/showhide" className="item">
            Show/Hide
          </Link>
          <div className="description">Updated 34 mins ago</div>
        </div>
      </div>
      <div className="item">
        <i className="large github middle aligned icon"></i>
        <div className="content">
          <Link to="/example/formhandler" className="item">
            Form FormHandler
          </Link>
          <div className="description">Updated 34 mins ago</div>
        </div>
      </div>
    </div>
  );
};

export default ListExample;
