import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/layout/header/Header";
import SideMenu from "./components/layout/navigation/side-menu/SideMenu";

import News from "./components/pages/news/News";
import CreateCharacter from "./components/player-pages/CreateCharacter";
import NotFound from "./components/pages/404/NotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <SideMenu />
          <Switch>
            <Route exact path="/" component={News} />
            <Route exact path="/create" component={CreateCharacter} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
