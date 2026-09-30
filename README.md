# Tarea 3 – Explorando React con un Proyecto Creativo

Aplicación hecha con **React + Vite + React Router** que incluye un menú con:

1. **Inicio** – datos personales (foto 2x2, nombre, apellido, correo).
2. **Sumadora** – suma dos números.
3. **Traductor de números a letras** – del 1 al 1000, en español, sin APIs.
4. **Tabla de multiplicar** – del 1 al 13.
5. **Experiencia personal** – video de YouTube explicando la tarea.

## Cómo ejecutarla

```bash
npm install
npm run dev
```

Abrir la dirección que aparece en la terminal (normalmente http://localhost:5173).

## Estructura

```
src/
├── main.jsx                 # punto de entrada + router
├── App.jsx                  # layout: menú + rutas
├── styles.css               # estilos (responsive)
├── components/Menu.jsx      # menú de navegación
├── pages/                   # una página por opción del menú
│   ├── Inicio.jsx
│   ├── Sumadora.jsx
│   ├── Traductor.jsx
│   ├── TablaMultiplicar.jsx
│   └── Experiencia.jsx
└── utils/numeroALetras.js   # lógica de conversión número → letras
```

**Autor:** Yordanni Vilorio Jiminian – Matrícula 2019-7711 – ITLA
