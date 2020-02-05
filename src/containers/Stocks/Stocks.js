import React from 'react'
import axios from 'axios'

export default class Stocks extends React.Component{

    state = {
        open:"",
        high: "",
        low: "",
        current: "",
        previousClose: "",
    }
    componentDidMount(){
        axios.get("https://finnhub.io/api/v1/quote?symbol=AAPL&token=boqata7rh5rfjhndqf1g").then(
            res=>{
                this.setState({
                    open:res.data.o,
                    high:res.data.h,
                    low:res.data.l,
                    current:res.data.c,
                    previousClose:res.data.pc,
                })
            }
        )
    }
    render(){
        console.log(this.state)
        return(
            <div style={{height: "500px"}}>
                Stocks
            </div>
        )
    }
}