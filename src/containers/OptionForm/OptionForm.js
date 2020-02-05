import React from 'react'

export default class OptionForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "JNJ",
        url: "https://finnhub.io/api/v1/stock/option-chain?symbol=JNJ&token=boqata7rh5rfjhndqf1g",
        nametoSubmit: ""
    };
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit= this.handleChange.bind(this)
    }
    
    handleChange(event) {
        this.setState({ name: event.target.value})
    }
    handleSubmit(event){
        event.preventDefault()
        alert(this.state.name)
        const url = this.state.url.replace(this.state.name, this.state.nameToSubmit)

        console.log(url)
        //this.setState({ url: url})

    }
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.name} onChange={(event) =>this.handleChange(event)}></input>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      );
    }
  }