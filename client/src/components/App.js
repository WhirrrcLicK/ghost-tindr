import React from "react";
// import "./App.scss";
import "./Ghost-Tindr/styles.scss";
import Header from "./Ghost-Tindr/Header";
import Home from "./Home";
import Create from "./Ghost-Tindr/Create";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCards from "./Ghost-Tindr/TinderCards";
import Footer from "./Ghost-Tindr/Footer";
import Conversations from "./Ghost-Tindr/Conversations";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/cards">
            <TinderCards />
          </Route>
          <Route path="/conversations">
            <Conversations />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
