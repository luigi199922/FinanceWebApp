import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import "./App.css";
import { KEY } from "./shared/key";

class App extends Component {
  state = {
    socket: {},
  };
  render() {
    const socket = new WebSocket("wss://ws.finnhub.io?token=" + KEY);

    // Connection opened -> Subscribe
    socket.addEventListener("open", function (event) {
      socket.send(JSON.stringify({ type: "subscribe", symbol: "AAPL" }));
    });

    const updateStocketState = (event) => {
      const data = JSON.parse(event.data);
      // console.log("Message from server ", data);
      this.setState({ socket: data });
    };

    socket.addEventListener("message", (event) => updateStocketState(event));
    let socketstate = null
    
    if (this.state.socket.data) {
      socketstate = this.state.socket
    }
    return (
      <BrowserRouter>
        <Layout socketData={socketstate}/>
      </BrowserRouter>
    );
  }
}

export default App;
