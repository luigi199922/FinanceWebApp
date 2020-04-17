import React from "react";
import classes from "./Button.module.css";
const button = ({ disabled, clicked, style, btnType, children}) => (
  <button
    disabled={disabled}
    className={[classes.Button, classes[btnType]].join(" ")}
    onClick={clicked}
    style={style}
  >
    {children}
  </button>
);
export default button;
