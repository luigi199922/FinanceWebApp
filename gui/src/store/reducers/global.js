import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  modalMessage: "Welcome to Finalytics!",
};

const setMessage = (state, action) => {
  return updateObject(state, { modalMessage: action.message });
};

const removeMessage = (state, action) => {
  return updateObject(state, { modalMessage: "" });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GLOBAL_SET_MESSAGE:
      return setMessage(state, action);
    case actionTypes.GLOBAL_REMOVE_MESSAGE:
      return removeMessage(state, action);
    default:
      return state;
  }
};

export default reducer;
