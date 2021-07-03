import React, { Component } from "react";

import Form from "./components/Form";

import "./App.css";
class App extends Component {
  state = {
    toggleMenu: true,
  };

  handleToggleMenu = () => {
    console.log("click");
  };

  render() {
    console.log("hallo");
    // const greet = 'hallo' + 'hallo';
    return (
      <main className="app" onClick={this.handleToggleMenu}>
        <Form />
      </main>
    );
  }
}

export default App;
