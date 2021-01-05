import "./App.css";
import "antd/dist/antd.css";
import Header from "./components/Header";
import Board from "./components/Board";
import { useState } from "react";

let id = 0;
const getId = (type) => `${type}_${id++}`;
const resetId = (newId) => (id = newId);

function App() {
  const [elements, setElements] = useState([]);

  return (
    <div className="App">
      <Header {...{ elements, setElements, resetId }} />
      <Board {...{ elements, setElements, getId }} />
    </div>
  );
}

export default App;
