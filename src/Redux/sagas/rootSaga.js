import { all } from "redux-saga/effects";
import { clientActionApi } from "./ClientSaga";
import { adminActionApi } from "./AdminSaga";

function* rootSaga() {
  yield all([clientActionApi(), adminActionApi()]);
}

export default rootSaga;
