var reverse = function(x) {
    const reversed = []
    const split = x.toString().split("")
    if (split[0] === '-') {
      reversed.push(split.shift())
    }
    for (var i = 0; i < x.toString().length; i++) {
      reversed.push(split.pop())
    }
    const ans = parseInt(reversed.join(""))
    if (ans > Math.pow(2, 31) || ans < Math.pow(2,31)*-1) {
        return 0
    }
    return ans
};