import React, { useState, useEffect } from "react";
import { getOptionData } from "../../shared/functions";
import Row from "../Row/Row";
import { optionValues } from "../../shared/utility";

const Option = ({ ticker, expirationDate, optionDisplay, optionType }) => {
  const [optionData, setOptionData] = useState([]);

  useEffect(() => {
    const data = getOptionData(ticker, expirationDate, optionType);
    data.then((data) => setOptionData(data)).catch((err) => console.log(err)); // Handle it and Render User Feed back in a modal
  }, [ticker, optionType, expirationDate]);

  let rows = null;
  if (optionData.length > 0) {
    rows = optionData.map((contract) => {
      return (
        <Row
          key={contract.contractName}
          optionDisplay={optionDisplay}
          option={contract}
        ></Row>
      );
    });
  }
  
  const keysToDisplay = Object.keys(optionDisplay);

  let headitems = keysToDisplay.map((val, key) => {
    return <th key={key}>{optionValues[val]}</th>;
  });

  return (
    <div>
      <h2>
        {optionType + "S"} for {new Date(expirationDate).toDateString()}
      </h2>
      <table>
        <thead>
          <tr>{headitems}</tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};
export default Option;
