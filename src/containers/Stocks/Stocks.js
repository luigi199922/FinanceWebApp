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
        url: "https://finnhub.io/api/v1/quote?symbol:AAPL&token:boqata7rh5rfjhndqf1g",
        infourl: "https://finnhub.io/api/v1/stock/profile?symbol:AAPL&token:boqata7rh5rfjhndqf1g",   
        
        address: "One Apple Park Way",
        city : "Cupertino",
        country : "USA",
        currency : "USD",
        cusip : "037833100",
        description : "Apple Inc. designs, manufactures, and markets mobile communication and media devices, and personal computers. It also sells various related software, services, accessories, and third-party digital content and applications.",
        exchange : "NASDAQ-NMS Stock Market",
        ggroup : "Technology Hardware & Equipment",
        gind : "Technology Hardware, Storage & Peripherals",
        gsector : "Information Technology",
        gsubind : "Technology Hardware, Storage & Peripherals",
        ipo : "1980-12-12",
        isin : "",
        naics : "Radio and Television Broadcasting and Wireless Communications Equipment Manufacturing",
        name : "APPLE INC",
        phone : "408-996-1010",
        state : "CA",
        ticker : "AAPL",
        weburl : "www.apple.com"

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
        axios.get(this.state.infourl).then(
            res=>{
                this.setState({
                    a: res.data.info,
                    city : res.data.city,
                    country : res.data.country,
                    currency : res.data.currency,
                    cusip : res.data.cusip,
                    description : res.data.description,
                    exchange : res.data.exchange,
                    ggroup : res.data.ggroup,
                    gind : res.data.gind,
                    gsector : res.data.gsector,
                    gsubind : res.data.gsubind,
                    ipo : res.data.ipo,
                    isin : res.data.isin,
                    naics : res.data.naics,
                    name : res.data.name,
                    phone : res.data.phone,
                    state : res.data.state,
                    ticker : res.data.ticker,
                    weburl : res.data.weburl
                })
            }
        )
    }
    render(){
        console.log(this.state)
        return(
            <div style={{height: "500px"}}>
                <Stock data={this.state} description={this.state.description}></Stock>
            </div>
        )
    }
}