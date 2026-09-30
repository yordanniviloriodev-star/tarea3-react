import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles.css";

// Punto de entrada: React "monta" la app dentro del <div id="root"> de index.html.
// HashRouter maneja las rutas con # en la URL (ej: /#/sumadora),
// así funciona sin configuración extra en GitHub Pages.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
