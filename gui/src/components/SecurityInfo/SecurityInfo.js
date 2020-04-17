import React, {useState, useEffect} from 'react'
import {getQuoteData} from '../../shared/functions'
import classes from "./SecurityInfo.module.css"
import Button from "../UI/Button/Button"

const SecurityInfo = ({ticker}) => {
    const [quoteData, setQuoteData] = useState({})
    useEffect(()=> {
        const data = getQuoteData(ticker)
        data.then((data) => setQuoteData(data))
    }, [ticker])
    console.log(quoteData)
    return(
        <div className={classes.Container}>
            <p>{ticker}</p>
            <p className={classes.Price}>{quoteData.priceClose}</p>
            <p className={classes.Date}>{quoteData.date}</p>
            <Button btnType="Info" className={{backgroundColor: "none"}}>Buy</Button> 
            <Button btnType="Info" >Sell</Button>        
        </div>
    )
}
export default SecurityInfo