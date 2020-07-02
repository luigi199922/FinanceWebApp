import React, { useState, useEffect } from "react";
import { Button, Paper } from "@material-ui/core";
import Payoff from "../Charts/Payoff/Payoff";
import { getPayoffData } from "./utility";
import OptionControls from "./OptionControls";

const Portfolio = ({ options, removeOption }) => {
  const [Data, setData] = useState([]);
  const [Labels, setLabels] = useState([]);
  const [view, setView] = useState(false);

  useEffect(() => {
    if (Object.keys(options).length === 0) return setView(false);
    const { data, labels } = getPayoffData(options);
    setData(data);
    setLabels(labels);
  }, [options]);

  let list = Object.keys(options).map((key) => {
    const o = options[key];
    return <OptionControls option={o} removeOption={removeOption} />;
  });

  return (
    <>
      <Paper>
        <div>
          <h3>Analyze Option Portfolio:</h3>
          {list}
          {list.length > 0 && (
            <>
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
