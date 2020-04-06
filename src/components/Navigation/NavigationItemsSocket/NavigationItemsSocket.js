import React, { useState } from "react";
import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";
import { KEY } from "../../../shared/key";

const NavigationItemsSocket = (props) => {

  let socketData = null;
  if (props.socketData) {
    socketData = <NavigationItem link={"/" + props.socketData.data[0].s}>{props.socketData.data[0].s + " " + props.socketData.data[0].p}</NavigationItem>;
  }

  return <ul>{socketData}</ul>;
};

export default NavigationItemsSocket;
