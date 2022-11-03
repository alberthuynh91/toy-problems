var isPalindrome = function(s) {
    const string = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase().split("")
    if (s.length === 0) {
        return true;
    }
    for (var i = 0; i < (string.length-1)/2; i++) {
        if (string[i] !== string[string.length - (i + 1)]) {
            return false
        }
    }
    return true
};


// Recursion solution
const isPalindrome = (s) => {
  // Base-case / stopping condition
  if (s.length === 0 || s.length === 1) {
    return true
  }
  
  // Do some work to shrink the problem space
  if (s[0] === s[s.length - 1]) {
    // If the two outer letters are equal, remove them and check the next outer letters
    const shrunkenString = s.substring(1, s.length - 1)
    return isPalindrome(shrunkenString)
  }
}
