import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import { connect } from "react-redux";
import * as actions from "./store/actions/index";
import MessageModal from "./components/UI/Modal/MessageModal";

const App = ({ onTryAutoSignup, message, onRemoveModal }) => {
  console.log(message);
  useEffect(() => {
    onTryAutoSignup();
  }, [onTryAutoSignup]);
  let showMessage = message.length > 0;
  return (
    <BrowserRouter>
      {showMessage > 0 && (
        <MessageModal
          closed={onRemoveModal}
          show={showMessage}
          message={message}
        />
      )}
      <Layout />
    </BrowserRouter>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
    message: state.global.modalMessage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
    onRemoveModal: () => dispatch(actions.removeModalMessage()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
