import React from "react";
import SecurityGrapher from "../../components/SecurityGrapher/SecurityGrapher"

const InstrumentChart = props => {

    return(
        <SecurityGrapher instrument={props.match.path.slice(1)}/>
    )
        
        
    
}
export default InstrumentChart