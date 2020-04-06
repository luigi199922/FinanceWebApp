import React from "react";
import Chart from "react-apexcharts";
import { formatAPIRequest } from "../../shared/functions";
import StockCharForm from "../../components/StockChartForm/StockChartForm";

export default class SecurityGrapher extends React.Component {
  componentDidMount() {
    this.onSubmitFormHandler = this.onSubmitFormHandler.bind(this)
    this.onSubmitFormHandler()
  }


  state = {
    ticker: "",
    loading: true,
    error: null,
    data: [],
    initialGraph: {
      ticker : "",
      timeFrame : "",
      startDate : "",
      endDate : "",
    }
  };

  onSubmitFormHandler(formValues = this.state.initialGraph) {
    const data = formatAPIRequest(
      formValues.ticker,
      formValues.timeFrame,
      formValues.startDate,
      formValues.endDate
    );
    data
      .then((data) => this.setState({ loading: false, data: data, ticker: formValues.ticker }))
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

    return (
      <div>
        {customChart}
        <StockCharForm instrument={this.props.instrument} formSubmit={this.onSubmitFormHandler} />
      </div>
    );
  }
}
