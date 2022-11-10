// Link: https://leetcode.com/problems/valid-parentheses/description/
//
// Prompt: Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    const stack = []

    for (var i = 0; i < s.length; i++) {
        // if an open parens, push onto stack
        if (map[s[i]] === undefined) {
            stack.push(s[i])
        } else {
            // when we find a closed parens, pop an open parents off stack and see if value matches something from our map
            const curr = stack.pop() 
            if (map[s[i]] !== curr) {
                return false
            }
        }
        
    }
    // if stack is empty then we have valid matching parens
    return stack.length === 0
};

