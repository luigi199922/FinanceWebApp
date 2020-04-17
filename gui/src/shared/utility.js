export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
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
