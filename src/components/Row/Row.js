import React from 'react'

const Row = props =>{
    return (
    <div className="row">
        <div className="col-md-1">
            {props.option.lastPrice}
        </div>
        <div className="col-md-2">
            {props.option.volume}
        </div>
        <div className="col-md-1">
            {props.option.delta}
        </div>
        <div className="col-md-1">
            {props.option.gamma}
        </div>
        <div className="col-md-1">
            {props.option.theta}
        </div>
        <div className="col-md-1">
            {props.option.vega}
        </div>
        <div className="col-md-1">
            {props.option.impliedVolatility}
        </div>
        <div className="col-md-1">
            {props.option.bid}
        </div>
        <div className="col-md-1">
            {props.option.ask}
        </div>
        <div className="col-md-2">
            {props.option.strike}
        </div>
    </div>

    )
}
export default Row;