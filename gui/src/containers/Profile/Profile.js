import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router";
import ProfileCard from "../../components/Profile/ProfileCard/ProfileCard";
import classes from "./Profile.module.css";
import axios from "../../axios/auth"
import {createHTTPHeaders} from "../../shared/utility"

const Profile = ({ userData, isAuth, history, token }) => {
  const [watchList, setWatchList] = useState([])
  console.log("[Profile]")

  useEffect(() => {
    const getWatchList = async () => {
      const res = await axios.get("watchlist", createHTTPHeaders(token))
      setWatchList(res.data)
    }
    getWatchList()
  },[])

  const removeFromWatchlist = async(symbol) => {
    await axios.delete("watchlist", createHTTPHeaders(token, {symbol}))
  }
  let watchListDisplay = watchList.map((obj,key) => {
  return <p key={key}onClick={() => removeFromWatchlist(obj.symbol)}>{obj.symbol}</p>
  })
  return (
    <div className={classes.Container}>
      <div>
        {!isAuth && <Redirect to="/login" />}
        <ProfileCard {...userData} user={true}/>
      </div>
      <div>
        {watchListDisplay}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    userData: state.auth.userData,
    isAuth: state.auth.token !== null,
    token: state.auth.token,
  };
};
export default withRouter(connect(mapStateToProps)(Profile));
