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
