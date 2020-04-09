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
            <h2>Calls</h2>
            <table>
                <thead>
                    <tr>
                        <th>Contract Name</th>
                        <th>Last Trade Date</th>
                        <th>Strike</th>
                        <th>Last Price</th>
                        <th>Bid</th>
                        <th>Ask</th>
                        <th>Change</th>
                        <th>%Change</th>
                        <th>Volume</th>
                        <th>Open Interest</th>
                        <th>Impied Volatility</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
             
        </div>

       
       
    )
}
export default Option