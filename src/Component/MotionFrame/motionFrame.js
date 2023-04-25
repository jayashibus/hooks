import React, { useState } from "react";
import { motion, Reorder } from "framer-motion/dist/framer-motion";
import "./motionFrame.css";
import Item from "./item";
const initialItems = ["🍅 Tomato", "🥒 Cucumber", "🧀 Cheese", "🥬 Lettuce"];

const MotionFrame = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div>
      <h1>Welcome to MotionFrame</h1>
      <div className="motion">
        <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
          <motion.div className="handle" layout transition={spring} />
        </div>
      </div>
    </div>
  );
};

export const Swap = () => {
  const [items, setItems] = useState(initialItems);

  return (
    <Reorder.Group axis="y" onReorder={setItems} values={items}>
      {items.map((item) => (
        <Item key={item} item={item} />
      ))}
    </Reorder.Group>
  );
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default { MotionFrame, Swap };
