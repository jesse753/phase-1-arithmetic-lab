let num1=1;
let num2=62;
const multiply = (num1,num2) => {
	// If the multiplicaton of num1*num2 is 62, return true
	if (num1*num2 === 62) {
		return num1*num2;
	}
	// If the multiplicaton of num1*num2 is not 62, return false
	return false;
}
// Test the multiplication is 62
multiply(1,62);
//=>


// Returns a random number:
let random=1;Math.random(); 

let num3;
let num4;
const remainder = (num3,num4) => {
	// If the remainder of num3%num4 is 4, return true
	if (num3%num4 === 4) {
		return num3%num4;
	}
	// If the remainder of num3%num4 isnot 4, return false
	return false;
}
// Test the remainder is 4
remainder(20,8);
//=> 4

let max=20; Math.max(1,5,10,15,20);
// Write your code here