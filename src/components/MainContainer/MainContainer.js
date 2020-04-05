import React from 'react'
import classes from './MainContainer.js'

const MainContainer = (props) => (
    <div className={classes.MainContainer}>
        {props.children}
    </div>
)

export default MainContainer