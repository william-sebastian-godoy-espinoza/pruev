import { restartGame } from "./main.js";
import { startingLevelTwo } from "./nivel2.js";



function Levelone() {
  var opciones = ["1. Buscar un camino alternativo", "2. Volver a casa", "3. Reparar el puente"];
  var respuesta = prompt("¿Qué debería hacer el Gato con Botas  con sus amigos al encontrarse con un puente roto?\n\n");
  respuesta = respuesta.toLowerCase();

  if (respuesta === "1") {
    alert("¡Esa es ... muy bien!");
    startingLevelTwo();
  } else {
    alert("Respuesta incorrecta.");
    restartGame();
  }
}

export function startingLevelOne() {
  IniciarJuego();
}