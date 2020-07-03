import React, { useState } from "react";
import "./Options.module.css";
import TickerOptions from "../../components/SecurityChartForm/Ticker/Ticker";
import { updateObject, optionListView } from "../../shared/utility";
import { formatAPIRequestOptions } from "../../shared/functions";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Option from "../../components/Option/Option";
import classes from "./Options.module.css";
import SecurityInfo from "../../components/SecurityInfo/SecurityInfo";
import Portfolio from "../../components/Option/Portfolio/Portfolio";
import configurePortfolioStore from "../../hooks-store/optionPortfolio";
import { useStore } from "../../hooks-store/store";

configurePortfolioStore();

const Options = ({ history }) => {
  const [ticker, setTicker] = useState({
    elementType: "select",
    elementConfig: {
      options: [],
    },
    value: "",
    validation: {
      required: true,
    },
    label: "Ticker Symbol",
  });
  const [dates, setDates] = useState({
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
  });
  const [formIsValid, setFormIsValid] = useState(false);
  const [viewOptionChain, setViewOptionChain] = useState(false);
  const [optionType, setOptionType] = useState("CALL");
  const [displayList, setDisplayList] = useState(true);
  const dispatch = useStore(false)[1];

  const handleSubmit = (event) => {
    event.preventDefault();
    setViewOptionChain(true);
  };

  const inputTickerChangedHandler = async (event) => {
    const updatedFormElement = updateObject(ticker, {
      ...ticker,
      value: event.target.value,
    });
    dispatch("CLEAR_PORTFOLIO");
    history.push("/options/" + event.target.value + "/");
    setTicker(updatedFormElement);
    const expDates = await formatAPIRequestOptions(event.target.value);

    const date = {
      ...dates,
      elementConfig: {
        options: expDates,
      },
    };
    setDates(date);
  };
  const toggleListHandler = () => {
    setDisplayList(!displayList);
  };
  const inputChangedHandler = (event) => {
    dispatch("CLEAR_PORTFOLIO");
    const updatedFormElement = updateObject(dates, {
      ...dates,
      value: event.target.value,
    });
    let formIsValid = true;
    for (let inputIdentifier in updatedFormElement) {
      if (updatedFormElement[inputIdentifier].valid === false) {
        formIsValid = false;
      }
    }
    setDates(updatedFormElement);
    setFormIsValid(formIsValid);
  };

  const toggleOptionTypeHandler = (type) => {
    setOptionType(type);
  };
  const date = dates;
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
        changed={(event) => inputChangedHandler(event, 1)}
      />
    );
  }

  return (
    <div className={classes.Container}>
      {(ticker.value !== "") && <SecurityInfo ticker={ticker.value} />}
      <Portfolio />
      <form onSubmit={handleSubmit}>
        <TickerOptions
          ticker={ticker}
          inputChangedHandler={inputTickerChangedHandler}
        />
        {expirationDates}
        <Button btnType="Success" disabled={!formIsValid}>
          Submit
        </Button>
      </form>
      <Button btnType="Info" clicked={() => toggleOptionTypeHandler("CALL")}>
        Calls
      </Button>
      <Button btnType="Info" clicked={() => toggleOptionTypeHandler("PUT")}>
        Puts
      </Button>
      <div style={{ display: "inline-block" }}>
        <p>Display: </p> <p onClick={toggleListHandler}>List</p> <p>Straddle</p>
      </div>

      {viewOptionChain && (
        <Option
          optionDisplay={optionListView}
          ticker={ticker.value}
          expirationDate={dates.value}
          optionType={optionType}
          displayList={displayList}
        />
      )}
    </div>
  );
};

export default Options;
