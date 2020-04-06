import React, { useState } from "react";
import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";
import { KEY } from "../../../shared/key";

const NavigationItemsSocket = (props) => {
  const socket = new WebSocket("wss://ws.finnhub.io?token=" + KEY);
  const [socketState, setSocketState] = useState({});

  socket.addEventListener("message", (event) => updateStocketState(event));
  // Connection opened -> Subscribe
  socket.addEventListener("open", function (event) {
    socket.send(JSON.stringify({ type: "subscribe", symbol: "AAPL" }));
  });
  const updateStocketState = (event) => {
    const data = JSON.parse(event.data);
    console.log(data)
    setSocketState(data);
  };
  let socketData = null;
  if (props) {
    socketData = <NavigationItem link={"/" + props.socketData}>{props.socketData}</NavigationItem>;
  }

  return <ul>{socketData}</ul>;
};

export default NavigationItemsSocket;
