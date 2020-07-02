import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import MainContainer from "../../components/MainContainer/MainContainer";
import BaseRouter from "../../routes";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

const Layout = () => {
  const [showSideDrawer, setShowSideDrawer] = useState(true);

  const sideDrawerCloser = () => {
    setShowSideDrawer(false);
  };
  const sideDrawerToggleHandler = () => {
    setShowSideDrawer((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  return (
    <>
      <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
      <SideDrawer open={showSideDrawer} closed={sideDrawerCloser} />
      <MainContainer>
        <BaseRouter />
      </MainContainer>
      <Footer />
    </>
  );
};

export default Layout;
