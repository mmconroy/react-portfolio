import React from "react";
import "./App.css";
import Main from "./Components/Main";
import Header from "./Components/Header";
import About from "./Components/About";
import { Route } from "react-router-dom";
import { Switch } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Header />

      <Route exact path="/">
        <Main />
      </Route>
      <Route exact path="About">
        <About />
      </Route>
    </div>
  );
}

export default App;
