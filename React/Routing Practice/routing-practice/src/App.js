import "./App.css";
import { Router } from "@reach/router";
import Home from "./components/Home";
import MyNumber from "./components/MyNumber";
import StylingComp from "./components/StylingComp";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <MyNumber path="/:num" />
        <StylingComp path="/:word/:color1/:color2" />
      </Router>
    </div>
  );
}

export default App;
