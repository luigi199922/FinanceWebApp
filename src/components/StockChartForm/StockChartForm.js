import React, { Component } from "react";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import { updateObject, checkValidity } from "../../shared/utility";
import { convertFromDateToUNIXTimeStamp } from "../../shared/functions";
import classes from "./StockChartForm.module.css";
import TickerOptions from "../Ticker/Ticker";

class StockChartForm extends Component {
  componentDidMount() {}
  state = {
    inputForm: {
      startDate: {
        elementType: "input",
        elementConfig: {
          type: "date",
          placeholder: "Start Date",
        },
        value: "",
        label: "Start Date",
        validation: {
          required: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
      },
      endDate: {
        elementType: "input",
        elementConfig: {
          type: "date",
          placeholder: "End Date",
        },
        value: "",
        label: "End Date",
        validation: {
          required: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
      },
      timeFrame: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "1", displayValue: "1" },
            { value: "5", displayValue: "5" },
            { value: "15", displayValue: "15" },
            { value: "30", displayValue: "30" },
            { value: "60", displayValue: "60" },
            { value: "D", displayValue: "D" },
            { value: "W", displayValue: "W" },
            { value: "M", displayValue: "M" },
          ],
        },
        value: "30",
        validation: {
          required: true,
        },
        label: "Time Frame",
      },
    },
    ticker: {
      elementType: "select",
      elementConfig: {
        options: [],
      },
      value: "A",
      validation: {
        required: true,
      },
      label: "Ticker Symbol",
    },
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    const formValues = {};
    for (let formElementIdentifier in this.state.inputForm) {
      formValues[formElementIdentifier] = this.state.inputForm[
        formElementIdentifier
      ].value;
    }
    formValues.startDate = convertFromDateToUNIXTimeStamp(formValues.startDate);
    formValues.endDate = convertFromDateToUNIXTimeStamp(formValues.endDate);
    console.log(formValues);
    this.props.formSubmit(formValues);
  };
  inputChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(
      this.state.inputForm[inputIdentifier],
      {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          this.state.inputForm[inputIdentifier].validation
        ),
        touched: true,
      }
    );
    const updatedOrderForm = updateObject(this.state.inputForm, {
      [inputIdentifier]: updatedFormElement,
    });
    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      if (updatedOrderForm[inputIdentifier].valid === false) {
        formIsValid = false;
      }
    }

    this.setState({ inputForm: updatedOrderForm, formIsValid: formIsValid });
  };

  inputTickerChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(
      this.state.inputIdentifier,
      {
        value: event.target.value,
      }
    );
    const updatedOrderForm = updateObject(this.state.inputForm, {
      [inputIdentifier]: updatedFormElement,
    });
    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      if (updatedOrderForm[inputIdentifier].valid === false) {
        formIsValid = false;
      }
    }

    this.setState({ inputForm: updatedOrderForm, formIsValid: formIsValid });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.inputForm) {
      formElementsArray.push({
        id: key,
        config: this.state.inputForm[key],
      });
    }

    let form = (
      <form onSubmit={this.onSubmitHandler}>
        
        <TickerOptions
          ticker={this.state.ticker}
          inputChangedHandler={this.inputTickerChangedHandler}
        />

        {formElementsArray.map((formElement, key) => {
          return (
            <Input
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              invalid={!formElement.config.valid}
              shouldValidate={formElement.config.validation}
              value={formElement.config.value}
              touched={formElement.config.touched}
              label={formElement.config.label}
              changed={(event) =>
                this.inputChangedHandler(event, formElement.id)
              }
            />
          );
        })}
        <Button btnType="Success" disabled={!this.state.formIsValid}>
          SUBMIT
        </Button>
      </form>
    );

    return <div className={classes.Form}>{form}</div>;
  }
}

export default StockChartForm;
