/*

https://leetcode.com/problems/longest-repeating-character-replacement/


You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

 
Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
*/


/**
 * @param {string} s
 * @param {number} ks
 * @return {number}
*/

const getMostFreq = (obj) => { 
    let mostFreq = null;
    Object.keys(obj).forEach((letter) => {
        if ( obj[letter] > mostFreq || !mostFreq ) {
            mostFreq = obj[letter]
        }
    })
    return mostFreq
}

// console.log(getMostFreq({ 'A': 2, 'B': 1}))

var characterReplacement = function(s, k) { // "AABABBA", 1
    // Sliding Window Approach 
    // Goal is to replace the character of a substr that is LEAST frequently appearing since we only have 'k' replacements
    // While looping, have to validate if window is legit : Window Length - Most Frequent Chars <= Amount of Replacements 
    // If the Window is not legit, we have to move the window over
    let left = 0;
    let right = 0;
    let maxSubStr = 0;
    let mostFreqCount = 0;
    const map = {};
    

    while ( right < s.length ) { 
        let winLength = right - left + 1;

        if (!map[s[right]]) map[s[right]] = 0
        map[s[right]]++

        mostFreqCount = getMostFreq(map)

        if (winLength - mostFreqCount <= k) { // Validate the Window  => Window Length - Most Frequent Chars is less than or equal to Replacement Amount
            maxSubStr = Math.max(maxSubStr, winLength)
            right++
        } else {
            map[s[left]]--
            map[s[right]]--
            left++
        }

    } 

    return maxSubStr
};

function lengthOfLongestSubstring(s) {
    let seen = new Set();
    let longest = 0;
    let l = 0;
    for (let r = 0; r < s.length; r++) {
      while (seen.has(s[r])) {
        seen.delete(s[l]);
        l++;
      }
      seen.add(s[r]);
      longest = Math.max(longest, r - l + 1);
    }
    return longest;
};

console.log(characterReplacement('AABABBA', 1))


