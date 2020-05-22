import React, {useState} from 'react';
import TodoItem from './TodoItem';
import './App.css';

function App() {
  let [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <div>Counter: {counter}</div>
      <div>
        <button onClick={() => setCounter((c) => c - 1)}>-</button>
        <button onClick={() => setCounter((c) => c + 1)}>+</button>
      </div>

      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}

export default App;
