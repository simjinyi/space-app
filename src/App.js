import React from "react";
import Home from "./home/Home";
import Map from "./events/Map";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/events" exact>
          <Map />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
