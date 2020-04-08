import React from "react";
import { Switch, Route } from "react-router-dom";
import asyncComponent from "./hoc/asyncComponent/asyncComponent";

const asyncStockAnalysis = asyncComponent(() => {
  return import("./containers/Stocks/Stocks");
});
const asyncStockChart = asyncComponent(() => {
  return import("./containers/StockChart/StockChart");
});
const asyncCOVID = asyncComponent(() => {
  return import("./containers/COVID/COVID");
});
const asyncOptionsT = asyncComponent(() => {
  return import("./containers/Options/OptionsT");
});
const asyncForex = asyncComponent(() => {
  return import("./containers/Forex/Forex");
});
const asyncBinance= asyncComponent(() => {
  return import("./containers/Binance/Binance");
});
const asyncInstrumentChart= asyncComponent(() => {
  return import("./containers/InstrumentChart/InstrumentChart");
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
    </Switch>
  );
};
export default BaseRouter;
