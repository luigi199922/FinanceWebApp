import React from "react";
import SecurityGrapher from "../../components/SecurityGrapher/SecurityGrapher"

export default class StockChart extends React.Component {
    render(){
        return(
            <SecurityGrapher forex={true}/>
        )
    }
}
