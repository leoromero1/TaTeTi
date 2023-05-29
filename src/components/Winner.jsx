import { Square } from "./Square";
export const Winner = ({ winners, resetGame }) => {
  if (winners === null) return null;

  const winersText = winners === false ? "Empate" : "Ganó";
  return (
    <section className="winner">
      <div className="text">
        <h2>{winersText}</h2>
        <header className="win">{winners && <Square>{winners}</Square>}</header>

        <footer>
          <button onClick={resetGame}>Emepezar de nuevo</button>
        </footer>
      </div>
    </section>
  );
};
