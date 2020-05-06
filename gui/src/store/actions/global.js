import * as actionTypes from "./actionTypes";

export const setModalMessage = (message) => {
    return {
      type: actionTypes.GLOBAL_SET_MESSAGE,
      message: message
    }
  }

  export const removeModalMessage = () => {
    return {
      type: actionTypes.GLOBAL_REMOVE_MESSAGE,
    }
  }