import React from "react";
import classes from "./Toolbar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import NavigationItemsSocket from "../NavigationItemsSocket/NavigationItemsSocket";

const toolbar = (props) => {
  
  return (
    <header className={classes.Toolbar}>
      
      <nav className={classes.DesktopOnly}>
        <NavigationItems userId={props.email} />
      </nav>
      <div className={classes.DesktopOnly}>
        <NavigationItemsSocket />
      </div>
    </header>
  );
};
export default toolbar;
