import "./App.css";
import React from "react";
import Main from "./views/Main";
import { Router } from "@reach/router";
import Detail from "./views/Detail";
import Update from "./views/Update";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Detail path="/people/:id" />
        <Update path="/people/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
