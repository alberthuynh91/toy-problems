var transpose = function(A) {
  const transposed = A[0].map(() => [])
  for (var row = 0; row < A.length; row++) {
      for (var col = 0; col < A[0].length; col++) {
          transposed[col].push(A[row][col])
      }
  }
  return transposed
};

transpose([[1,2,3],[4,5,6],[7,8,9]])

// Updated solution 11/8/22

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

var transpose = function(matrix) {
    const transposedArr = matrix[0].map(() => [])
    for (var i = 0; i < matrix.length; i++) { // rows
        for (var j = 0; j < matrix[i].length; j++) { // cols
            transposedArr[j][i] = matrix[i][j]
        }
    }
    return transposedArr
};


// Another way to create empty 2d array 
// let transposedArr = Array.from({ length: matrix[0].length}, () => new Array(matrix.length).fill(0))

// Hint: The indices are flipped when transposing
