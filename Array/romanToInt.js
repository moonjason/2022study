
// https://leetcode.com/problems/roman-to-integer/
var romanToInt = function(roman) {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    // Loop through each numeral, 
    // if its I check if next is V(4) or X (9)
    // if its X check if next is L (40) or C (90)
    // if its C check if next is D (400) or M (900)   
    
    let result = 0
    let skip = false

    for ( let i = 0; i < roman.length; i++) {
        let numeral = roman[i]
        let nextNum = roman[i + 1]
      
        if (skip){
            skip = false;
            continue; 
        } 
        if (numeral === 'I') {
            if (nextNum === 'V') {
                result += 4
                skip = true
            } else if (nextNum === 'X') {
                result += 9
                skip = true
            } else {
                result += map['I']
            } 
        } else if (numeral === 'X') {
            if (nextNum === 'L') {
                result += 40
                skip = true
            } else if (nextNum === 'C') {
                result += 90
                skip = true
            } else {
                result += map['X']
            } 
        } else if (numeral === 'C') {
            if (nextNum === 'D') {
                result += 400
                skip = true
            } else if (nextNum === 'M') {
                result += 900
                skip = true
            } else {
                result += map['C']
            } 
        } else {
            result += map[numeral]
        }
        
    }
     
    
    return result 
};

// Input: s = "MCMXCIV"


console.log(romanToInt('MCMXCIV'))

// OPTIMAL 


const symbols = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanToInt = function (s) {
  let value = 0;
  for (let i = 0; i < s.length; ) {
    const current = symbols[s[i]];
    const next = symbols[s[i + 1]];
    if (current < next) { // This makes sense because of how Roman Numerals Behave 
      value += next - current;
      i = i + 2;
    } else {
      value += symbols[s[i]];
      i = i + 1;
    }
  }
  return value;
};


