import React from "react";
// import "./App.scss";
import "./Ghost-Tindr/styles.scss";
import Header from "./Ghost-Tindr/Header";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/dashboard"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
