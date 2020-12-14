import { combineReducers } from "redux";
import { ClientReducer } from "./Reducers/ClientReducer";
import { LoadingReducer } from "./Reducers/LoadingReducer";
import { AdminReducer } from "./Reducers/AdminReducer";

export const rootReducer = combineReducers({
  LoadingReducer,
  ClientReducer,
  AdminReducer,
});
