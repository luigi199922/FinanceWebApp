import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Poke App</NavigationItem>
        <NavigationItem link="/options">Options</NavigationItem>
        <NavigationItem link="/stocks">Stocks</NavigationItem>
    </ul>
)
export default NavigationItems