import './App.css';
import 'antd/dist/antd.css';
import Header from './components/Header'
import Board from './components/Board'
import { useState } from 'react';

function App() {
  const [elements, setElements] = useState([]);

  return (
    <div className="App">
      <Header {...{elements,setElements}}/>
      <Board {...{elements,setElements}}/>
    </div>
  );
}

export default App;
