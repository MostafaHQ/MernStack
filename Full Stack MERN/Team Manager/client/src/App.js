import "./App.css";
import { Router } from "@reach/router";
import Main from "./views/Main";
import Create from "./views/Create";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path={"/players/list"} />
        <Create path={"/players/addplayer"} />
      </Router>
    </div>
  );
}

export default App;
