import React from "react";
import "./Options.module.css";
import TickerOptions from "../../components/SecurityChartForm/Ticker/Ticker";
import { updateObject } from "../../shared/utility";
import { formatAPIRequestOptions } from "../../shared/functions";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Option from "../../components/Option/Option";

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
    dates: {
      elementType: "select",
      elementConfig: {
        options: [],
      },
      value: "",
      validation: {
        required: true,
      },
      label: "Expiration Date",
      touched: false,
    },
    formIsValid: false,
    viewOptionChain: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ viewOptionChain: true });
    console.log(this.state.ticker.value, this.state.dates.value);
  };

  inputTickerChangedHandler = (event) => {
    const updatedFormElement = updateObject(this.state.ticker, {
      ...this.state.ticker,
      value: event.target.value,
    });
    this.props.history.push("options/" + event.target.value + "/");
    this.setState({ ticker: updatedFormElement });
    const expDates = formatAPIRequestOptions(event.target.value);

    expDates
      .then((d) => {
        const date = {
          ...this.state.dates,
          elementConfig: {
            options: d,
          },
        };
        this.setState({ dates: date });
      })
      .catch((err) => console.log(err));
  };

  inputChangedHandler = (event) => {
    const updatedFormElement = updateObject(this.state.dates, {
      ...this.state.dates,
      value: event.target.value,
    });
    let formIsValid = true;
    for (let inputIdentifier in updatedFormElement) {
      if (updatedFormElement[inputIdentifier].valid === false) {
        formIsValid = false;
      }
    }
    this.setState({ dates: updatedFormElement, formIsValid: formIsValid });
  };

  render() {
    const date = this.state.dates;
    let expirationDates = null;
    if (date.elementConfig.options.length > 0) {
      expirationDates = (
        <Input
          key={1}
          elementType={date.elementType}
          elementConfig={date.elementConfig}
          invalid={!true}
          shouldValidate={date.validation.required}
          value={date.value}
          touched={date.touched}
          label={date.label}
          changed={(event) => this.inputChangedHandler(event, 1)}
        />
      );
    }
    let optionChain = null;
    if (this.state.viewOptionChain) {
      optionChain = (
        <Option
          ticker={this.state.ticker.value}
          expirationDate={this.state.dates.value}
        />
      );
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TickerOptions
            ticker={this.state.ticker}
            inputChangedHandler={this.inputTickerChangedHandler}
          />
          {expirationDates}
          <Button btnType="Success" disabled={!this.state.formIsValid}>
            Submit
          </Button>
        </form>
        {optionChain}
      </div>
    );
  }
}
