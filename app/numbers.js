// Write a function that uses the addition operator to add two numbers together
function add(x, y) {
  let sum = x + y;
  return sum;
}

// Write a function that returns the Cubed value of x
function cubed(x) {
  let sum = Math.pow(x, 3);
  // This doesn't work => let cube = x ^ 3;
  return sum;
}

// Write a function that will divide two numbers, and will format the returned value
// as a whole number. (No Decimals)
function divideWholey(x, y) {
  let sum = x / y;
  sum = Math.floor(sum);
  console.log(sum);
  return sum;
}

// Write a function that takes in a number and determines if it is even. 
// It should return a boolean value - true if it is even, false if it is odd.
function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}


// Given 2 numbers, generate a random number within that range. 
// Make it inclusive so that the starting and ending numbers are part 
// of the range.HINT ** Utilize Javascript's Math Class (To the Google!)
function numberGenerator(num1, num2) {
  console.log(num1, num2)
  let maxNum = Math.max(num1, num2);
  let minNum = Math.min(num1, num2);
  return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
}