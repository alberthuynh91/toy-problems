var isPalindrome = function(x) {
  const split = x.toString().split("")
  if (split[0] === '-') {
      return false
  }
  while (split.length > 1) {
      const front = split.shift()
      const rear = split.pop()
      if (front !== rear) {
          return false
      }
  }
  return true
};
