import React from "react";
import Input from "../components/UI/Input/Input";

export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const createHTTPHeaders = (token, data) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    data: {...data}
  };
  // If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
};

export const checkValidity = (value, rules) => {
  let isValid = true;
  if (!rules) {
    return true;
  }
  if (rules.required) {
    isValid = value.trim() !== "" && isValid;
  }
  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }
  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
  }
  return isValid;
};

export const createForm = (JSONForm, inputChangedHandler) => {
  const formElementsArray = createFormElementsArray(JSONForm);
  return formElementsArray.map((formElement) => {
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
        changed={(event) => inputChangedHandler(event, formElement.id)}
      />
    );
  });
};

export const createFormElementsArray = (controls) => {
  const formElementsArray = [];
  for (let key in controls) {
    formElementsArray.push({
      id: key,
      config: controls[key],
    });
  }
  return formElementsArray;
};

export const optionValues = {
  contractName: "Contract Name",
  contractSize: "Contract Size",
  currency: "false",
  type: "Type",
  inTheMoney: "In the Money",
  lastTradeDateTime: "Last Traded Date Time",
  expirationDate: "Expiration Date",
  strike: "Strike",
  lastPrice: "Last Price",
  bid: "Bid",
  ask: "ask",
  change: "Change",
  changePercent: "% Change",
  volume: "Volume",
  openInterest: "Open Interest",
  impliedVolatility: "Implied Volatility",
  porfolio: "Porfolio Analysis",
  delta: false,
  gamma: false,
  theta: false,
  vega: false,
  rho: false,
  theoretical: false,
  intrinsicValue: false,
  timeValue: false,
  updatedAt: false,
  daysBeforeExpiration: false,
};

export const optionStraddleView = {
    lastPrice: true,
    change: true,
    changePercent: true,
    volume: true,
    openInterest: true,
    strike: true,
}

export const optionListView = {
  contractName: true,
  lastTradeDateTime: true,
  strike: true,
  lastPrice: true,
  bid: true,
  ask: true,
  change: true,
  changePercent: true,
  volume: true,
  openInterest: true,
  impliedVolatility: true,
};
