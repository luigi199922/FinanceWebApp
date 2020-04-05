import React from 'react'
import axios from 'axios'
import OptionTable from '../../components/Option/OptionTable'
import "./OptionsT.module.css"
import OptionForm from '../OptionForm/OptionForm'
export default class Options extends React.Component{
    state = {
        name: "AAPL",
        exchange: "",
        data: [],
        view: false,
        baseURL:"https://finnhub.io/api/v1/stock/option-chain?symbol=AAPL&token=boqata7rh5rfjhndqf1g",
        url: "",
        nameToSubmit: "",
        loading: true
    }
    componentDidMount(){
        axios.get(this.state.baseURL).then(
            res => (
                this.setState({
                    name: res.data.code,
                    exchange: res.data.exchange,
                    data: res.data.data,
                })
            )
        )
    }
    request = url =>{
        axios.get(url).then(
            res => (
                this.setState({
                    name: res.data.code,
                    exchange: res.data.exchange,
                    data: res.data.data,
                })
            )
        )
    }

    handleChange = (event) =>{
        this.setState({
            nameToSubmit: event.target.value.toUpperCase()
        })
        console.log(this.state.nameToSubmit)
      }
    handleSubmit = (event) =>{
        event.preventDefault()
        const url = this.state.baseURL.replace("AAPL", this.state.nameToSubmit)
        console.log(url)
        axios.get(url).then(
            res => (
                this.setState({
                    name: res.data.code,
                    exchange: res.data.exchange,
                    data: res.data.data,
                })
            )
        )
      }
    ViewHandler = () =>{
        const view = this.state.view
        this.setState({view: !view})  
    }
    render(){
        let options = null
        if (this.state.data){
            options = this.state.data.map((dateOptions, key)=>{
                return <OptionTable key={key} data={dateOptions} name={this.state.name}></OptionTable>
            })
        }
        
        return(
            <div className="container-fluid text-center" style={{minHeight: "500px"}}>
                <form onSubmit={this.handleSubmit} method="post">
                    <p>Enter Stock Ticker: </p>
                    <input type="text" value={this.state.nameToSubmit} onChange={(event)=>this.handleChange(event)}></input>
                    <input type="submit" value="Submit" />
                </form>
                

                <button onClick={this.ViewHandler} className="btn btn-primary">View</button>
                <OptionForm/>
            
            {this.state.view ? options: null}

            
                    
                    
                
            </div>
        )
    }
}