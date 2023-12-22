import { restartGame } from "./nivel1";

export function startingLevelOne() {
  IniciarJuego();
}

function restartGame() {
  if (confirm("¿Deseas reiniciar el juego?")) {
    IniciarJuego();
  }
}
