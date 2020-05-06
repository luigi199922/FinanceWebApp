import React, {Fragment} from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = ({isAuth}) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/">FINALYTICS</NavigationItem>
    <NavigationItem link="/options">Options</NavigationItem>
    <NavigationItem link="/stock">Stocks</NavigationItem>
    <NavigationItem link="/forex">Forex</NavigationItem>
    <NavigationItem link="/crypto">Crypto</NavigationItem>
    <NavigationItem link="/economic">Economic</NavigationItem>
    {!isAuth ? (
      <NavigationItem link="/login">Login</NavigationItem>
    ) : (
      <Fragment>
        <NavigationItem link="/profile">Profile</NavigationItem>
        <NavigationItem link="/logout">Logout</NavigationItem>
      </Fragment>
    )}
  </ul>
);
export default NavigationItems;
