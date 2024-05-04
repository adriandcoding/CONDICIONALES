let puntos = 8;
const mostrarPuntuacion = () => {
  const Puntuación = document.querySelector(".puntuacion");
  Puntuación.innerHTML = puntos;
};
document.addEventListener("DOMContentLoaded", mostrarPuntuacion);

const generarNumeroAleatorio = (min: number, max: number): number => {
  let numeroAleatorio = Math.floor(Math.random() * (max - min + 1) + min);
  return numeroAleatorio;
}
  

console.log(generarNumeroAleatorio(1,12));
