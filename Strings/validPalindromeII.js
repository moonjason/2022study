/*

https://leetcode.com/problems/valid-palindrome-ii/


Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 

Example 1:

Input: s = "aba"
Output: true
Example 2:

Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.
Example 3:

Input: s = "abc"
Output: false

*/ 
/**
 * @param {string} s
 * @param {number} p1
 * @param {number} p2
 * @return {boolean}
 */
 const isTruePalindrome = function(s, p1, p2) {
    while (p1 < p2) {
      if (s[p1] !== s[p2]) return false;
      p1++;
      p2--;
    }
    
    return true;
  }
  
  /**
   * @param {string} s
   * @return {boolean}
   */
  const validPalindrome = function(s) {  // 'cbbcc'
    let p1 = 0;
    let p2 = s.length - 1;
    
    while (p1 < p2) {
      if (s[p1] !== s[p2]) return isTruePalindrome(s, p1 + 1, p2) || isTruePalindrome(s, p1, p2 - 1); 
      // If we get a mismatch^ we try to continue the loop by seeing if we can skip the left letter or right letter 
      // If string was already palindrome this check wouldn't happen ^ 
      p1++;
      p2--;
    } 
    
    return true;
  }


