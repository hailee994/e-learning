import { applyMiddleware, createStore } from "redux";
import createMiddleWareSaga from "redux-saga";
import { rootReducer } from "./rootReducer";
import rootSaga from "./sagas/rootSaga";

const middleWareSaga = createMiddleWareSaga();

const store = createStore(rootReducer, applyMiddleware(middleWareSaga));

middleWareSaga.run(rootSaga);

export default store;
