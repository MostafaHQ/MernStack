import "./App.css";
import Tabs from "./components/Tabs";

function App() {
  return (
    <div className="App">
      <Tabs
        tabs={[
          { title: "Tab 1", content: "mrknrkvre" },
          { title: "Tab 2", content: "ghnynytbt" },
          { title: "Tab 3", content: "yuttweq" },
        ]}
      />
    </div>
  );
}

export default App;
