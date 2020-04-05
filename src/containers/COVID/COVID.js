import React from "react";
import axios from "axios";
import { KEY } from "../../shared/key";
import StateCard from "./StateCard";

class COVID extends React.Component {
  componentDidMount() {
    const url = "https://finnhub.io/api/v1/covid19/us";
    axios.get(url).then((res) => {
      this.setState({
        us: res.data,
        loading: false,
      });
    });
  }
  state = {
    socket: {},
    us: [],
    loading: true,
  };

  render() {
    const socket = new WebSocket("wss://ws.finnhub.io?token=" + KEY);

    // Connection opened -> Subscribe
    socket.addEventListener("open", function (event) {
      socket.send(JSON.stringify({ type: "subscribe", symbol: "AAPL" }));
      socket.send(
        JSON.stringify({ type: "subscribe", symbol: "BINANCE:BTCUSDT" })
      );
      socket.send(
        JSON.stringify({ type: "subscribe", symbol: "IC MARKETS:1" })
      );
    });

    // Unsubscribe
    var unsubscribe = function (symbol) {
      socket.send(JSON.stringify({ type: "unsubscribe", symbol: symbol }));
    };

    let covid = null;
    if (!this.state.loading) {
      covid = this.state.us.map((state, key) => {
        return (
          <StateCard
            state={state.state}
            cases={state.case}
            deaths={state.death}
          />
        );
      });
    }
    let socketstate = null;
    // Listen for messages
    socket.addEventListener("message", function (event) {
      console.log("Message from server ", event.data);
      socketstate = <p>{event.data.p}</p>;
    });
    return (
      <div>
        {covid}
        <div style={{ marginTop: "10px" }}>{socketstate}</div>
      </div>
    );
  }
}
export default COVID;
