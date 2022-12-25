import { Router } from "@reach/router";
import "./App.css";
import AuthorList from "./components/AuthorList";
import AuthorForm from "./views/AuthorForm";
import Main from "./views/Main";
import Update from "./views/Update";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path={"/new"} />
        <AuthorList path={"/"} />
        <Update path={"/edit/:id"} />
      </Router>
    </div>
  );
}

export default App;
