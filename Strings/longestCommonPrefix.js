/* 

https://leetcode.com/problems/longest-common-prefix/

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 
Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.


*/

/**
 * @param {string[]} strs
 * @return {string}
 */


// My Solution vv 
var longestCommonPrefixJason = function(strs) {
    // sort the array by length of string - so the longest possible prefix can be found 
    if (strs.length === 1) return strs[0]

    strs.sort((a,b) => b.length - a.length) // Largest to smallest / Descending 

    const longest = strs[0]; 
    let result = ""
    for ( let i = 0; i < longest.length; i++ ){
        
        let j = 1
        while( j < strs.length) { 
            if( strs[j][i] !== longest[i] ) return result
            else if ( j === strs.length - 1 ) result = result.concat(longest[i])
            j++ 
        }

    }
    return result
};

// Clever/Optimal  https://leetcode.com/problems/longest-common-prefix/discuss/400094/JavaScript-Solution-97.72-faster-Short-Sweet-and-Easy-to-understand
var longestCommonPrefix = function(strs) {
    
    if(strs.length == 0) {
        return "";
    }
    
    let str = strs[0]; // Choose a string to compare rest to  - Call this Chosen String
    
    for (const word of strs) {
        while (word.indexOf(str) != 0) {  // Keep shrinking until the Chosen string (str) has a match for the rest of the words in array
            str = str.substring(0, str.length - 1);  // remove one character from the end of Chosen String
            if (str === "")
                break;
        }
    }
    return str;
};

console.log(longestCommonPrefix(["flower","flow","flight"]))
// console.log(longestCommonPrefix(["dog","racecar","car"]))
// console.log(longestCommonPrefix(["a"]))
// console.log(longestCommonPrefix(["flower","flower","flower","flower"]))