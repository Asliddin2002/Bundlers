import { useState } from "react";

import styles from "./style.module.scss";

const App = () => {
  const [state, setState] = useState(0);

  const increament = () => {
    setState((prev) => prev + 1);
  };

  return (
    <div>
      <h1>This is counter App</h1>
      <h3 className={styles.count}>{state}</h3>
      <button className={styles.button} onClick={increament}>
        +
      </button>
    </div>
  );
};

export default App;
