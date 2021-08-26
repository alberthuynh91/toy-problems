// https://leetcode.com/problems/maximum-subarray/submissions/

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// A subarray is a contiguous part of an array.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Example 2:
// Input: nums = [1]
// Output: 1

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23

var maxSubArray = function(nums) {
    let currentSum = -Number.MAX_VALUE
    let max = nums[0]

    for (let i = 0; i < nums.length; i++) {
        if (currentSum < 0) {
            // Reset currentSum to 0 to restart sum. If a value is negative we know that we need to "shift" the window to the current number
            currentSum = 0
        }
        currentSum += nums[i]
        max = Math.max(max, currentSum)
        
    }
    return max
};
