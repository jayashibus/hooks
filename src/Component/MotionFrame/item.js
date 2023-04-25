import * as React from "react";
import { useMotionValue, Reorder } from "framer-motion/dist/framer-motion";
//import useRaisedShadow from "./use-raised-shadow";

const Item = ({ item }) => {
  const y = useMotionValue(0);
  //const boxShadow = useRaisedShadow(y);

  return (
    <div></div>
    // <Reorder.Item value={item} id={item} style={{ boxShadow, y }}>
    //   <span>{item}</span>
    // </Reorder.Item>
  );
};

export default Item;
