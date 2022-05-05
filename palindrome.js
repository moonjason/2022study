// https://leetcode.com/problems/palindrome-number/

var isPalindrome = function(num) {
    let string = num.toString();
    let reverse = ''
    for ( let i = string.length - 1; i > -1;i--) {
        reverse = reverse.concat(string[i])
    }
    if(reverse === string) return true
    else return false
};

console.log(isPalindrome(121))