import { restartGame } from "./main.js";
import { startingLevelTwo } from "./nivel2.js";

function IniciarJuego() {
  alert("El Gato con Botas");
  Nivel1();
}

function Levelone() {
  var opciones = ["1. Ver Netflix", "2. Ir al bosque a buscarlos", "3. Dormir"];
  var respuesta = prompt("¿Qué debería hacer el Gato con Botas para encontrar sus amigos?\n\n");
  respuesta = respuesta.toLowerCase();

  if (respuesta === "2") {
    alert("¡Esa es ... muy bien!");
    startingLevelTwo();
  } else {
    alert("Respuesta incorrecta..");
    restartGame();
  }
}

export function startingLevelOne() {
  IniciarJuego();
}
