// Write a function `makeMatrix` that accepts three arguments. The function
// should return a 2-dimennsional array of height 'm' and width 'n' that contains
// the 'value' as every element.


const makeMatrix = (m, n, value) => {
  let arr = new Array(m)
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(n).fill(value)
  }
  return arr
}


console.log(makeMatrix(3, 5, null))

console.log(makeMatrix(4, 2, "x"))

console.log(makeMatrix(2, 2, 0))
