
// Prompt
// Imagine we have an image. We'll represent this image as a simple 2D array where every pixel is a 1 or a 0.

// The image you get is known to have potentially many distinct rectangles of 0s on a background of 1's. 
// Write a function that takes in the image and returns the coordinates of all the 0 rectangles -- top-left and bottom-right; or top-left, width and height.

// solution: https://observablehq.com/@victormutai/find-rectangles-in-a-2d-grid


function isStart(indices, image) {
  let row = indices[0]
  let col = indices[1]

  if (image[row][col] !== 0) {
    return false
  }
  // check if above is a 0
  if ((-1 < row - 1 < image.length) && !!image[row - 1] && image[row - 1][col] === 0) {
    return false
  }
  // check if left is a 0
  if ((-1 < col - 1 < image[0].length) && image[row][col - 1] === 0) {
    return false
  }
  return true
}

function findCurrentEnd(indices, image) {
  let startRow = indices[0]
  let startCol = indices[1]
  let endRow = startRow
  let endCol = startCol
  while (image[endRow][endCol] === 0) {
    endCol++
  }
  while (!!image[endRow] && image[endRow][startCol] === 0) {
    endRow++
  }
  console.log(`what is endRow, endCol: `, endRow, endCol)
  return [endRow - 1, endCol - 1]
}

function findRectangles(image) {
  let arrayOfStartsAndEnds = []
  for (let row = 0; row < image.length; row++) {
    for (let col = 0; col < image[0].length; col++) {
      if (isStart([row, col], image)) {
        let currentStart = [row, col]
        let currentEnd = findCurrentEnd(currentStart, image)
        arrayOfStartsAndEnds.push([currentStart, currentEnd])
      }
    }
  }
  return arrayOfStartsAndEnds
}

// const image = [
//   [0, 1, 1, 1, 1],
//   [1, 1, 0, 0, 1],
//   [1, 1, 0, 0, 1],
//   [1, 1, 0, 0, 1],
//   [1, 1, 1, 1, 1],
// ];

// const image = [
//   [0, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1],
//   [0, 1, 1, 0, 0, 0, 1],
//   [1, 0, 1, 0, 0, 0, 1],
//   [1, 0, 1, 1, 1, 1, 1],
//   [1, 0, 1, 0, 0, 1, 1],
//   [1, 1, 1, 0, 0, 1, 1],
//   [1, 1, 1, 1, 1, 1, 0],
// ];

// const image = [
//   [0],
// ]

const image = [
  [1],
];


console.log(findRectangles(image))
