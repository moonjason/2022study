/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

Example 2:

Input: nums = []
Output: []


Example 3:

Input: nums = [0]
Output: []
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// BRUTE FORCE (O n^3)
var threeSumBrute  = function(nums) { // [-1,0,1,2,-1,-4]
    nums.sort((a,b) => a - b); // [-4,-1, -1, 0, 1 ,2]  
    // We sort this so we can easily see if we have duplicates 
    const results = [];
    for (let i = 0; i < nums.length; i++ ) {

        if (i > 0 && nums[i] == nums[i - 1]) continue; // if value is same as previous ( a duplicate ), skip 

        for ( let j = i + 1; j < nums.length; j++) {

            if (j > i + 1 && nums[j] == nums[j - 1]) continue; 

            for ( let k = j + 1; k < nums.length; k++ ) {

                if (k > j + 1 && nums[k] == nums[k - 1]) continue; 

                if (nums[i] + nums[j] + nums[k] == 0) {
                    results.push([nums[i], nums[j], nums[k]])
                }

            }
        }
    }

 
    return results;
};


/*

sum = nums[left] + nums[right]

Case 1: sum > target
eliminate last element
right = right - 1

Case 2: sum < target
eliminate first element
left = left + 1

Case 3: sum == target 
 -> Found a solution 
*/

// TWO POINT & SORT Solution 
const threeSum = (nums) => { // [-1,0,1,2,-1,-4]
    // 3 nums need to equal 0 nums[i] + nums[j] + nums[k] === 0 
    // nums[j] + nums[k] === 0 - nums[i]
    nums.sort((a, b) => a - b); // [-4,-1, -1, 0, 1 ,2]  // Sort because it's easier to find duplicates 
    const results = [];
    for ( let i = 0 ; i < nums.length; i++ ) { 
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Check if duplicate 
        const target = 0 - nums[i]; 
        let left = i + 1;
        let right = nums.length - 1; 
        while( right > left ) { 
            const sum = nums[left] + nums[right];
            if ( sum > target ) { 
                right--
            } else if ( sum < target ) {
                left++
            } else { 
                results.push([nums[i], nums[left], nums[right]])
                while(nums[left] === nums[left + 1]) left++  // check if duplicate
                while(nums[right] === nums[right - 1]) right-- // check it duplicate 
                left++;
                right--; // we 'eliminate' both sides because those pairs have to be unique in combination with the fixed number, it is possible to come across those again with the fixed number (i) is moved over 
             }
        }
        
    }

    return results 
}


console.log(threeSum([-1,0,1,2,-1,-4]))