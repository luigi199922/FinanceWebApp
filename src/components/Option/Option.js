import React, {useState, useEffect} from 'react'
import {getOptionData} from '../../shared/functions'
import Row from '../Row/Row'

const Option = ({ticker, expirationDate}) => {
    const [optionData, setOptionData] = useState([])

    useEffect(()=> {
        const data = getOptionData(ticker, expirationDate)  
        data.then(data => setOptionData(data))
        .catch(err => console.log(err)) // Handle it and Render User Feed back in a modal
    },[ticker])
    console.log(optionData)
    let rows = null
    if(optionData.length > 0 ) {
            rows = optionData.map((contract, key) => {
                return <Row key={contract.contractName}option={contract}></Row>
            })
    }
    return(
        <div>
            <div className="row">
                <div className="col-md-12">
                    {ticker + " "  + expirationDate + "Calls"} 
                </div>
            </div>
            <div className="row">
                <div className="col-md-1">
                    Last
                </div>
                <div className="col-md-2">
                    Volume
                </div>
                <div className="col-md-1">
                    Delta
                </div>
                <div className="col-md-1">
                    Gamma
                </div>
                <div className="col-md-1">
                    Theta
                </div>
                <div className="col-md-1">
                    Vega
                </div>
                <div className="col-md-1">
                    IV
                </div>
                <div className="col-md-1">
                    bid
                </div>
                <div className="col-md-1">
                    ask
                </div>
                <div className="col-md-2">
                    Strike
                </div>
            </div>

            {/* {callrows} */}




            <div className="row">
                <div className="col-md-12">
                    {/* {props.data.expirationDate} Puts  */}
                </div>
            </div>
            <div className="row">
                <div className="col-md-1">
                    Last
                </div>
                <div className="col-md-2">
                    Volume
                </div>
                <div className="col-md-1">
                    Delta
                </div>
                <div className="col-md-1">
                    Gamma
                </div>
                <div className="col-md-1">
                    Theta
                </div>
                <div className="col-md-1">
                    Vega
                </div>
                <div className="col-md-1">
                    IV
                </div>
                <div className="col-md-1">
                    bid
                </div>
                <div className="col-md-1">
                    ask
                </div>
                <div className="col-md-2">
                    Strike
                </div>
            </div>
             {rows}
        </div>

       
       
    )
}
export default Option