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
  const [optionPortfolio, setOptionPortfolio] = useState({});

  // Add Option to the portfolio
  const addOption = (option, direction) => {
    const newPortfolio = { ...optionPortfolio };
    option.contractName = option.contractName.replace("LONG", "");
    option.contractName = option.contractName.replace("SHORT", "");
    option.contractName += (direction);
    if (option.contractName in newPortfolio) {
      newPortfolio[option.contractName].amount += 1;
    } else {
      option.amount = 1;
      newPortfolio[option.contractName] = option;
    }

    setOptionPortfolio(newPortfolio);
  };

  // Remove Option from the portfolio
  const removeOption = (contract) => {
    const newPortfolio = { ...optionPortfolio };
    delete newPortfolio[contract];
    setOptionPortfolio(newPortfolio);
  };

  // Clears the option portfolio
  const clearOptions = () => {
    setOptionPortfolio({});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setViewOptionChain(true);
  };

  const inputTickerChangedHandler = async (event) => {
    const updatedFormElement = updateObject(ticker, {
      ...ticker,
      value: event.target.value,
    });
    clearOptions();
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
    clearOptions();
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

  let tickerInfo = null;
  if (ticker.value !== "") {
    tickerInfo = <SecurityInfo ticker={ticker.value} />;
  }
  return (
    <div className={classes.Container}>
      {tickerInfo}
      <Portfolio options={optionPortfolio} removeOption={removeOption} />
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
          addOption={addOption}
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
