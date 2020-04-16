import React from "react";
import { getTickerExpectedReturns } from "../../shared/functions";
import SecurityChartForm from "../../components/SecurityChartForm/SecurityChartForm";
import SecurityInfo from "../../components/SecurityInfo/SecurityInfo"

export default class Stocks extends React.Component {
  componentDidMount() {
    this.onSubmitFormHandler = this.onSubmitFormHandler.bind(this);
    this.onSubmitFormHandler();
  }
  onSubmitFormHandler(formValues = this.state.initialTicker) {
    const data = getTickerExpectedReturns(
      formValues.ticker,
      formValues.timeFrame,
      formValues.startDate,
      formValues.endDate
    );
    data
      .then(([average, stDev]) =>
        this.setState({
          loading: false,
          expectedReturns: average,
          stDev: stDev,
          ticker: formValues.ticker,
        })
      )
      .catch((error) => this.setState({ error: error }));
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
          <SecurityInfo ticker={this.state.ticker}/>
          <h2>{this.state.ticker}</h2>
          <p>Expected Returns: {this.state.expectedReturns.toFixed(2)} %</p>
          <p>Risk: {this.state.stDev.toFixed(2)} %</p>
        </div>
      );
    }
    return (
      <div>
        {stockInfo}
        <SecurityChartForm forex={false} formSubmit={this.onSubmitFormHandler} />
      </div>
    );
  }
}
