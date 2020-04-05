import React from 'react'
import axios from 'axios'
export default class OptionForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "JNJ",
        url: "https://finnhub.io/api/v1/stock/option-chain?symbol=JNJ&token=boqata7rh5rfjhndqf1g",
        nametoSubmit: "",
        data: []
    };
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit= this.handleChange.bind(this)
    }
    
    handleChange = (event) =>{
      this.setState({
          nameToSubmit: event.target.value.toUpperCase()
      })
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
    render() {
      return (
        <form onSubmit={this.handleSubmit} method="post">
        <p>Enter Stock Ticker: </p>
        <input type="text" value={this.state.nameToSubmit} onChange={(event)=>this.handleChange(event)}></input>
        <input type="submit" value="Submit" />
    </form>
      );
    }
  }