import React from "react";
import Home from "./home/Home";
import Test from "./events/test";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/test" exact>
          <Test />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
