import { restartGame } from "./main.js";
import { startingLevelTwo } from "./nivel2.js";


function Levelone() {
  var opciones = ["1. Ir por unas vielas", "2. Ir a la casa", "3. Ir a dormir"];
  var respuesta = prompt("¿Que hacer despues de la victoria?\n\n");
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