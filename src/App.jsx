import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu.jsx";
import Inicio from "./pages/Inicio.jsx";
import Sumadora from "./pages/Sumadora.jsx";
import Traductor from "./pages/Traductor.jsx";
import TablaMultiplicar from "./pages/TablaMultiplicar.jsx";
import Experiencia from "./pages/Experiencia.jsx";

// App es el "esqueleto": el menú siempre visible + el área donde cambia la página.
export default function App() {
  return (
    <div className="layout">
      <Menu />
      <main className="contenido">
        {/* Routes mira la URL y muestra SOLO la página que coincide */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sumadora" element={<Sumadora />} />
          <Route path="/traductor" element={<Traductor />} />
          <Route path="/tabla" element={<TablaMultiplicar />} />
          <Route path="/experiencia" element={<Experiencia />} />
        </Routes>
      </main>
    </div>
  );
}
