/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  const F = {0: 0, 1: 1}
  if (F[N] !== undefined) {
      return F[N]
  }
  for (var i = 2; i <= N; i++) {
      F[i] = F[i-1] + F[i-2]
  }
  return F[N]
};

fib(6)
