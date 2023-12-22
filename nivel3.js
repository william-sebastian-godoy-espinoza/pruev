import { restartGame } from "./main.js";
import { startingLevelTwo } from "./nivel2.js";


function Levelone() {
  var opciones = ["1. Despedirse de ellos", "2. Ir a buscar al Lobo", "3. Ir a buscar al Lobo"];
  var respuesta = prompt("¿Qué debería hacer el Gato con Botas después de decirles que busca al lobo ?\n\n");
  respuesta = respuesta.toLowerCase();

  if (respuesta === "3") {
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