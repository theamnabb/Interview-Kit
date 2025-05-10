import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  // Increase 
  const increaseCount = () => {
    setCount(count + 1);
  };

  // Decrease 
  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>CountApp</h1>
      <h2>Current Count: {count}</h2>

      <div className="card">
        <button onClick={increaseCount}>
          Increase
        </button>
      </div>

      <div className="card">
        <button onClick={decreaseCount}>
          Decrease
        </button>
      </div>
    </>
  );
}

export default App;
