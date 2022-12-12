import "./App.css";
import React, { useState } from "react";
import ColorAdding from "./components/ColorAdding";
import ColorDisplay from "./components/ColorDisplay";

function App() {
  const [currentColor, setCurrentColor] = useState([]);
  const coloring = (color) => {
    setCurrentColor([...currentColor, color]);
  };

  return (
    <div className="App">
      <ColorAdding newColor={coloring} />
      <ColorDisplay boxColor={currentColor} />
    </div>
  );
}

export default App;
