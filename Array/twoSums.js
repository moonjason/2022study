/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

https://leetcode.com/problems/two-sum/


Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/

var twoSum = function(nums, target) {
    // loop through the nums array
    // i will be the num to compare with
    // j will be the num to check that would be add up to target 
  
    for (let i = 0; i < nums.length - 1; i++) {
      for ( let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) return [i , j]
      }
    }
  
    return false
  };
  
  // O(n^2) Naive Way 
  
  console.log(twoSum([2,7,11,15], 9))
  console.log(twoSum([3,2,4], 6))
  
  
  // Hash Map Solution 
  function twoSumAlt(nums, target) {
    let maps = new Map();
    for (let i = 0; i < nums.length; i++) {
      let difference = target - nums[i]
      console.log('difference = ', difference, `| ${target} - ${nums[i]}` )
      if (maps.has(difference)) {
        return [maps.get(difference), i]
      }
      maps.set(nums[i], i)
      console.log(`storing...${nums[i]}:${i}`) // Storing the Index based on the Number Required to get Target
    }
    return []
  }
  // You're checking for the difference - so that you know the value that you need to add to reach 'target'
  // You check your hash table if there is a difference aka past value that would add up to your current value
  // If your hash table has it, then you return the key value pairing of number/index along with the current index
  // If not you store the current value in the hash table 
  
  console.log(twoSumAlt([2,7,11,15], 9))
  console.log(twoSumAlt([3,2,4], 6))
  