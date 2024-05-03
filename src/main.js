const Puntuación = document.querySelector(".puntuacion");
let puntos=0
const mostrarPuntuacion=()=>{
    Puntuación.innerHTML=puntos;
}
document.addEventListener("DOMContentLoaded", mostrarPuntuacion())

