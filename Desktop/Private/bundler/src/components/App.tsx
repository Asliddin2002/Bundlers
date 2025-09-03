import { useState } from "react";

import "./style.css";
import "./style.scss";

const App = () => {
  const [state, setState] = useState(0);

  const increament = () => {
    setState((prev) => prev + 1);
  };

  return (
    <div>
      <h1>This is counter App</h1>
      <h3>{state}</h3>
      <button onClick={increament}>+</button>
    </div>
  );
};

export default App;
