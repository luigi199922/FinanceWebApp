import React from 'react'
import Row from '../Row/Row'
const Option = props => {
    let callrows = null
    if (props.data.options){
        callrows = props.data.options.PUT.map((option,key) =>{
            return <Row option={option} key={key}></Row>
        })
    }
    let putrows = null
    if (props.data.options){
        putrows = props.data.options.CALL.map((option,key) =>{
            return <Row option={option} key={key}></Row>
        })
    }
    return(
        <div>
            <div className="row">
                <div className="col-md-12">
                    {props.data.expirationDate} Calls 
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

            {callrows}




            <div className="row">
                <div className="col-md-12">
                    {props.data.expirationDate} Puts 
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
             {putrows}
        </div>

       
       
    )
}
export default Option