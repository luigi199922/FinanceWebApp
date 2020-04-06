import React from "react";
import { getTickerExpectedReturns } from "../../shared/functions";
import StockChartForm from "../../components/StockChartForm/StockChartForm";

export default class Stocks extends React.Component {
  componentDidMount() {
    this.onSubmitFormHandler = this.onSubmitFormHandler.bind(this);
    this.onSubmitFormHandler();
  }
  onSubmitFormHandler(formValues = this.state.initialTicker) {
    console.log(formValues)
  }

  state = {
    loading: true,
    ticker: "AAPL",
    expectedReturns: 0,
    stDev: 0,
    timePeriod: "",
    error: null,
    initialTicker: {
      ticker: "EPZM",
      timeFrame: "15",
      startDate: "1572651390",
      endDate: "1573910590",
    },
  };

  render() {
    let stockInfo = null;
    if (!this.state.loading) {
      stockInfo = (
        <div style={{margin: "auto"}}>
          <h2>{this.state.ticker}</h2>
          <p>Expected Returns: {this.state.expectedReturns} %</p>
          <p>Risk: {this.state.stDev} %</p>
        </div>
      );
    }
    return (
      <div>
        {stockInfo}
        <StockChartForm forex={true}formSubmit={this.onSubmitFormHandler} />
      </div>
    );
  }
}
