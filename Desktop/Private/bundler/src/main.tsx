import { createRoot } from "react-dom/client";
import App from "./components/App";
import Filters from "./components/Filters";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <App />
    <Filters />
  </div>
);
