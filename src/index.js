import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";
import createSagaMiddleware from "redux-saga";
import "antd/dist/antd.css";

import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import reducers from "./store/reducers";
import rootSaga from "./store/sagas/rootSaga";

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

sagaMiddleware.run(rootSaga);

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
