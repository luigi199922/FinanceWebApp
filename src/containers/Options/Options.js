import React from "react";
import OptionTable from "../../components/Option/OptionTable";
import "./OptionsT.module.css";
import TickerOptions from "../../components/SecurityChartForm/Ticker/Ticker";
import {updateObject} from '../../shared/utility'

export default class Options extends React.Component {
  state = {
    ticker: {
      elementType: "select",
      elementConfig: {
        options: [],
      },
      value: "",
      validation: {
        required: true,
      },
      label: "Ticker Symbol",
    },
  };
  handleSubmit = (event) => {
    event.preventDefault();

  };
  ViewHandler = () => {
    const view = this.state.view;
    this.setState({ view: !view });
  };
  inputTickerChangedHandler = (event) => {
    const updatedFormElement = updateObject(
      this.state.ticker,
      {
        ...this.state.ticker,
        value: event.target.value,
      }
    );
    this.props.history.push('options/' + event.target.value + "/")
    this.setState({ ticker: updatedFormElement});
  };


  render() {
    let options = null;
    if (this.state.data) {
      options = this.state.data.map((dateOptions, key) => {
        return (
          <OptionTable
            key={key}
            data={dateOptions}
            name={this.state.name}
          ></OptionTable>
        );
      });
    }



    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TickerOptions
            ticker={this.state.ticker}
            inputChangedHandler={this.inputTickerChangedHandler}
          />
        </form>
      </div>
    );
  }
}
