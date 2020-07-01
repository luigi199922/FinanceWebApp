import React from "react";
import TD from "./TableData/TableData";
import classes from "./Row.module.css";
import { Button } from "@material-ui/core";

const Row = ({ option, optionDisplay, addOption }) => {
  const { inTheMoney } = option;
  const properties = Object.keys(optionDisplay);

  let TableData = null;
  TableData = properties.map((val, key) => {
    if (val === "lastTradeDateTime") {
      return (
        <TD key={key}>
          {new Date(option.lastTradeDateTime.split(" ")).toDateString()}
        </TD>
      );
    } else if (typeof option[val] === "number") {
      return <TD key={key}>{option[val].toFixed(2)}</TD>;
    }
    return <TD key={key}>{option[val]}</TD>;
  });

  return (
    <tr className={inTheMoney === "TRUE" ? classes.Row : null}>
      {TableData}
      <TD>
        <Button color="primary" onClick={() => addOption(option)}>
          Long
        </Button>
        <Button color="primary">Short</Button>
      </TD>
    </tr>
  );
};
export default Row;
