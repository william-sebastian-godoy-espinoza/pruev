import { restartGame } from "./main.js";
import { startingLevelTwo } from "./nivel2.js";



function Levelone() {
  var opciones = ["1. Luchar con la Espada u y sus amigos", "2. Usar a sus amigos de carnada", "3. Luchar solo"];
  var respuesta = prompt("¿Qué debería hacer el Gato con Botas para ganar al Lobo?\n\n");
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