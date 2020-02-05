import React from 'react'
import axios from 'axios'
import Option from '../../components/Option/Option'

export default class Options extends React.Component{
    state = {
        name: "",
        exchange: "",
        data: []
    }
    componentDidMount(){
        axios.get("https://finnhub.io/api/v1/stock/option-chain?symbol=AAPL&token=boqata7rh5rfjhndqf1g").then(
            res => (
                this.setState({
                    name: res.data.code,
                    exchange: res.data.exchange,
                    data: res.data.data
                })
            )
        )
    }

    handleChange(event) {
        event.preventDefault();
      }
    handleSubmit(event) {
        const name = event.target.value
        this.setState({ name: name})
      }

    render(){
        let options = null
        if (this.state.data){
            options = this.state.data.map((dateOptions, key)=>{
                return <Option key={key} data={dateOptions} name={this.state.name}></Option>
            })
        }
        
        return(
            <div className="container-fluid text-center" style={{minHeight: "500px"}}>
                <form onSubmit={this.handleSubmit}>
                    <p>Enter Stock Ticker: </p>
                    <input type="text" value={this.state.name} onChange={this.state.handleChange}></input>
                    <input type="submit" value="Submit" />
                </form>
                    
                    <div className="row">
                        <div className="col-md-12">
                            {this.state.name}
                        </div>
                    </div> 
                {options}
            </div>
        )
    }
}