import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import ReduxPromise from "redux-promise";
import * as serviceWorker from "./serviceWorker";
// import {
//   Router,
//   browserHistory,
//   Route
// } from "react-router/cjs/react-router.min";

// import { BrowserRouter, Route, Switch } from "react-router-dom";

// import PostList from "./components/PostList";
// import PostNew from "./components/PostNew";

// const store = createStore(rootReducer);
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    {/* <BrowserRouter>
        <Route exact path="/" component={App} />
        <Route exact path="/posts" component={PostList} />
        <Route exact path="/posts/new" component={PostNew} />
      </BrowserRouter> */}
    <App />
  </Provider>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
