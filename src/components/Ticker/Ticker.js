import React, {useEffect, useState } from 'react'

const TickerOption = ({ instrument }) => {

  const [instrument, setInstrument] = useState(instrument)
  const [instrumentArray, setInstrumentArray] = useState([])
    
  useEffect(() => {
      setInstrument(props.match.path.slice(1));
  }, [instrument]);
  console.log(instrument)

    return (
        <Input
              key={instrument}
              elementType="select"
              elementConfig={instrumentArray}
              invalid={false}
              shouldValidate={{required: true}}
              value={formElement.config.value}
              touched={formElement.config.touched}
              label={formElement.config.label}
              changed={(event) =>
                this.inputChangedHandler(event, formElement.id)
              }
            />
    )
}