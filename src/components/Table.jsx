import { Square } from "./Square";
const Table = ({update, board}) => {
  return (
    <section className="game">
      {board.map((_, index) => {
        return (
          <Square key={index} index={index} update={update}>
            {board[index]}
          </Square>
        );
      })}
    </section>
  );
};

export default Table;
