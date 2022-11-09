// Link: https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/description/

// Prompt:
// A string is good if there are no repeated characters.

// Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.

// Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

// A substring is a contiguous sequence of characters in a string.


// Iterative solution 
/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let output = 0
    for (var i = 0; i < s.length - 2; i++) {
        const set = new Set()
        for (var j = i; j <= i+2; j++) {
            set.add(s[j])
        }
        if (set.size === 3) {
            output++
        }
    }
    return output
};

// Sliding window solution
var countGoodSubstrings = function(s) {
    let begin = 0;
    let end = 0;
    let output = 0
    const set = {}
    // while end of window has not reached end of string
    while (end < s.length) {
      
        // while window is less than size 3
        while (end - begin < 3) {
            const current = s[end]
            if (set[current] === undefined) {
                set[current] = 1
                if (Object.keys(set).length === 3) {
                    output++
                }
            } else {
                set[current] = set[current] + 1
            }
            end++
            
        }

        // while window is larger than size 3
        while (end - begin > 2) {
            const current = s[begin]
            if (set[current] !== undefined) {
                set[current] = set[current] - 1
                if (set[current] === 0) {
                    delete set[current]
                }
            } 
            begin++
        }        
    }
    return output
};
