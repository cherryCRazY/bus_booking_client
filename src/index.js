import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";
import createSagaMiddleware from "redux-saga";

import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import reducers from "./store/reducers";
import { put, call, all, apply, take, takeEvery } from "redux-saga/effects";
import { FETCH_USER, FETCH_USER_ASYNC } from "./store/actions/actionTypes";
import axios from "axios";

// const kek = axios.get("/api/current_user").then(data => console.log(data));

function* fetchUser() {
    const payload = yield apply(axios, axios.get, ["/api/current_user"]);

    console.log(payload.data);
    yield put({ type: FETCH_USER, payload: payload.data });
}

function* watchLogger() {
    yield takeEvery(FETCH_USER_ASYNC, fetchUser);
}

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
    process.env.NODE_ENV === "development"
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : null || compose;

const store = createStore(
    reducers,
    {},
    composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(watchLogger);

const action = type => (console.log("kek"), store.dispatch({ type }));

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
