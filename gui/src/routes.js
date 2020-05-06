import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
const StockAnalysis = lazy(() => import("./containers/Stocks/Stocks"));
const COVID = lazy(() => import("./containers/COVID/COVID"));
const Options = lazy(() => import("./containers/Options/Options"));
const InstrumentChart = lazy(() => import("./containers/InstrumentChart/InstrumentChart"));
const Auth = lazy(() => import("./containers/Auth/Auth"))
const Signup = lazy(() => import("./containers/Auth/Signup/Signup"))
const Economic = lazy(() => import("./containers/Economic/Economic"));
const Logout = lazy(()=> import("./containers/Auth/Logout/Logout"))
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
      <Route exact path="/login" render={loadComponent(Auth)} />
      <Route exact path="/signup" render={loadComponent(Signup)} />
      <Route exact path="/logout" render={loadComponent(Logout)} />
    </Switch>
  );
};
export default BaseRouter;
