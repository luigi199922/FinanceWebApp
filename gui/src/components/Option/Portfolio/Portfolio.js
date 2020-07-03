import React, { useState, useEffect } from "react";
import { Button, Paper } from "@material-ui/core";
import Payoff from "../Charts/Payoff/Payoff";
import { getPayoffData } from "./utility";
import OptionControls from "./OptionControls";
import { useStore } from "../../../hooks-store/store";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router";

const useStyles = makeStyles({
  container: {
    padding: "10px",
  },
});

const Portfolio = ({ history }) => {
  const classes = useStyles();
  const [state, dispatch] = useStore();
  const [Data, setData] = useState([]);
  const [Labels, setLabels] = useState([]);
  const [view, setView] = useState(false);
  const { portfolio } = state;

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
        key={o.contractName}
        option={o}
        removeOption={() =>
          dispatch("REMOVE_OPTION", { contract: o.contractName })
        }
      />
    );
  });
  console.log(portfolio, state);
  return (
    <>
      <Paper className={classes.container}>
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
              <Button
                color="primary"
                onClick={() =>
                  dispatch("ADD_OPTION", {
                    option: {
                      contractName: state.stock.ticker,
                      type: "STOCK",
                      strike: state.stock.data.priceClose,
                      bid: 0,
                      ask: 0,
                    },
                    direction: "LONG",
                  })
                }
              >
                Add Stock Purchase
              </Button>
            </>
          )}
        </div>
        {view && <Payoff title={"Some Title"} data={Data} labels={Labels} />}
      </Paper>
    </>
  );
};

export default withRouter(Portfolio);
