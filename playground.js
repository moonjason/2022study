let val1 = 6;
let val2 = 6; 
let carry = 0;
const sum = val1 + val2 + carry;
carry = Math.floor(sum / 10); // same as :  sum > 9 ? 1 : 0 
const digit = sum % 10;

console.log(carry, sum, digit)