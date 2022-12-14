import "./App.css";
import { Router } from "@reach/router";
import Main from "./views/Main";
import Create from "./views/Create";
import PlayersStatus from "./views/PlayersStatus";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path={"/players/list"} />
        <Create path={"/players/addplayer"} />
        <PlayersStatus path={"/game/status/:id"}/>
      </Router>
    </div>
  );
}

export default App;
