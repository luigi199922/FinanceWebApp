import React from "react";
import Chart from "react-apexcharts";
import { formatAPIRequest } from "../../shared/functions";
import SecurityChartForm from "../SecurityChartForm/SecurityChartForm";
import SecurityInfo from "../SecurityInfo/SecurityInfo"

export default class SecurityGrapher extends React.Component {

  componentDidMount() {
    this.onSubmitFormHandler = this.onSubmitFormHandler.bind(this);
    this.onSubmitFormHandler();
  }

  state = {
    ticker: "",
    loading: true,
    error: null,
    data: [],
    initialGraph: {
      ticker: "",
      timeFrame: "",
      startDate: "",
      endDate: "",
    },
  };

  onSubmitFormHandler(formValues = this.state.initialGraph) {
    const data = formatAPIRequest(
      formValues.ticker,
      formValues.timeFrame,
      formValues.startDate,
      formValues.endDate
    );
    data
      .then((data) =>
        this.setState({ loading: false, data: data, ticker: formValues.ticker })
      )
      .catch((error) => this.setState({ error: error }));
  }

  render() {
    const options = {
      chart: {
        type: "candlestick",
        height: 350,
      },
      title: {
        text: this.state.ticker,
        align: "left",
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
    };

    let customChart = null;
    if (!this.state.loading) {
      const final = [
        {
          data: this.state.data,
        },
      ];
      customChart = (
        <Chart
          options={options}
          series={final}
          type="candlestick"
          height={350}
        />
      );
    }
    let securityGrapher = null
    if(this.state.ticker !==""){
      securityGrapher = <SecurityInfo ticker={this.state.ticker} />
    }
    return (
      <div>
        {securityGrapher}
        {customChart}
        <SecurityChartForm
          instrument={this.props.instrument}
          formSubmit={this.onSubmitFormHandler}
        />
      </div>
    );
  }
}
