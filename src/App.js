import React from "react";
import "./App.css";
import PostList from "./components/PostList";
import PostNew from "./components/PostNew";
import PostShow from "./components/PostShow";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={PostList} />
        <Route exact path="/posts" component={PostList} />
        <Switch>
          <Route exact path="/posts/new" component={PostNew} />
          <Route exact path="/posts/:id" component={PostShow} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
