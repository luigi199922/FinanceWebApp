import React, { useState, useEffect } from "react";
import axios from "../../../axios/finnhub/quote";
import styles from "./Security.module.css"

const Security = ({ symbol , clicked}) => {
    const [tickerData, setTickerData] = useState();
  useEffect(() => {
    const getTickerData = async () => {
      const res = await axios.get(`quote?symbol=${symbol}`);
      console.log(res);
    };
    getTickerData();
  }, []);

  return (
    <div className={styles.Container}>
        <div className={styles.Symbol}>
            <h5>{symbol}</h5>
        </div>
        <div className={styles.Delete} onClick={() => clicked()}><strong>X</strong></div>
        <div className={styles.TickData}>
            <p>Open:</p>
            <p>Close:</p>
            <p>Price:</p>
        </div>
      
    </div>
  );
};
export default Security;
