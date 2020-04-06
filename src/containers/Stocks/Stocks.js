import React from "react";
import { getTickerExpectedReturns } from "../../shared/functions";
import StockChartForm from "../../components/StockChartForm/StockChartForm";

export default class Stocks extends React.Component {
  componentDidMount() {
    this.onSubmitFormHandler = this.onSubmitFormHandler.bind(this);
    this.onSubmitFormHandler()
  }
  onSubmitFormHandler(formValues = this.state.initialTicker) {
    const data = getTickerExpectedReturns(
      formValues.ticker,
      formValues.timeFrame,
      formValues.startDate,
      formValues.endDate
    );
    data
      .then((data) => this.setState({ expectedReturns: data }))
      .catch((error) => this.setState({ error: error }));
  }

  state = {
    loading: true,
    ticker: "AAPL",
    expectedReturns: 0,
    timePeriod: "",
    error: null,
    initialTicker: {
        ticker : "EPZM",
        timeFrame : "15",
        startDate : "1572651390",
        endDate : "1573910590",
      }
  };

  render() {
    let stockInfo = null;
    if (!this.state.loading) {
      stockInfo = (
        <div>
          <h2>{this.state.ticker}</h2>
          <p>{this.state.expectedReturns}</p>
        </div>
      );
    }
    return (
      <div>
        {stockInfo}
        <StockChartForm formSubmit={this.onSubmitFormHandler} />
      </div>
    );
  }
}
