import { useState } from "react";

export default function TablaMultiplicar() {
  const [entrada, setEntrada] = useState("");
  const [numero, setNumero] = useState(null); // número ya validado
  const [error, setError] = useState("");

  function generar(evento) {
    evento.preventDefault();
    const n = parseFloat(entrada);

    if (Number.isNaN(n)) {
      setError("Escribe un número válido.");
      setNumero(null);
      return;
    }

    setError("");
    setNumero(n);
  }

  // Crea el arreglo [1, 2, 3, ..., 13] para recorrerlo con map.
  const multiplicadores = Array.from({ length: 13 }, (_, i) => i + 1);

  return (
    <section className="tarjeta">
      <h1>Tabla de multiplicar</h1>
      <form onSubmit={generar} className="formulario">
        <input
          type="number"
          step="any"
          placeholder="Escribe un número"
          value={entrada}
          onChange={(e) => setEntrada(e.target.value)}
        />
        <button type="submit">Generar tabla</button>
      </form>

      {error && <p className="error">{error}</p>}

      {numero !== null && (
        <table className="tabla">
          <tbody>
            {multiplicadores.map((i) => (
              <tr key={i}>
                <td>{numero}</td>
                <td>×</td>
                <td>{i}</td>
                <td>=</td>
                <td><strong>{numero * i}</strong></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}
