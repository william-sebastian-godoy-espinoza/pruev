import { restartGame } from "./main.js";
import { startingLevelTwo } from "./nivel2.js";



function Levelone() {
  var opciones = ["1. Mejor irnos todos a la casa", "2. Ir entre todos", "3. Ir uno por uno"];
  var respuesta = prompt("¿Cuál es la mejor opción para detener al lobo?\n\n");
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