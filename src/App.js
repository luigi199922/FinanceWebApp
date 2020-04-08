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

    return (
      <BrowserRouter>
        <Layout/>
      </BrowserRouter>
    );
  }
}

export default App;
