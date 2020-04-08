import React, { useState } from "react";
import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";
import { KEY } from "../../../shared/key";

const NavigationItemsSocket = (props) => {
  const socket = new WebSocket("wss://ws.finnhub.io?token=" + KEY);

  const [ticker, setTicker] = useState({});

  // Connection opened -> Subscribe
  socket.addEventListener("open", function (event) {
    socket.send(JSON.stringify({ type: "subscribe", symbol: "AAPL" }));
  });

  const updateStocketState = (event) => {
    const data = JSON.parse(event.data);
    console.log("Message from server ", data);
    setTicker(data);
  };

  socket.addEventListener("message", (event) => updateStocketState(event));
  let socketData = null;

  if (ticker) {
    socketData = (
      <NavigationItem link={"/" + ticker.s}>
        {ticker.s + " " + ticker.p}
      </NavigationItem>
    );
  }

  return <ul>{socketData}</ul>;
};

export default NavigationItemsSocket;
