export const saveGameStorage = ({board, turn}) => {
  window.localStorage.setItem('board', JSON.stringify(board));
  window.localStorage.setItem('turn', turn);
}

export const resetGameStorage = ({board, turn}) =>{

  window.localStorage.removeItems('board');
  window.localStorage.removeItems('turn');
}