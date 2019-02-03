var climbStairs = function(n) {
  var storage = {0: 1, 1: 1}
  if (storage[n] !== undefined) return 1
  for (var i = 2; i <= n; i++) {
    storage[i] = storage[i-1] + storage[i-2]
  }
  return storage[n]
};


climbStairs(6)