import { useState } from "react";
import "./App.css";
import confetti from "canvas-confetti";
import { Square } from "./components/Square";
import { TURNS } from "./enums";
import { onCheckWinner, onCheckEndGame } from "./logic/board";
import { WinnerModal } from "./components/WinnerModal";

function App() {
  // ESTADOS DEL JUEGO
  // Un estado se volvera a renderizar vez que lo manipulamos
  // Los estados son asincronos

  // Poner el estado de la tabla
  const [board, setBoard] = useState(Array(9).fill(null));
  // Poner el turno
  const [turn, setTurn] = useState(TURNS.X);
  // Poner un ganador
  const [winner, setWinner] = useState(null);

  // Actualizar el estado
  const updateBoard = (index) => {
    // Si el indice ya tiene un valor, no haga nada
    if (board[index] || winner) return;

    // Esta mal modificar el array o el estado original en este caso board
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    // Cambiar de turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    // Revisar si hay un ganador
    const newWinner = onCheckWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (onCheckEndGame(newBoard)) {
      setWinner(false);
    }
  };

  // Reiniciar el juego y poner todo como originalmente estaba
  const onResetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  };

  // RESULTADO FINAL (HTML)
  return (
    <main className="board">
      <h1>JUEGO DEL GATO</h1>
      <button onClick={onResetGame}>Reiniciar el juego</button>
      <section className="game">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={onResetGame} />
    </main>
  );
}

export default App;
