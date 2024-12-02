import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./views/app/index.js";

const root = document.getElementById("root");
if (!root) {
  throw new Error("Root element not found");
}
createRoot(root).render(<App />);
