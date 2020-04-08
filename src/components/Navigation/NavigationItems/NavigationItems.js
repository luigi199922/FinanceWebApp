import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">FINALYTICS</NavigationItem>
        <NavigationItem link="/options">Options</NavigationItem>
        <NavigationItem link="/stock">Stocks</NavigationItem>
        <NavigationItem link="/forex">Forex</NavigationItem>
        <NavigationItem link="/crypto">Crypto</NavigationItem>
        <NavigationItem link="/economic">Economic</NavigationItem>
    </ul>
)
export default NavigationItems