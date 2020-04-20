import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
const StockAnalysis = React.lazy(() => import("./containers/Stocks/Stocks"));
const COVID = React.lazy(() => import("./containers/COVID/COVID"));
const Options = React.lazy(() => import("./containers/Options/Options"));
const InstrumentChart = React.lazy(() =>
  import("./containers/InstrumentChart/InstrumentChart")
);
const Economic = React.lazy(() => import("./containers/Economic/Economic"));

const loadComponent = (Component) => {
  return (data) => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...data} />
    </Suspense>
  );
};

const BaseRouter = () => {
  return (
    <Switch>
      <Route exact path="/" render={loadComponent(COVID)} />
      <Route path="/options/" render={loadComponent(Options)} />
      <Route exact path="/stock" render={loadComponent(InstrumentChart)} />
      <Route
        exact
        path="/stock-analysis"
        render={loadComponent(StockAnalysis)}
      />
      <Route exact path="/forex" render={loadComponent(InstrumentChart)} />
      <Route exact path="/crypto" render={loadComponent(InstrumentChart)} />
      <Route exact path="/economic" render={loadComponent(Economic)} />
    </Switch>
  );
};
export default BaseRouter;
