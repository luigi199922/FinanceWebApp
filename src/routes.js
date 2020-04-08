import React from "react";
import { Switch, Route } from "react-router-dom";
import asyncComponent from "./hoc/asyncComponent/asyncComponent";

const asyncStockAnalysis = asyncComponent(() => {
  return import("./containers/Stocks/Stocks");
});
const asyncCOVID = asyncComponent(() => {
  return import("./containers/COVID/COVID");
});
const asyncOptionsT = asyncComponent(() => {
  return import("./containers/Options/OptionsT");
});
const asyncInstrumentChart = asyncComponent(() => {
  return import("./containers/InstrumentChart/InstrumentChart");
});
const asyncEconomicData = asyncComponent(() => {
  return import("./containers/Economic/Economic");
});
const BaseRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={asyncCOVID} />
      <Route exact path="/options" component={asyncOptionsT} />
      <Route exact path="/stock" component={asyncInstrumentChart} />
      <Route exact path="/stock-analysis" component={asyncStockAnalysis} />
      <Route exact path="/forex" component={asyncInstrumentChart} />
      <Route exact path="/crypto" component={asyncInstrumentChart} />
      <Route exact path="/economic" component={asyncEconomicData} />
    </Switch>
  );
};
export default BaseRouter;
