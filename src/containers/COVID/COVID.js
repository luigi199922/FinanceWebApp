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
    });

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
    const updateStocketState = (event) => {
      const data = JSON.parse(event.data);
      console.log("Message from server ", data);
      this.setState({ socket: data });
    };
    let socketstate = null;
    // Listen for messages
    socket.addEventListener("message", (event) => updateStocketState(event));
    if (this.state.socket.data) {
      socketstate = (
        <div>
          <p>{this.state.socket.data[0].p}</p>
          <p>{this.state.socket.data[0].s}</p>
        </div>
      );
    }
    return (
      <div>
        {socketstate}
        {covid}
        <div style={{ marginTop: "10px" }}>{socketstate}</div>
      </div>
    );
  }
}
export default COVID;
