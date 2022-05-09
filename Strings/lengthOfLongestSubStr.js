/* 

https://leetcode.com/problems/longest-substring-without-repeating-characters/
Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.


Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/ 


/**
 * @param {string} s
 * @return {number}
 */

// BRUTE FORCE O(n^2)

const isUnique = (s) => {
    const set = new Set()
    for (let i = 0; i < s.length; i++) {
        if (set.has(s[i])) {
            return false
        }
        set.add(s[i])        
    }
    return true 
}

var lengthOfLongestSubstringBrute = function(s) {
    let max = 0
    for ( let i = 0; i < s.length; i++) { // Beginning 
        for ( let j = i; j < s.length; j++) { // End 
            const substring = s.substring(i , j + 1)
            if (isUnique(substring)) {
                if(substring.length > max) max = substring.length // max = Math.max(max, substring.length) --- Other way to write it
            }
        }
    }
    return max
};


// OPTIMAL - SLIDING WINDOW 

var lengthOfLongestSubstring = function(s) { // s = 'ab0c0ed'
    let max = 0
    let begin = 0 // beginning index
    let map = {}

    for (let end = 0; end < s.length; end++) {
        if ( map[s[end]] !== undefined && map[s[end]] >= begin) { // if we've seen character before and we're sure that it came AFTER the first time 
            begin = map[s[end]] + 1 // s[end] => '0' begin = 2 + 1  = 3
        }
        map[s[end]] = end // { a : 0, b: 1, 0: 2, c:3 } when it hits the 2nd 0, it writes over 
        max = Math.max(max, end - begin + 1)  // s[end] = 'c'  => 0 = Math.max(0, 3 - 0 + 1 )
    }
    return max
}




// console.log(lengthOfLongestSubstring("abcabcbb"))
// console.log(lengthOfLongestSubstring("bbb"))
// console.log(lengthOfLongestSubstring("pwwkew"))
// console.log(lengthOfLongestSubstring("aab"))
console.log(lengthOfLongestSubstringBrute("dvdf"))
console.log(lengthOfLongestSubstringBrute("ab0c0ed"))


// lengthOfLongestSubstring("aab")
