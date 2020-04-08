import React from "react";
import classes from "./Toolbar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import NavigationItemSocket from "../NavigationItems/Socket/NavigationItemsSocket";
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const toolbar = (props) => {
  
  return (
    <header className={classes.Toolbar}>
       <DrawerToggle clicked={props.drawerToggleClicked}/>
      <nav className={classes.DesktopOnly}>
        <NavigationItems userId={props.email} />
      </nav>
      <div className={classes.DesktopOnly}>
        <NavigationItemSocket />
      </div>
    </header>
  );
};
export default toolbar;
