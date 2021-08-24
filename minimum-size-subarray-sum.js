// https://leetcode.com/problems/minimum-size-subarray-sum/

// Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. 
// If there is no such subarray, return 0 instead.

// Example 1
// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.

// Example 2
// Input: target = 4, nums = [1,4,4]
// Output: 1

// Example 3
// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0

var minSubArrayLen = function(target, nums) {
  // uses sliding window technique
  var leftPtr = 0
  var sum = 0
  var output = Infinity
  for (let rightPtr = 0; rightPtr < nums.length; rightPtr++) {
    // add current number to the total sum
    sum += nums[rightPtr]
    
    // if sum is over the target, move the left pointer
    while (sum >= target) {
      // save the minimal length of the contiguous subarray currently found
      output = Math.min(output, rightPtr - leftPtr + 1)
      // subtract the left most number (at the current left pointer) and increment left pointer (sliding the window)
      sum -= nums[leftPtr++]
    }
  }
  return output === Infinity ? 0 : output
};
