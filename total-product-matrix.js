// Write a function 'totalProduct(array)' that accepts a 2D array of numbers. The function
// should return the total product of all numbers in the array

const totalProduct = (arr) => {
  let total = 1
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      total = total * arr[i][j]
    }
  }
  return total
}

let array1 = [
  [3, 5, 2],
  [6, 2],
];

console.log(totalProduct(array1))

let array2 = [
  [4, 6],
  [2, 3],
  [1, 2],
]

console.log(totalProduct(array2))
