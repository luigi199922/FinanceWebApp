import React from 'react'
import TD from './TableData/TableData'

const Row = props =>{
    const date = new Date(props.option.lastTradeDateTime.split(" ")).toDateString()
    let TableData = null
    const properties = Object.values(props.option)
    TableData = properties.map((value, key) => {
        return <TD>value</TD>
    })
    return (
    <tr>
        {TableData}
        {/* <td>{props.option.contractName}</td>
        <td>{date.toDateString()}</td>
        <td>{props.option.strike}</td>
        <td>{props.option.lastPrice}</td>
        <td>{props.option.bid}</td>
        <td>{props.option.ask}</td>
        <td>{props.option.change}</td>
        <td>{props.option.changePercent}</td>
        <td>{props.option.volume}</td>
        <td>{props.option.openInterest}</td>
        <td>{props.option.impliedVolatility}</td> */}
    </tr>
    )
}
export default Row;