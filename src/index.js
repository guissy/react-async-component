import React from "react";
import { render } from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Switch, Route, Redirect } from "react-router";
import { Link } from "react-router-dom";
import Hello from "./Hello";
import asyncComponent from "./asyncComponent";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const HelloAsync = asyncComponent(() =>
  import(/* webpackChunkName:"Hello" */ "./Hello")
);
class App extends React.PureComponent {
  state = {};
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <div>
          <ul>
            <li>
              <Link to="/async">按需加载</Link>
            </li>
            <li>
              <Link to="/dev">即点即开</Link>
            </li>
            <li>
              <a href="/">返回首页</a>
            </li>
          </ul>
          <Route path="/async" component={HelloAsync} />
          <Route path="/dev" component={Hello} />
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById("root"));
