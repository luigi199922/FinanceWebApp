import React, { useState, useEffect } from "react";
import { Button, Paper } from "@material-ui/core";
import Payoff from "../Charts/Payoff/Payoff";
import Delete from "./Delete.svg";
import { getMaxStrike, getPayoffData } from "./utility";

const Portfolio = ({ options, removeOption }) => {
  const [Data, setData] = useState([]);
  const [Labels, setLabels] = useState([]);
  const [view, setView] = useState(false);

  useEffect(() => {
    console.log("Portfolio useEffect");
    const { data, labels } = getPayoffData(options);
    setData(data);
    setLabels(labels);
  }, [options]);

  const keys = Object.keys(options);
  let list = keys.map((key) => {
    const o = options[key];
    return (
      <ul key={o.contractName}>
        <p>
          {o.contractName} Strike: {o.strike} Cost: {o.ask} Amount: {o.amount}
        </p>
        <div onClick={() => removeOption(o.contractName)}>
          <img src={Delete} alt="Remove"></img>
        </div>
      </ul>
    );
  });

  return (
    <>
      <Paper>
        <div>
          <h3>Analyze Option Portfolio:</h3>
          {list}
          {list.length > 0 && (
            <>
              <p>{getMaxStrike(options)}</p>
              <Button color="primary" onClick={() => setView(true)}>
                View Chart
              </Button>
              <Button color="primary" onClick={() => setView(false)}>
                Hide Chart
              </Button>
            </>
          )}
        </div>
        {view && <Payoff title={"Some Title"} data={Data} labels={Labels} />}
      </Paper>
    </>
  );
};

export default Portfolio;
