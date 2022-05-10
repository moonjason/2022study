/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    // Loop through s and store each char in a map 
    // Loop through t and check if each char is in a map 
    // if a different character is found not in map return false 
    const map = {}
    for ( let i = 0; i < s.length; i++ ) {
        map[s[i]] ? map[s[i]]++ : map[s[i]] = 1
    }
    for ( let j = 0; j < t.length; j++ ) {
        if ( !map[t[j]] ) return false
        else map[t[j]]-- 
    }

    return true 
};


console.log(isAnagram('anagram', 'nagaram'))
console.log(isAnagram('rat', 'car'))