import React from 'react'

const Row = props =>{
    const d = props.option.lastTradeDateTime.split(" ")
    const date = new Date()
    console.log(d)
    return (
    <tr>
        <td>{props.option.contractName}</td>
        <td>{date.toDateString()}</td>
        <td>{props.option.strike.toFixed(2)}</td>
        <td>{props.option.lastPrice.toFixed(2)}</td>
        <td>{props.option.bid.toFixed(2)}</td>
        <td>{props.option.ask.toFixed(2)}</td>
        <td>{props.option.change.toFixed(2)}</td>
        <td>{props.option.changePercent.toFixed(2)}</td>
        <td>{props.option.volume.toFixed(2)}</td>
        <td>{props.option.openInterest}</td>
        <td>{props.option.impliedVolatility.toFixed(2)}</td>
    </tr>
    )
}
export default Row;