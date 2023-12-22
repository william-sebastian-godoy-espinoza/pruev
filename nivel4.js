import { restartGame } from "./main.js";
import { startingLevelTwo } from "./nivel2.js";



function Levelone() {
  var opciones = ["1. Ir a la montaña", "2. No ir a la montaña", "3. Buscar un guerrero"];
  var respuesta = prompt("¿Que deberia hacer el Gato con Botas  para atrapar al Lobo?\n\n");
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