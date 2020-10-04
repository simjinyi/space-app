import React from "react";
import Home from "./home/Home";
import Map from "./events/Map";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
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
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
