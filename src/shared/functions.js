import axios from "axios";
import { API_KEY } from "./key";
const base = "https://finnhub.io/api/v1/stock/candle?symbol=";
const url =
  "https://finnhub.io/api/v1/stock/candle?symbol=AAPL&resolution=1&from=1572651390&to=1572910590&token=boqata7rh5rfjhndqf1g";

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
            x: new Date(t[i]),
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
