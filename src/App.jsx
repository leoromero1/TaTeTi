import { useState } from "react";
import { Square } from "./components/Square";
import confetti from "canvas-confetti";
import { checkWinner, TURN, checkEndGame } from "./utils/index";
import { Winner } from "./components/Winner";
import Table from "./components/Table";
import { saveGameStorage, resetGameStorage } from "./utils/storage";

function App() {
  const [board, setBoard] = useState(() => {
    const boardStorage = window.localStorage.getItem("board");
    if (boardStorage) return JSON.parse(boardStorage);
    return Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const turnStorage = window.localStorage.getItem("turn");
    return turnStorage ?? TURN.X;
  });

  const [winners, setWinners] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURN.X);
    setWinners(null);

    resetGameStorage();
  };

  const update = (index) => {
    if (board[index] || winners) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURN.X ? TURN.O : TURN.X;
    setTurn(newTurn);

    saveGameStorage({ board: newBoard, turn: newTurn });

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti({
        particleCount: 1500,
        startVelocity: 50,
        spread: 360,
      });
      setWinners(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinners(false);
    }
  };
  return (
    <main className="board">
      <h1>Ta-Te-Ti</h1>
      <button onClick={resetGame}>Emepezar de nuevo</button>
      <Table update={update} board={board} />
      <section className="turn">
        <Square isSelected={turn === TURN.X}>{TURN.X}</Square>
        <Square isSelected={turn === TURN.O}>{TURN.O}</Square>
      </section>

      <Winner winners={winners} resetGame={resetGame} />
    </main>
  );
}

export default App;
