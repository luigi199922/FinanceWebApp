import React from "react";
import classes from "./Input.module.css";

const input = ({
  invalid,
  shouldValidate,
  touched,
  elementConfig,
  value,
  changed,
  elementType,
  label,
}) => {
  let inputElement = null;
  const inputClasses = [classes.InputElement];
  if (invalid && shouldValidate && touched) {
    inputClasses.push(classes.Invalid);
  }
  switch (elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea {...elementConfig} value={value} onChange={changed} />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={inputClasses.join(" ")}
          {...elementConfig}
          value={value}
          onChange={changed}
        >
          {elementConfig.options.map((option, key) => {
            return (
              <option key={option.value + key} value={option.value}>
                {option.displayValue}
              </option>
            );
          })}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...elementConfig}
          value={value}
        />
      );
  }
  return (
    <div className={inputClasses.join(" ")}>
      <label className={classes.Label}>{label}</label>
      {inputElement}
    </div>
  );
};
export default input;
