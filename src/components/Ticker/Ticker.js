import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { getTickerSymbols } from "../../shared/functions";

const TickerOption = ({
  ticker: {
    id,
    elementType,
    valid,
    validation,
    value,
    touched,
    label,
  },
  inputChangedHandler
}) => {
    
  const [instrument, setInstrument] = useState(instrument);
  const [instrumentArray, setInstrumentArray] = useState([]);

  useEffect(() => {
    setInstrument(props.match.path.slice(1))
    const tickersArray = getTickerSymbols(props.match.path.slice(1));
    tickersArray.then((ticker) => setInstrumentArray(ticker));
  }, [instrument]);
  console.log(instrument);

  return (
    <Input
      key={id}
      elementType={elementType}
      elementConfig={instrumentArray}
      invalid={valid}
      shouldValidate={validation}
      value={value}
      touched={touched}
      label={label}
      changed={(event) => inputChangedHandler(event, id)}
    />
  );
};

export default withRouter(TickerOption);
