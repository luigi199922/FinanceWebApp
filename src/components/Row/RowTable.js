import React from 'react'

const RowTable = props =>{
    return(
        <tbody>
            <tr>
                <td>{props.option.lastPrice}</td>
                <td>{props.option.volume}</td>
                <td>{props.option.delta}</td>
                <td>{props.option.gamma}</td>
                <td>{props.option.theta}</td>
                <td>{props.option.vega}</td>
                <td>{props.option.impliedVolatility}</td>
                <td>{props.option.bid}</td>
                <td>{props.option.ask}</td>
                <td>{props.option.strike}</td>
            </tr>
        </tbody>
    )
}
export default RowTable