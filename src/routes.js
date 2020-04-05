import React from 'react'
import {Switch, Route} from 'react-router-dom'
import OptionsT from './containers/Options/OptionsT'
import asyncComponent from './hoc/asyncComponent/asyncComponent';
import COVID from './containers/COVID/COVID'

const asyncStockAnalysis = asyncComponent(() => {
    return import('./containers/Stocks/Stocks')
  })
const asyncStockChart = asyncComponent(() => {
    return import('./containers/StockChart/StockChart')
  })
const BaseRouter = () =>{
    return (
        <Switch>
            <Route exact path="/" component={COVID}/>
            <Route exact path="/options" component={OptionsT}/>
            <Route exact path="/stocks" component={asyncStockChart}/>
            <Route exact path="/stock-analysis" component={asyncStockAnalysis}/>
        </Switch>
    )
}
export default BaseRouter