import React, { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [remainder, setRemainder] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please add text");
      return;
    }

    onAdd({ text, day, remainder });

    setText("");
    setDay("");
    setRemainder(false);
  };
  return (
    <div>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Task</label>
          <input
            type="text"
            placeholder="Add Task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label>Day & Time</label>
          <input
            type="text"
            placeholder="Add Date & Time"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>

        <div className="form-control form-control-check">
          <label>Remainder</label>
          <input
            type="checkbox"
            checked={remainder}
            value={remainder}
            onChange={(e) => setRemainder(e.currentTarget.checked)}
          />
        </div>

        <input type="Submit" value="Save Task" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddTask;
