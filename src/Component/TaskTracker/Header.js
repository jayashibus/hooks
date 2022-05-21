import React from "react";
import Button from "./Button";

function Header({ title, onAdd, showAdd }) {
  return (
    <div>
      <header className="header">
        <h1 className="header">{title}</h1>
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      </header>
    </div>
  );
}

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
