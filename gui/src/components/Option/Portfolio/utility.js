export const getPayoffData = (options) => {
  const maxStrike = getMaxStrike(options);
  const length = Math.floor(maxStrike * 1.25);
  const keys = Object.keys(options);
  const data = new Array(length).fill(0);
  const labels = [];
  const cost = getTotalCost(options);

  for (let i = 0; i < data.length; i++) {
    labels.push(i);
    fillPayoffArray(data, i, options, keys, cost);
  }

  console.log(data);

  return { data, labels };
};

export const evaluatePayoffFunc = (option, price) => {
  if (option.type === "CALL") {
    return Math.max(price - parseInt(option.strike), 0) * option.amount;
  } else {
    return Math.max(parseInt(option.strike) - price, 0) * option.amount;
  }
};

export const getMaxStrike = (options) => {
  const keys = Object.keys(options);
  let max = 0;
  keys.forEach((key) => {
    if (options[key].strike > max) {
      max = options[key].strike;
    }
  });
  return max;
};

const fillPayoffArray = (matrix, index, options, keys, cost) => {
  for (let i = 0; i < keys.length; i++) {
    matrix[index] +=
      Math.max(evaluatePayoffFunc(options[keys[i]], index), 0) - cost;
  }
};

const getTotalCost = (options) => {
  const keys = Object.keys(options);
  let cost = 0;
  keys.forEach((key) => {
    cost += options[key].ask;
  });
  return cost;
};
