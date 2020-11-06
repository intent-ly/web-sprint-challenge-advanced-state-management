import React, { Component } from "react";
import "./App.css";
import smurfList from './smurf'
import {smurfForm} from './smurfForm'


class App extends Component {
  render() {
    return (
      <div className="App">
       <smurfForm />
       <smurfList/>
      </div>
    );
  }
}

export default App;
