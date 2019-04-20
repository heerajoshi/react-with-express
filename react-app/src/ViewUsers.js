import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";

class ViewUser extends Component {
  render() {
    return (
      <div>
        <form action="/addNumber" method="post">
          <label>MOBILE NUMBER</label>
          <input type="text" name="mobileNo" />
          {/* <Link to="/addNo"> */}
            <input type="submit" value="Submit" />]
        </form>
      </div>
    );
  }
}

export default ViewUser;
