import React from "react";
import classes from "./StateCard.module.css"

const StateCard = (props) => {
  return (
    <div className={classes.Card}>
      <h3>{props.state}</h3>
      <p>Cases: {props.cases}</p>
      <p>Deaths : {props.deaths}</p>
    </div>
  );
};
export default StateCard
