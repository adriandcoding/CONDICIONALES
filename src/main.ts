let puntosTotales: number = 0;
const numeroGanador: number = 7.5;

//función para mostrar la puntuacion
const mostrarPuntuacion = () => {
  const Puntuacion = document.querySelector(".puntuacion");
  if (Puntuacion !== null && Puntuacion !== undefined) {
    Puntuacion.innerHTML = puntosTotales.toString();
  }
};
document.addEventListener("DOMContentLoaded", mostrarPuntuacion);

//función para generar carta aleatoria
const obtenerNumeroAleatorio = (): number => {
  return Math.floor(Math.random() * 10) + 1;
};
const obtenerNumeroCarta = (numeroAleatorio: number): number => {
  if (numeroAleatorio > 7) {
    return numeroAleatorio + 2;
  }

  return numeroAleatorio;
};
//función para obtener el valor de la carta
const obtenerValorCarta = (carta: number): number => {
  if (carta > 7) {
    return 0.5;
  }

  return carta;
};
// para pintar el url de cada carta
const pintarUrlImagen = (urlCarta: string): void => {
  const cartaMostrada = document.querySelector(".cardfront");

  if (cartaMostrada && cartaMostrada instanceof HTMLImageElement) {
    cartaMostrada.src = urlCarta;
  }
};
//generar puntuación
const sumarPuntos = (puntos: number) => {
  return puntosTotales + puntos;
};
const asignarNuevosPuntos = (nuevosPuntos: number) => {
  puntosTotales = nuevosPuntos;
};

// pedir carta
const pideCarta = (): void => {
  const numeroAleatorio = obtenerNumeroAleatorio();
  const carta = obtenerNumeroCarta(numeroAleatorio);
  const urlCarta = obtenerUrlImagen(carta);
  pintarUrlImagen(urlCarta);
  const puntos = obtenerValorCarta(carta);
  const puntosSumados = sumarPuntos(puntos);
  asignarNuevosPuntos(puntosSumados);

  gameOver();
  mostrarPuntuacion();
};
//capturando el botón de pedir carta y agregando funcionalidad
const pedirCarta = document.querySelector(".pedir-carta");
if (pedirCarta && pedirCarta instanceof HTMLButtonElement) {
  pedirCarta.addEventListener("click", pideCarta);
}

//capturando las url de las imagenes
const obtenerUrlImagen = (carta: number): string => {
  let imagen;
  // Mapeando el valor
  switch (carta) {
    case 1:
      imagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
      break;
    case 2:
      imagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
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
// nueva partida
const nuevaPartida = (): void => {
  puntosTotales = 0;
  mostrarPuntuacion();
  pintarUrlImagen(
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg"
  );
  const pedirCarta = document.querySelector(".pedir-carta");
  if (pedirCarta && pedirCarta instanceof HTMLButtonElement) {
    pedirCarta.disabled = false;
  }
 resetGame()
};
//capturando el botón de nueva partida y agregando funcionalidad
const botonNuevaPartida = document.querySelector(".nueva-partida");
if (botonNuevaPartida && botonNuevaPartida instanceof HTMLButtonElement) {
  botonNuevaPartida.addEventListener("click", nuevaPartida);
}

//funcionalidad para el botón de game over
const gameOver = (): void => {
  if (puntosTotales > numeroGanador) {
    alert("¡HAS PERDIDO!\u{1F600}");
    const pedirCarta = document.querySelector(".pedir-carta");
    if (pedirCarta && pedirCarta instanceof HTMLButtonElement) {
      pedirCarta.disabled = true;
    }
    nuevaPartida()
  }
 
};

//valorar la opción al plantarse
const valorar = ():string => {
  let mensaje = "";
  if (puntosTotales > 4) {
    mensaje = "Has sido muy conservador";
  }
  if (puntosTotales === 5) {
    mensaje = "Te ha entrado el canguelo eh?";

  }
  if (puntosTotales === 6 || puntosTotales===7) {
    mensaje = "Casi casi...";
  }
  if (puntosTotales === numeroGanador) {
    mensaje = "¡ Lo has clavado! ¡Enhorabuena!";
  }

  return mensaje;
};
//funcionalidad de plantarse
const plantarse = () => {
  const pedirCarta = document.querySelector(".pedir-carta");
  if (pedirCarta && pedirCarta instanceof HTMLButtonElement) {
    pedirCarta.disabled = true;
  }
  const valoracion = document.querySelector(".valoracion");
  if (valoracion) {
    valoracion.innerHTML = valorar();
  }
  
};
let botonPlantarse = document.querySelector(".plantarse");
if (botonPlantarse && botonPlantarse instanceof HTMLButtonElement) {
  botonPlantarse.addEventListener("click", plantarse);
}
const resetGame = () => {
  const pedirCarta = document.querySelector(".pedir-carta");
  if (pedirCarta && pedirCarta instanceof HTMLButtonElement) {
    pedirCarta.disabled = false;
  }
  const valoracion = document.querySelector(".valoracion");
  if (valoracion) {
    valoracion.innerHTML = "";
  }
}
