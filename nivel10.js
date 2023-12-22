import { restartGame } from "./main.js";
import { startingLevelTwo } from "./nivel2.js";



function Levelone() {
  var opciones = ["1.Prepararse para la proxima pelea", "2. Dedicarse a tomar", "3.Ir a la ciudad"];
  var respuesta = prompt("¿Que hacer  despues de las vielas?\n\n");
  respuesta = respuesta.toLowerCase();

  if (respuesta === "3") {
    alert("¡Esa es ... muy bien!");
    startingLevelTwo();
  } else {
    alert("Respuesta incorrecta");
    restartGame();
  }
}

export function startingLevelOne() {
  IniciarJuego();
}