import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">FINALYTICS</NavigationItem>
        <NavigationItem link="/options">Options</NavigationItem>
        <NavigationItem link="/stocks">Stocks</NavigationItem>
        <NavigationItem link="/forex">Forex</NavigationItem>
    </ul>
)
export default NavigationItems