import { useState } from "react";

export default function Sumadora() {
  // Estados: lo que el usuario escribe y el resultado.
  // Los inputs siempre entregan TEXTO, por eso empiezan como "".
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState("");

  function sumar(evento) {
    evento.preventDefault(); // evita que el formulario recargue la página

    // Convertimos el texto a número. "5" + "3" = "53" (texto), pero 5 + 3 = 8 (número).
    const a = parseFloat(numero1);
    const b = parseFloat(numero2);

    if (Number.isNaN(a) || Number.isNaN(b)) {
      setError("Escribe dos números válidos.");
      setResultado(null);
      return;
    }

    setError("");
    setResultado(a + b);
  }

  return (
    <section className="tarjeta">
      <h1>Sumadora</h1>
      <form onSubmit={sumar} className="formulario">
        <input
          type="number"
          step="any"
          placeholder="Primer número"
          value={numero1}
          onChange={(e) => setNumero1(e.target.value)}
        />
        <span className="signo">+</span>
        <input
          type="number"
          step="any"
          placeholder="Segundo número"
          value={numero2}
          onChange={(e) => setNumero2(e.target.value)}
        />
        <button type="submit">Sumar</button>
      </form>

      {/* Renderizado condicional: solo se muestra si hay algo que mostrar */}
      {error && <p className="error">{error}</p>}
      {resultado !== null && (
        <p className="resultado">
          {numero1} + {numero2} = <strong>{resultado}</strong>
        </p>
      )}
    </section>
  );
}
