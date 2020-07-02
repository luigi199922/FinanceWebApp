import React from "react";
import TD from "./TableData/TableData";
import classes from "./Row.module.css";
import { Button } from "@material-ui/core";
import { useStore } from "../../../hooks-store/store";

const Row = ({ option, optionDisplay }) => {
  const { inTheMoney } = option;
  const properties = Object.keys(optionDisplay);
  const dispatch = useStore(false)[1];
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
        <Button
          color="primary"
          onClick={() => dispatch("ADD_OPTION", { option, direction: "LONG" })}
        >
          Long
        </Button>
        <Button
          color="primary"
          onClick={() => dispatch("ADD_OPTION", { option, direction: "SHORT" })}
        >
          Short
        </Button>
      </TD>
    </tr>
  );
};
export default Row;
