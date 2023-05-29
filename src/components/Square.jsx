export const Square = ({ children, update, index, isSelected }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handeClick = () => {
    update(index);
  };

  return (
    <div onClick={handeClick} className={className}>
      {children}
    </div>
  );
};
