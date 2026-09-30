import { useState } from "react";
import { Link } from "react-router-dom";
import Icono from "../components/Icono.jsx";
import { OPCIONES } from "../data/opciones.js";

// ✏️ Tus datos. Verifica que el correo institucional sea exactamente el tuyo.
const DATOS = {
  nombre: "Yordanni",
  apellido: "Vilorio Jiminian",
  correo: "20197711@itla.edu.do",
  matricula: "2019-7711",
  carrera: "Estudiante de Desarrollo de Software",
  foto: "foto.jpg", // archivo en la carpeta /public
};

// Iniciales para mostrar si la foto no carga: "Yordanni" + "Vilorio" -> "YV"
const INICIALES = DATOS.nombre[0] + DATOS.apellido[0];

export default function Inicio() {
  // Si la imagen falla (no existe o nombre incorrecto), mostramos las iniciales
  const [fotoFallo, setFotoFallo] = useState(false);

  // Los accesos rápidos son todas las opciones MENOS "Inicio" (ya estamos aquí)
  const accesos = OPCIONES.filter((op) => op.ruta !== "/");

  return (
    <div className="inicio">
      <section className="perfil">
        <div className="perfil-banner" />

        <div className="perfil-cuerpo">
          {fotoFallo ? (
            <div className="avatar avatar-iniciales">{INICIALES}</div>
          ) : (
            <img
              className="avatar"
              src={import.meta.env.BASE_URL + DATOS.foto}
              alt={`Foto de ${DATOS.nombre}`}
              onError={() => setFotoFallo(true)}
            />
          )}

          <h1 className="perfil-nombre">
            {DATOS.nombre} {DATOS.apellido}
          </h1>

          <div className="chips">
            <span className="chip">
              <Icono nombre="badge" tamano={18} /> {DATOS.matricula}
            </span>
            <a className="chip chip-accion" href={`mailto:${DATOS.correo}`}>
              <Icono nombre="mail" tamano={18} /> {DATOS.correo}
            </a>
          </div>

          <p className="perfil-carrera">
            <Icono nombre="school" tamano={18} /> {DATOS.carrera}
          </p>
        </div>
      </section>

      <h2 className="seccion-titulo">Explora la app</h2>

      {/* Botones de acceso rápido, en fila horizontal */}
      <div className="accesos">
        {accesos.map((op) => (
          <Link key={op.ruta} to={op.ruta} className="acceso">
            <span className="acceso-icono">
              <Icono nombre={op.icono} tamano={28} />
            </span>
            <span className="acceso-texto">{op.corto}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
