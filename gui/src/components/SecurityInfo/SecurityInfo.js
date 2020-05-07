import React, {useState, useEffect} from 'react'
import {getQuoteData} from '../../shared/functions'
import classes from "./SecurityInfo.module.css"
import Button from "../UI/Button/Button"
import {withRouter} from "react-router"
import axios from "../../axios/auth"
import {connect} from "react-redux"
import {createHTTPHeaders} from "../../shared/utility"
const SecurityInfo = ({ticker, history, isAuth,token}) => {
    const [quoteData, setQuoteData] = useState({})
    useEffect(()=> {
        const data = getQuoteData(ticker)
        data.then((data) => setQuoteData(data))
    }, [ticker])

    const addToWatchList = async() => {
        if(!isAuth) return redirectLogin()
       const res =  await axios.patch("watchlist", {symbol: ticker}, createHTTPHeaders(token))
        console.log(res)
    }

    const redirectLogin = () => {
        history.push("/login")
    }
   console.log(isAuth)
    return(
        <div className={classes.Container}>
            <p>{ticker}</p>
            <p className={classes.Price}>{quoteData.priceClose}</p>
            <p className={classes.Date}>{quoteData.date}</p>
            <Button btnType="Info" className={{backgroundColor: "none"}}>Buy</Button> 
            <Button btnType="Info" >Sell</Button>
            <Button btnType="Info" clicked={addToWatchList}>Add to Favorites</Button>        
        </div>
    )
}
const mapStateToProps = state => {
    return {
        isAuth: state.auth.token !== undefined,
        token: state.auth.token
    }
}
export default connect(mapStateToProps)(withRouter(SecurityInfo))