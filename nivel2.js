import { restartGame } from "./main.js";
import { startingLevelThree } from "./nivel2.js";



function Levelone() {
  var opciones = ["1. Ir por unas chelas", "2. Decirles que busca al Lobo", "3. Ir para la fiesta del pueblo"];
  var respuesta = prompt("¿Qué debería hacer el Gato con Botas al encontrarse con sus amigo?\n\n");
  respuesta = respuesta.toLowerCase();

  if (respuesta === "2") {
    alert("¡Esa es ... muy bien!");
    startingLevelThree();
  } else {
    alert("Respuesta incorrecta.");
    restartGame();
  }
}

export function startingLevelOne() {
  IniciarJuego();
}