import React, {useState} from 'react';
import './App.css';

function App() {
  let [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <div>Counter: { counter }</div>
      <div>
        <button onClick={() => setCounter((c) => c - 1)}>-</button>
        <button onClick={() => setCounter((c) => c + 1)}>+</button>
      </div>
    </div>
  );
}

export default App;
