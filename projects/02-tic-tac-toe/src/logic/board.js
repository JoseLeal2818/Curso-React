import { WINNER_COMBOS } from "../enums";

// Observar a cada momento posible ganador
export const onCheckWinner = (boardToCheck) => {
  // Recorro las posibles combos para ver un ganador
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  // Si no hay ganador regreso eso
  return null;
};

// Si no hay ganador, poner como empate
export const onCheckEndGame = (newBoard) => {
  // Revisar si hay empate y que no haya espacios vacios
  return newBoard.every((square) => square != null);
};

