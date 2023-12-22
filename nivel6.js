import { restartGame } from "./main.js";
import { startingLevelTwo } from "./nivel2.js";


function Levelone() {
  var opciones = ["1. Correr del Lobo", "2. Peliar con sus amigos conta el Lobo", "3. Ir a buscar a Batman y Superman"];
  var respuesta = prompt("¿Qué debería hacer el Gato con Botas al encontrarse con el Lobo?\n\n");
  respuesta = respuesta.toLowerCase();

  if (respuesta === "2") {
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