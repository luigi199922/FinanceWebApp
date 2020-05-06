import React from "react";
import classes from "./Toolbar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import NavigationItemSocket from "../NavigationItems/Socket/NavigationItemsSocket";
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import {connect} from 'react-redux'

const toolbar = (props) => { 
  return (
    <header className={classes.Toolbar}>
       <DrawerToggle clicked={props.drawerToggleClicked}/>
      <nav className={classes.DesktopOnly}>
        <NavigationItems userId={props.email} isAuth={props.isAuth}/>
      </nav>
      <div className={classes.DesktopOnly}>
        <NavigationItemSocket />
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.token !== null,
    email: state.auth.userData.email,
  };
};

export default connect(mapStateToProps)(toolbar);

