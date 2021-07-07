import React, { Component } from "react";
import "./App.css";
import SmurfData from './smurfData';
import SmurfsForm from './form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Get Updated Smurfs List</div>
        <SmurfData />
        <SmurfsForm />
      </div>
    );
  }
}

export default App;
