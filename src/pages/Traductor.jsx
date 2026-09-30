import { useState } from "react";
import { numeroALetras } from "../utils/numeroALetras.js";

export default function Traductor() {
  const [entrada, setEntrada] = useState("");
  const [resultado, setResultado] = useState("");
  const [error, setError] = useState("");

  function traducir(evento) {
    evento.preventDefault();
    const n = Number(entrada);

    // Validamos ANTES de convertir: entero y dentro del rango 1–1000.
    if (!Number.isInteger(n) || n < 1 || n > 1000) {
      setError("Ingresa un número entero del 1 al 1000.");
      setResultado("");
      return;
    }

    setError("");
    setResultado(numeroALetras(n)); // toda la lógica vive en utils/numeroALetras.js
  }

  return (
    <section className="tarjeta">
      <h1>Traductor de números a letras</h1>
      <form onSubmit={traducir} className="formulario">
        <input
          type="number"
          min="1"
          max="1000"
          placeholder="Número del 1 al 1000"
          value={entrada}
          onChange={(e) => setEntrada(e.target.value)}
        />
        <button type="submit">Traducir</button>
      </form>

      {error && <p className="error">{error}</p>}
      {resultado && (
        <p className="resultado">
          {entrada} → <strong>{resultado}</strong>
        </p>
      )}
    </section>
  );
}
