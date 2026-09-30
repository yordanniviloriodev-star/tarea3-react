// Convierte un número entero del 1 al 1000 a letras en español.
// Se hace a mano (sin APIs ni librerías), usando tablas de palabras.

const UNIDADES = [
  "cero", "uno", "dos", "tres", "cuatro",
  "cinco", "seis", "siete", "ocho", "nueve",
];

// Del 10 al 29 el español tiene palabras "especiales", por eso van en su propia tabla.
const DIEZ_A_VEINTINUEVE = [
  "diez", "once", "doce", "trece", "catorce", "quince",
  "dieciséis", "diecisiete", "dieciocho", "diecinueve",
  "veinte", "veintiuno", "veintidós", "veintitrés", "veinticuatro",
  "veinticinco", "veintiséis", "veintisiete", "veintiocho", "veintinueve",
];

// Posición = cifra de las decenas (3 -> "treinta"). Las posiciones 0, 1 y 2 no se usan aquí.
const DECENAS = [
  "", "", "", "treinta", "cuarenta",
  "cincuenta", "sesenta", "setenta", "ochenta", "noventa",
];

// Posición = cifra de las centenas (1 -> "ciento", 5 -> "quinientos").
const CENTENAS = [
  "", "ciento", "doscientos", "trescientos", "cuatrocientos",
  "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos",
];

// Convierte un número de 0 a 99.
function convertirDecenas(n) {
  if (n < 10) return UNIDADES[n];
  if (n < 30) return DIEZ_A_VEINTINUEVE[n - 10];

  const decena = Math.floor(n / 10); // 47 -> 4
  const unidad = n % 10;             // 47 -> 7

  if (unidad === 0) return DECENAS[decena];              // 40 -> "cuarenta"
  return `${DECENAS[decena]} y ${UNIDADES[unidad]}`;     // 47 -> "cuarenta y siete"
}

// Función principal: recibe un entero del 1 al 1000.
export function numeroALetras(n) {
  if (n === 1000) return "mil";
  if (n === 100) return "cien"; // caso especial: 100 es "cien", pero 101 es "ciento uno"

  const centena = Math.floor(n / 100); // 358 -> 3
  const resto = n % 100;               // 358 -> 58

  if (centena === 0) return convertirDecenas(resto);     // 1 a 99
  if (resto === 0) return CENTENAS[centena];             // 200, 300, ...
  return `${CENTENAS[centena]} ${convertirDecenas(resto)}`; // 358 -> "trescientos cincuenta y ocho"
}
