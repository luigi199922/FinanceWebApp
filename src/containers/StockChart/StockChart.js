import React from 'react'
import axios from 'axios'
export default class StockChart extends React.Component{
    state = {
        close : [],
        high : [],
        low : [],
        open : [],
        timestamp : [],
        status : [],
        url : "https://finnhub.io/api/v1/stock/candle?symbol=AAPL&resolution=D&from=1546300800&to=1580934477&token=boqata7rh5rfjhndqf1g"
    }
    componentDidMount(){
        axios.get(url).then(
            res => {
                this.setState({
                    close: res.data.c,
                    high: res.data.h,
                    low: res.data.l,
                    open: res.data.o,
                    timestamp: res.data.t,
                    status: res.data.s,
                })
            }
            )
    }
   
    render(){
        return(
            <div>
                StockChart
            </div>
        )
    }
}