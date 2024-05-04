let puntos = 8;
const mostrarPuntuacion = () => {
  const Puntuación = document.querySelector(".puntuacion");
  Puntuación.innerHTML = puntos;
};
document.addEventListener("DOMContentLoaded", mostrarPuntuacion());



