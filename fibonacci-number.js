/**
 * @param {number} N
 * @return {number}
 */
// The Fibonacci Sequence is the series of numbers:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

// The next number is found by adding up the two numbers before it

var fib = function(n) {
    if (n == 1 || n == 0) {
        return n
    }

    return fib(n - 1) + fib(n - 2)
};

fib(6)


// https://leetcode.com/problems/fibonacci-number/submissions/
