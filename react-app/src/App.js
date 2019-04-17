import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {text : "hello"};
    this.update = this.update.bind(this);
  }

  update(data){
    this.setState({text:data});
  }

  render() {
    return (
      <div className="App">
       <h1 onClick={()=>{
         fetch("/hello").
         then(res=>res.text()).then(this.update)
       }}>{this.state.text}</h1>

      </div>
    );
  }
}

export default App;
