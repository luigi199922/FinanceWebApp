import React from "react";
import TD from "./TableData/TableData";

const Row = ({ option, optionDisplay }) => {
  let TableData = null;
  const properties = Object.keys(optionDisplay);
  TableData = properties.map((val, key) => {
    if (val === "lastTradeDateTime") {
      return (
        <TD>{new Date(option.lastTradeDateTime.split(" ")).toDateString()}</TD>
      );
    }
    return <TD>{option[val]}</TD>;
  });
  return <tr>{TableData}</tr>;
};
export default Row;
