import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const loginTest = () => {
    setCount((count) => count + 1);
  };

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => loginTest()}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
