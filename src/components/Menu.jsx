import { useState } from "react";
import { NavLink } from "react-router-dom";
import Icono from "./Icono.jsx";
import { OPCIONES } from "../data/opciones.js";

export default function Menu() {
  // ¿El menú lateral está abierto? (solo aplica en celular; en PC siempre se ve)
  const [abierto, setAbierto] = useState(false);
  const cerrar = () => setAbierto(false);

  return (
    <>
      {/* Barra superior: solo visible en celular */}
      <header className="barra-superior">
        <button className="boton-icono" onClick={() => setAbierto(true)} aria-label="Abrir menú">
          <Icono nombre="menu" />
        </button>
        <span className="barra-titulo">Tarea 3 · React</span>
      </header>

      {/* Fondo oscuro detrás del menú; al tocarlo, el menú se cierra */}
      <div className={abierto ? "velo visible" : "velo"} onClick={cerrar} />

      {/* Menú lateral (Navigation Drawer de Material 3) */}
      <nav className={abierto ? "drawer abierto" : "drawer"}>
        <div className="drawer-marca">
          <span className="marca-logo">ITLA</span>
          <div>
            <p className="marca-titulo">Tarea 3</p>
            <p className="marca-sub">Desarrollo Móvil · React</p>
          </div>
        </div>

        {OPCIONES.map((op) => (
          <NavLink
            key={op.ruta}
            to={op.ruta}
            end
            onClick={cerrar}
            className={({ isActive }) => (isActive ? "drawer-item activo" : "drawer-item")}
          >
            <Icono nombre={op.icono} />
            <span>{op.texto}</span>
          </NavLink>
        ))}
      </nav>
    </>
  );
}
