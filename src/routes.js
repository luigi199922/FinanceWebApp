import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Options from './containers/Options/Options'
import Stocks from './containers/Stocks/Stocks'

const BaseRouter = () =>{
    return (
        <Switch>
            <Route exact path="/options" component={Options}/>
            <Route exact path="/stocks" component={Stocks}/>
        </Switch>
    )
}
export default BaseRouter