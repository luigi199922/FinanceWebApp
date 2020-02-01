import React from 'react'
import {Switch, Route} from 'react-router-dom'
const BaseRouter = () =>{
    return (
        <Switch>
            <Route exact path="/hello" component={<p>Fuck me</p>}/>
        </Switch>
    )
}
export default BaseRouter