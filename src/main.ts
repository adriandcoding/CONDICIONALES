let puntos: number = 4;

const Puntuacion = document.querySelector(".puntuacion");
const pedirCarta = document.querySelector(".pedir-carta");
const cartaMostrada = document.querySelector(".cardfront")

//función para mostrar la puntuacion
const mostrarPuntuacion = () => {
  if (Puntuacion !== null && Puntuacion !== undefined) {
    Puntuacion.innerHTML = puntos.toString();
  }
};
document.addEventListener("DOMContentLoaded", mostrarPuntuacion);

//función para generar carta aleatoria
function pideCarta() {
  let cartaAleatoria = Math.floor(Math.random() * 10) + 1;
  while (cartaAleatoria === 8 || cartaAleatoria === 9) {
    cartaAleatoria = Math.floor(Math.random() * 10) + 1;
  }
  return cartaAleatoria;
}
const mostrarCarta = (cartaAleatoria: number): string => {
  let imagen;
// Mapeando el valor
  switch (cartaAleatoria) {
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
    case 10:
      imagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
      break;
    case 11:
      imagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
      break;
    case 12:
      imagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
      break;
    default:
      imagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  }
  return imagen;
};
//capturando el botón de pedir carta y agregando funcionalidad
if (pedirCarta && pedirCarta instanceof HTMLButtonElement) {
  pedirCarta.addEventListener("click",pideCarta);
}

