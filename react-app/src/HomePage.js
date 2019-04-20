import React, { Component } from "react";
import "./App.css";
import ViewUser from "./ViewUsers";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "hello", users: [] };
    this.update = this.update.bind(this);
    this.addUser = this.addUser.bind(this);
  }
  componentDidMount() {
    fetch("/getUsers")
      .then(res => res.json())
      .then(res => this.setState({ users: res }));
  }

  update(data) {
    this.setState({ text: data });
  }

  addUser() {
    const username = document.getElementById("username").value;
    fetch("/addUser", { method: "POST", body: JSON.stringify(username) })
      .then(res => res.json())
      .then(res => this.setState({ users: res }));
  }

  render() {
    const users = this.state.users.map(user => {
      return <div>{user.name}</div>;
    });
    return (
      <div className="App">
        <input type="text" name="username" id="username" />
        <button onClick={this.addUser}>addUser</button>
        <ViewUser />

        <h1
          onClick={() => {
            fetch("/hello")
              .then(res => res.text())
              .then(this.update);
          }}
        >
          {this.state.text}
          {users}
        </h1>
      </div>
    );
  }
}
export default HomePage;
