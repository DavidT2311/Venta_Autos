import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hola</h1>
      <button onClick={() => setCount(count + 2)}>Aumentar</button>
      <p>{count}</p>
    </>
  );
}

export default App;
