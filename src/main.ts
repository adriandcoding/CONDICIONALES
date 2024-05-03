let puntos = 0;
const mostrarPuntuacion = () => {
  const Puntuación = document.querySelector(".puntuacion");
  Puntuación.innerHTML = puntos;
};
document.addEventListener("DOMContentLoaded", mostrarPuntuacion());

const BotonDameCarta = document.querySelector(".pedir-carta");
const dameCarta = () => {
    puntos = 0
    const carta = Math.floor(Math.random() * 100) + 1;
    puntos += carta;
    return puntos
}
BotonDameCarta.addEventListener("click", dameCarta);

