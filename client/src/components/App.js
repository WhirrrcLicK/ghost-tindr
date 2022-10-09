import React from "react";
import "./Ghost-Tindr/styles.scss";
import Header from "./Ghost-Tindr/Header";
import Home from "./Home";
import Browse from "./Ghost-Tindr/Browse";
import Create from "./Ghost-Tindr/Create";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Footer from "./Ghost-Tindr/Footer";
import Conversations from "./Ghost-Tindr/Conversations";
import ViewProfile from "./Ghost-Tindr/ViewProfile";
import ChatDisplay from "./Ghost-Tindr/ChatDisplay";
import { useCookies } from "react-cookie";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const authToken = cookies.AuthToken;
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/create">
            <Create />
          </Route>
          {authToken && (
            <Route path="/cards">
              <Browse />
            </Route>
          )}
          {authToken && (
            <Route path="/conversations">
              <Conversations />
            </Route>
          )}
          <Route path="/profile">
            <Header />
            <ViewProfile />
            <Footer />
          </Route>
          <Route path="/chat/:ghost">
            <ChatDisplay />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
