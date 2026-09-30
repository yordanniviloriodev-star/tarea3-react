// ✏️ Pega aquí el ID de tu video de YouTube.
// Si tu enlace es https://www.youtube.com/watch?v=abc123XYZ  -> el ID es "abc123XYZ"
// Si es https://youtu.be/abc123XYZ                            -> el ID es "abc123XYZ"
const VIDEO_ID = "PEGA_AQUI_EL_ID";

export default function Experiencia() {
  return (
    <section className="tarjeta">
      <h1>Mi experiencia con esta tarea</h1>
      <p>
        En este video explico cómo construí la aplicación con React, qué aprendí
        y qué retos encontré.
      </p>

      {/* El contenedor mantiene la proporción 16:9 del video en cualquier pantalla */}
      <div className="video">
        <iframe
          src={`https://www.youtube.com/embed/${VIDEO_ID}`}
          title="Experiencia personal - Tarea 3"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          // YouTube necesita saber desde dónde se incrusta el video; sin esto puede fallar dentro de una app Android
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      {/* Plan B: si el reproductor no carga dentro de la app, este enlace abre el video en YouTube */}
      <p>
        <a
          className="enlace-video"
          href={`https://www.youtube.com/watch?v=${VIDEO_ID}`}
          target="_blank"
          rel="noreferrer"
        >
          ▶ Ver el video en YouTube
        </a>
      </p>
    </section>
  );
}
