import React, { Component } from "react";
import SecurityGrapher from "../../components/SecurityGrapher/SecurityGrapher"
import {withRouter} from 'react-router'

class InstrumentChart extends Component {
    componentDidMount(){
        this.setState(this.props.match.params)
    }
    state = ""
    
    render(){
        const instrument = this.props.match.path.slice(1)
        console.log(instrument)
        return(
            <SecurityGrapher instrument={instrument}/>
        )
    }
}
export default withRouter(InstrumentChart )