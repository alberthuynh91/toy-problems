function getBoxNum(row, col) {
  const gridRow = Math.floor(row/3)
  const gridCol = Math.floor(col/3)
  return gridRow * 3 + gridCol
}

var isValidSudoku = function(board) {
  var boxStorage = [{}, {}, {}, {}, {}, {}, {}, {}, {}]
  for (var row = 0; row < 9; row++) {
      var rowStorage = {}
      var colStorage = {}
      for (var col = 0; col < 9; col++) {
          const currentSpace = board[row][col]
          const rowSpace = board[row][col]
          const colSpace = board[col][row]
          
           if (rowSpace !== '.' ) {
              if (rowStorage[rowSpace] !== undefined) {
                  return false
              }
              rowStorage[rowSpace] = rowSpace
          }
          
          if (colSpace !== '.') {
               if (colStorage[colSpace] !== undefined) {
                  return false
              }
              colStorage[colSpace] = colSpace  
          }
          
          if (currentSpace !== '.') {
            const boxNum = getBoxNum(row, col)
            if (boxStorage[boxNum][currentSpace] !== undefined) {
                return false
            }
            boxStorage[boxNum][currentSpace] = currentSpace
          }
      }
  }
  return true
};

const board = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]


isValidSudoku(board)