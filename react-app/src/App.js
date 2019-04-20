import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddNoPage from "./ViewPage";

import "./App.css";
import HomePage from "./HomePage";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={HomePage} />
        <Route path="/afterAddNumber" component={AddNoPage} />
      </Router>
      // <HomePage />
    );
  }
}

export default App;
