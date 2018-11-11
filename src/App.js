import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";

import NavBar from "./components/layout/NavBar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
