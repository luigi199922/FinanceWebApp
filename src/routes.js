import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Stocks from './containers/Stocks/Stocks'
import OptionsT from './containers/Options/OptionsT'
import MainMenu from './containers/MainMenu/MainMenu'

const BaseRouter = () =>{
    return (
        <Switch>
            <Route exact path="/" component={MainMenu}/>
            <Route exact path="/options" component={OptionsT}/>
            <Route exact path="/stocks" component={Stocks}/>
        </Switch>
    )
}
export default BaseRouter