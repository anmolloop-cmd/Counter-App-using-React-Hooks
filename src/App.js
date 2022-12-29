import React, { useState } from "react";
import "./App.css"


function App() {
    const [count, setCount] = useState(0);
  return (
    <div className="container">
      <h1>Counter App</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Plus
      </button>
      <br></br>
      <button onClick={() => setCount(count - 1)}>
        Minus
      </button>
      <br></br>
      <button onClick={() => setCount(0)}>
        Reset to Zero
      </button>
      <br></br>
    </div>
        );
}

export default App;
