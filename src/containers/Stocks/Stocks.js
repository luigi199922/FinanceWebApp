import React from 'react'
import axios from 'axios'
import Stock from '../../components/Stock/Stock'   
export default class Stocks extends React.Component{

    state = {
        open:"",
        high: "",
        low: "",
        current: "",
        previousClose: "",
        url: "https://finnhub.io/api/v1/quote?symbol=AAPL&token=boqata7rh5rfjhndqf1g",
    }
    componentDidMount(){
        axios.get(this.state.url).then(
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
                <Stock data={this.state}></Stock>
            </div>
        )
    }
}