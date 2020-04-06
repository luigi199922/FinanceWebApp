import React from "react";
import axios from "axios";
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
    us: [],
    loading: true,
  };

  render() {

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
    return (
      <div>
        {covid}
      </div>
    );
  }
}
export default COVID;
