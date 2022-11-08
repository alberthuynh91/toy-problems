// Given a width and a height, print out numbers to the console in a spiral fashion to the console.
//
// Examples
// input: 2, 3
// output: [
//  [1, 2],
//  [6, 3],
//  [5, 4]
// ]

// input: 3, 2
// output: [
//  [1, 2, 3],
//  [6, 5, 4],
// ]

// input: 3, 3
// output: [
//  [1, 2, 3],
//  [8, 9, 4],
//  [7, 6, 5],
// ]

// input: 4, 3
// output: [
//  [1,  2,  3,  4],
//  [10, 11, 12, 5],
//  [9,  8,  7,  6],
// ]

const spiral = (width, height) => {
  let sum = 1
  let left = 0
  let top = 0
  let right = width - 1
  let bottom = height - 1

  // Create the 2d array
  let arr = new Array(height)
  for (var q = 0; q < height; q++) {
    arr[q] = new Array(width)
  }
  
  while (left <= right && top <= bottom) {
  console.log(`top of while loop`, left, right, top, bottom)
    // top row
    for (var i = left; i <= right; i++) {
      arr[top][i] = sum++
    }
  top++
    
  // right col
  for (var j = top; j <= bottom; j++) {
        arr[j][right] = sum++
    }
  right--

  // bottom row
  for (var k = right; k >= left; k--) {
    arr[bottom][k] = sum++
  }
    bottom--
    
  // left col
  for (var u = bottom; u >= top; u--) {
    arr[u][left] = sum++
  }
    left++
  } 
  
  return arr
}

console.log(spiral(3, 3))
