let puntos = 8;
//función para mostrar la puntuación
const mostrarPuntuacion = () => {
  const Puntuación = document.querySelector(".puntuacion");
  Puntuación.innerHTML = puntos;
};
document.addEventListener("DOMContentLoaded", mostrarPuntuacion);
//función para generar numero aleatorio
function dameCarta() {
  let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
  while(numeroAleatorio === 8 || numeroAleatorio === 9) {
    numeroAleatorio = Math.floor(Math.random() * 10) + 1;
  }

  return numeroAleatorio;
}

console.log(dameCarta())
//capturando el botón de pedir carta y agregando funcionalidad
const pedirCarta = document.querySelector(".pedir-carta");
pedirCarta.addEventListener("click",dameCarta);
