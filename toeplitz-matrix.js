var isToeplitzMatrix = function(matrix) {
  for (var row = 0; row < matrix.length-1; row++) {
      for (var col = 0; col < matrix[0].length-1; col++) {
          const currNum = matrix[row][col]
          const diagonal = matrix[row+1][col+1]
          if (currNum !== diagonal) {
              return false
          }
      }
  }
  return true
};

matrix = [
  [1,2,3,4],
  [5,1,2,3],
  [9,5,1,2]
]

isToeplitzMatrix(matrix)
