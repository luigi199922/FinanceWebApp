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
const BaseRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={asyncCOVID} />
      <Route exact path="/options" component={asyncOptionsT} />
      <Route exact path="/stocks" component={asyncStockChart} />
      <Route exact path="/stock-analysis" component={asyncStockAnalysis} />
      <Route exact path="/forex" component={asyncForex} />
    </Switch>
  );
};
export default BaseRouter;
