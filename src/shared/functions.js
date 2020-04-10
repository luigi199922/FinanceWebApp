import axios from "axios";
import { API_KEY } from "./key";
const base = "https://finnhub.io/api/v1/stock/candle?symbol=";

export const formatAPIRequest = (symbol, timeframe, startDate, endDate) => {
  return new Promise((resolve, reject) => {
    const url =
      base +
      symbol +
      "&resolution=" +
      timeframe +
      "&from=" +
      startDate +
      "&to=" +
      endDate +
      API_KEY;
    const result = [];
    axios
      .get(url)
      .then((res) => {
        const o = res.data.o;
        const h = res.data.h;
        const l = res.data.l;
        const c = res.data.c;
        const t = res.data.t;

        for (let i = 0; i < o.length; i++) {
          result.push({
            x: new Date(t[i]) * 1000,
            y: [o[i], h[i], l[i], c[i]],
          });
        }
        resolve(result);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

export const getTickerSymbols = (instrument) => {
  let type = instrument;
  let exchange = "";
  switch (type) {
    case "stock":
      exchange = "US";
      break;
    case "forex":
      exchange = "oanda";
      break;
    case "crypto":
      exchange = "binance";
      break;
    default:
      type = "stock";
      exchange = "US";
  }
  return new Promise((resolve, reject) => {
    const url =
      "https://finnhub.io/api/v1/" +
      type +
      "/symbol?exchange=" +
      exchange +
      API_KEY;
    axios
      .get(url)
      .then((res) => {
        const tickers = [];
        const data = res.data;
        for (let i = 0; i < data.length; i++) {
          const t = data[i].symbol;
          tickers.push({
            key: i,
            value: t,
            displayValue: t + " " + data[i].description,
          });
        }
        resolve(tickers);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const convertFromDateToUNIXTimeStamp = (date) => {
  const result = new Date(date).getTime() / 1000;
  return result.toString();
};

export const getTickerExpectedReturns = (
  symbol,
  timeframe,
  startDate,
  endDate
) => {
  return new Promise((resolve, reject) => {
    const url =
      base +
      symbol +
      "&resolution=" +
      timeframe +
      "&from=" +
      startDate +
      "&to=" +
      endDate +
      API_KEY;
    axios
      .get(url)
      .then((res) => {
        var sum = 0;
        var divisor = 0;
        const c = res.data.c;
        console.log(c);
        const returnsArray = [];
        for (let i = 0; i < c.length; i++) {
          if (i !== c.length - 1) {
            sum += ((c[i + 1] - c[i]) / c[i]) * 100;
            returnsArray.push(((c[i + 1] - c[i]) / c[i]) * 100);
            divisor += 1;
          }
        }
        const average = sum / divisor;
        const stDev = standardDeviation(returnsArray);
        console.log(returnsArray);
        console.log("stDev" + stDev);
        console.log("ER" + average);
        resolve([average, stDev]);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const standardDeviation = (arr, usePopulation = false) => {
  const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;
  return Math.sqrt(
    arr
      .reduce((acc, val) => acc.concat((val - mean) ** 2), [])
      .reduce((acc, val) => acc + val, 0) /
      (arr.length - (usePopulation ? 0 : 1))
  );
};

export const formatAPIRequestOptions = (ticker) => {
  const url =
    " https://finnhub.io/api/v1/stock/option-chain?symbol=" + ticker + API_KEY;
  console.log(url);
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((res) => {
        const result = [];
        const responseArray = res.data.data;
        for (let i = 0; i < responseArray.length; i++) {
          result.push({
            key: i,
            value: responseArray[i].expirationDate,
            displayValue: responseArray[i].expirationDate,
          });
        }
        resolve(result);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

export const getOptionData = (ticker, expirationDate, optionType) => {
  const url =
    "https://finnhub.io/api/v1/stock/option-chain?symbol=" + ticker + API_KEY;


  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((res) => {
        const data = res.data.data;
        let result = [];
        for (let i = 0; i < data.length; i++) {
          if (expirationDate.localeCompare(data[i].expirationDate) === 0) {
            result = data[i].options[optionType];
            break;
          }
        }
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
