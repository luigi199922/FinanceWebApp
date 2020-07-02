import React from "react";

export const ADD_OPTION = "ADD_OPTION";
export const REMOVE_OPTION = "REMOVE_OPTION";
export const CLEAR_OPTIONS = "CLEAR_OPTIONS";

export const portfolioContext = React.createContext({
  optionPortfolio: {},
});

// Add Option to the portfolio
const addOption = (portfolio, action) => {
  const newPortfolio = { ...portfolio };
  const option = action.option;
  option.contractName = option.contractName.replace("LONG", "");
  option.contractName = option.contractName.replace("SHORT", "");
  option.contractName += action.direction;
  if (option.contractName in newPortfolio) {
    newPortfolio[option.contractName].amount += 1;
  } else {
    option.amount = 1;
    newPortfolio[option.contractName] = option;
  }
  console.log(newPortfolio);
  return newPortfolio;
};

// Remove Option from the portfolio
const removeOption = (portfolio, action) => {
  const newPortfolio = { ...portfolio };
  delete newPortfolio[action.contract];
  return newPortfolio;
};

// Clears the option portfolio
const clearOptions = () => {};

export const portfolioReducer = (state, action) => {
  switch (action.type) {
    case ADD_OPTION:
      return addOption(state, action);
    case REMOVE_OPTION:
      return removeOption(state, action);
    case CLEAR_OPTIONS:
      return clearOptions();
    default:
      return state;
  }
};
