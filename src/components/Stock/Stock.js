import React from 'react'

const Stock = props => {

    const extractSymbol = (url) =>{
        const indexOfSymbol = props.data.url.indexOf("symbol=")
        let index = props.data.url.indexOf("&token")
        index = index  - indexOfSymbol - 7  
        return props.data.url.substr(indexOfSymbol + 7, index) 
    }
 
    return (
        <div className="text-center">   
            <div className="row">
                <div className="col-md-12">
                {extractSymbol(props.data.url)} {props.data.current}
                </div>
            </div>
        
        <div className="row">
            <div className="col-md-4"> 
                Open {props.data.open}
            </div>
            <div className="col-md-4"> 
                High {props.data.high}
            </div>
            <div className="col-md-4"> 
                Low {props.data.low}
            </div>
        </div>
        <div className="row">
            <div className="col-md-8">
                Description: {props.description}
            </div>
        </div>
        </div>
    )
}
export default Stock