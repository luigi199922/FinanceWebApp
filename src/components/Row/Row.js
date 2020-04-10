import React from "react";
import TD from "./TableData/TableData";
import classes from "./Row.module.css";

const Row = ({ option, optionDisplay }) => {
  let TableData = null;
  const { inTheMoney } = option;
  const properties = Object.keys(optionDisplay);
  TableData = properties.map((val, key) => {
    if (val === "lastTradeDateTime") {
      return (
        <TD key={key}>
          {new Date(option.lastTradeDateTime.split(" ")).toDateString()}
        </TD>
      );
    }
    return <TD key={key}>{option[val]}</TD>;
  });
  return (
    <tr className={inTheMoney === "TRUE" ? classes.Row : null}>{TableData}</tr>
  );
};
export default Row;
