import React, { useState, useEffect } from "react";
import { Button, Paper } from "@material-ui/core";
import Payoff from "../Charts/Payoff/Payoff";
import { getPayoffData } from "./utility";
import OptionControls from "./OptionControls";
import { useStore } from "../../../hooks-store/store";

const Portfolio = () => {
  const [portfolio, dispatch] = useStore();
  const [Data, setData] = useState([]);
  const [Labels, setLabels] = useState([]);
  const [view, setView] = useState(false);

  useEffect(() => {
    if (Object.keys(portfolio).length === 0) return setView(false);
    const { data, labels } = getPayoffData(portfolio);
    setData(data);
    setLabels(labels);
  }, [portfolio]);

  let list = Object.keys(portfolio).map((key) => {
    const o = portfolio[key];
    return (
      <OptionControls
        option={o}
        removeOption={() =>
          dispatch("REMOVE_OPTION", { contract: o.contractName })
        }
      />
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
