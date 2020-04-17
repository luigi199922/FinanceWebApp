import React, { Component } from "react";
import InfoCard from "../../components/InfoCard/InfoCard";
import {fetchData} from '../../api'
import Chart from '../../components/Chart/Chart'
import CountryPicker from '../../components/CountryPicker/CountryPicker'
import VirusImage from '../../assets/images/covid.png'
import classes from './COVID.module.css'
class COVID extends Component {

  state = {
    data: {},
    country: ""
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
      this.setState({
          data: fetchedData
      })

  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)
    this.setState({data : fetchedData, country: country})
  }

  render() {
      const { data } = this.state
    return (
      <div className={classes.Container}>
        <h1>C<img className={classes.Image} src={VirusImage} alt="COVID-19"></img>VID-19</h1>
        <InfoCard data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={this.state.country}></Chart>
      </div>
    );
  }
}
export default COVID;
