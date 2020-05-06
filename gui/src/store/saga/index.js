import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import {
  checkAuthTimeoutSaga,
  logoutSaga,
  loginUserSaga,
  authCheckState,
  signupUserSaga,
  getUserCredentialsSaga,
  updateUserSaga,
} from "./auth";
export function* watchAuth() {
  yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
  yield takeEvery(actionTypes.AUTH_USER_LOGOUT, logoutSaga);
  yield takeEvery(actionTypes.AUTH_LOGIN, loginUserSaga);
  yield takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckState);
  yield takeEvery(actionTypes.AUTH_USER_SIGNUP, signupUserSaga);
  yield takeEvery(
    actionTypes.AUTH_GET_USER_CREDENTIALS,
    getUserCredentialsSaga
  );
  yield takeEvery(actionTypes.AUTH_UPDATE_USER, updateUserSaga);
}

