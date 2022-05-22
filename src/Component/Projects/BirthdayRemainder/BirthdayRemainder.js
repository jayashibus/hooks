import React, { useState } from "react";
import data from "./data";
import List from "./List";
import "./index.css";

const BirthdayRemainder = () => {
  const [people, setPeople] = useState(data);
  return (
    <div>
      <main>
        <section className="container">
          <h3> {people.length} Birthday today</h3>
          <List people={people} />
          <button onClick={() => setPeople([])}>Clear All</button>
        </section>
      </main>
    </div>
  );
};

export default BirthdayRemainder;
