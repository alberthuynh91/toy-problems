// Write a function `print2d` that accepts a two-dimensional array as an argument. The function
// should print all inner elements of the array.
// Difficulty: Easy

const print2d = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j])
    }
  }
}

let array1 = [
  ["a", "b" , "c", "d" ],
  ["e", "f"],
  ["g", "h", "i"]
]
console.log(print2d(array1))
// should print
// a
// b
// c
// d
// e
// f
// g
// h
// i

let array2 = [ [9, 3, 4], [11], [42, 100]]
console.log(print2d(array2))
//should print
// 9
// 3
// 4
// 11
// 42
// 100
