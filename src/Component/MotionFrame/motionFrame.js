import React, { useState } from "react";
import { motion } from "framer-motion/dist/framer-motion";
import "./motionFrame.css";

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

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default MotionFrame;
