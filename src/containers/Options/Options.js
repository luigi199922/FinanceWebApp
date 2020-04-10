import React from "react";
import "./Options.module.css";
import TickerOptions from "../../components/SecurityChartForm/Ticker/Ticker";
import { updateObject,optionListView } from "../../shared/utility";
import { formatAPIRequestOptions } from "../../shared/functions";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Option from "../../components/Option/Option";
import classes from "./Options.module.css";
import SecurityInfo from "../../components/SecurityInfo/SecurityInfo";
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
    optionType: "CALL",
    displayList: true,
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
  toggleListHandler = () => {
    this.setState({displayList: !this.state.displayList})
    console.log(this.state.displayList)
  }
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

  toggleOptionTypeHandler = (type) => {
    if(this.state.displayList){

    }
    this.setState({ optionType: type });
    console.log(this.state);
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
          optionDisplay={optionListView}
          ticker={this.state.ticker.value}
          expirationDate={this.state.dates.value}
          optionType={this.state.optionType}
          displayList={this.state.displayList}
        />
      );
    }
    let tickerInfo = null;
    if (this.state.ticker.value !== "") {
      tickerInfo = <SecurityInfo ticker={this.state.ticker.value} />;
    }
    return (
      <div className={classes.Container}>
        {tickerInfo}
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
        <Button
          btnType="Info"
          clicked={() => this.toggleOptionTypeHandler("CALL")}
        >
          Calls
        </Button>
        <Button
          btnType="Info"
          clicked={() => this.toggleOptionTypeHandler("PUT")}
        >
          Puts
        </Button>
        <div style={{display : "inline-block"}}>
        <p>Display: </p> <p onClick={this.toggleListHandler}>List</p> <p>Straddle</p>
        </div>
       
        {optionChain}
      </div>
    );
  }
}
