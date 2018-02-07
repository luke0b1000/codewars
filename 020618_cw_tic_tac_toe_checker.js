function isSolved(board) {

  function isWinner(bo,le) {
  if ( 
  (bo[0][0] === le && bo[0][1] === le && bo[0][2] === le) ||
  (bo[1][0] === le && bo[1][1] === le && bo[1][2] === le) ||
  (bo[2][0] === le && bo[2][1] === le && bo[2][2] === le) ||
  (bo[0][0] === le && bo[1][0] === le && bo[2][0] === le) ||
  (bo[0][1] === le && bo[1][1] === le && bo[2][1] === le) ||
  (bo[0][2] === le && bo[1][2] === le && bo[2][2] === le) ||
  (bo[0][0] === le && bo[1][1] === le && bo[2][2] === le) ||
  (bo[0][2] === le && bo[1][1] === le && bo[2][0] === le)) {
    return true;
  } else { return false; }
  } 
  // if empty == true;
  function emptyspots(bo) {
    var empty = false;
    bo.forEach( arr1 => {
      arr1.forEach( arr2 => {
        if (arr2 === 0) { empty = true; }
      })
    })
    return empty;
  }
   
   
   if (isWinner(board,1)) return 1;
   else if (isWinner(board, 2)) return 2;
   else if (emptyspots(board)) return -1;
   else return 0;
}
