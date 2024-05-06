let puntos: number = 1;

const Puntuacion = document.querySelector(".puntuacion");
const pedirCarta = document.querySelector(".pedir-carta");
// Mostrar la imagen en algún lugar de tu aplicación
// Por ejemplo, cambiar el src de una etiqueta img
document.querySelector(".cardfront").src = imagen;
//función para mostrar la puntuación
const mostrarPuntuacion = () => {
  if (Puntuacion !== null && Puntuacion !== undefined) {
    Puntuacion.innerHTML = puntos.toString();
  }
};
document.addEventListener("DOMContentLoaded", mostrarPuntuacion);
//función para generar numero aleatorio
function dameCarta() {
  let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
  while (numeroAleatorio === 8 || numeroAleatorio === 9) {
    numeroAleatorio = Math.floor(Math.random() * 10) + 1;
  }

  return numeroAleatorio;
}

console.log(dameCarta());
//capturando el botón de pedir carta y agregando funcionalidad

if (pedirCarta && pedirCarta instanceof HTMLButtonElement) {
  pedirCarta.addEventListener("click", dameCarta);
}
const mostrarCarta = (carta: number): void => {
  let imagen;

  // Mapear el valor de la carta a la imagen correspondiente
  switch (carta) {
    case 1:
      imagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
      break;
    case 2:
      imagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpgtps://example.com/2.png";
      break;
    case 3:
      imagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
      break;
    case 4:
      imagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
      break;
    case 5:
      imagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
      break;
    case 6:
      imagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
      break;
    case 7:
      imagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";

      break;
    case 8:
      imagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
      break;
    case 9:
      imagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
      break;
    case 10:
      imagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
      break;
    default:
      imagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  }
};
