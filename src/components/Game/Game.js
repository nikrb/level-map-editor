
export default function Game( init) {
  const clear = () => {
    return Array(rows).fill(0).map( row => Array(cols).fill(0))
  };
  const clearBoard = () => {
    cells = clear();
  };
  const setCell = (row, col, alive) => {
    cells[row][col] = alive;
  };
  const getBoard = () => {
    return cells;
  };
  const setBorder = () => {
    cells.forEach( (row, ndx, arr) => {
      if( ndx === 0 || ndx === arr.length-1){
        row.forEach( (cell, col) => { cells[ndx][col] = 1;});
      } else {
        cells[ndx][0] = 1;
        cells[ndx][arr[0].length-1] = 1;
      }
    });
  };

  // private init
  const that = {};
  const { cols, rows} = init;
  let cells = clear();
  if( init.cells){
    init.cells.forEach( (cell) => {
      setCell( cell[0], cell[1], 1);
    });
  }

  // public exports
  that.clear = clearBoard;
  that.getBoard = getBoard;
  that.setCell = setCell;
  that.setBorder = setBorder;
  return that;
}
