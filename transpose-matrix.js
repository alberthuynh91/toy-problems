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