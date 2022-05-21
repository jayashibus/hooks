import React from "react";
import Elliot from "../images/elliot.jpeg";
import Joe from "../images/joe.jpeg";
import Matt from "../images/matt.jpeg";
import Jenny from "../images/jenny.jpeg";

const Message = () => {
  return (
    <div>
      <div className="ui small comments">
        <h3 className="ui dividing header">Comments</h3>
        <div className="comment">
          <a href="\#" className="avatar">
            <img src={Matt} alt="Images" />
          </a>
          <div className="content">
            <a href="\#" className="author">
              Matt
            </a>
            <div className="metadata">
              <span className="date">Today at 5:42PM</span>
            </div>
            <div className="text">How artistic!</div>
            <div className="actions">
              <a href="\#" className="reply">
                Reply
              </a>
            </div>
          </div>
        </div>
        <div className="comment">
          <a href="\#" className="avatar">
            <img src={Elliot} alt="profile imaage" />
          </a>
          <div className="content">
            <a href="\#" className="author">
              Elliot Fu
            </a>
            <div className="metadata">
              <span className="date">Yesterday at 12:30AM</span>
            </div>
            <div className="text">
              <p>This has been very useful for my research. Thanks as well!</p>
            </div>
            <div className="actions">
              <a href="\#" className="reply">
                Reply
              </a>
            </div>
          </div>
          <div className="comments">
            <div className="comment">
              <a href="\#" className="avatar">
                <img src={Jenny} alt="profile" />
              </a>
              <div className="content">
                <a href="\#" className="author">
                  Jenny Hess
                </a>
                <div className="metadata">
                  <span className="date">Just now</span>
                </div>
                <div className="text">Elliot you are always so right :)</div>
                <div className="actions">
                  <a href="\#" className="reply">
                    Reply
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="comment">
          <a href="\#" className="avatar">
            <img src={Joe} alt="profile" />
          </a>
          <div className="content">
            <a href="\#" className="author">
              Joe Henderson
            </a>
            <div className="metadata">
              <span className="date">5 days ago</span>
            </div>
            <div className="text">Dude, this is awesome. Thanks so much</div>
            <div className="actions">
              <a href="\#" className="reply">
                Reply
              </a>
            </div>
          </div>
        </div>
        <form className="ui reply form">
          <div className="field">
            <textarea></textarea>
          </div>
          <div className="ui blue labeled submit icon button">
            <i className="icon edit"></i> Add Reply
          </div>
        </form>
      </div>
    </div>
  );
};

export default Message;
