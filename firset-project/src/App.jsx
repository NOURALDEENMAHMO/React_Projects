import Items from "./items";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.css";
export default function App() {
  return (
    <div className="info">
      <Items />
      <Items />
      <Items />
      <Items />
    </div>
  );
}
