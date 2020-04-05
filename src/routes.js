import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Stocks from './containers/Stocks/Stocks'
import OptionsT from './containers/Options/OptionsT'
import MainMenu from './containers/MainMenu/MainMenu'
import StockChart from './containers/StockChart/StockChart'

const BaseRouter = () =>{
    return (
        <Switch>
            <Route exact path="/" component={MainMenu}/>
            <Route exact path="/options" component={OptionsT}/>
            <Route exact path="/stocks" component={Stocks}/>
            <Route exact path="/chart" component={StockChart}/>
        </Switch>
    )
}
export default BaseRouter