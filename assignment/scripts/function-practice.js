console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName() {
  return 'Hello, Your Name!';
}
// Remember to call the function to test
console.log('Test - should say "Hello, Your Name!"', helloName());

// 3. Function to add two numbers together & return the result
function addNumbers( num0 , num1 ) {
  let answer = num0 + num1;
  return answer;
  // return firstNumber + secondNumber;
}
console.log('Adding two numbers:', addNumbers( 12, 15 ) );

// 4. Function to multiply three numbers & return the result
function multiplyThree( num0 , num1 , num2) {
  let answer = num0 * num1 * num2;
  return answer;
}
console.log('Multiplying 3 nymbers:', multiplyThree( 6, 3, 5));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}
console.log(isPositive(10));
console.log(isPositive(-4));
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  if (Array.isArray(array) && array.length > 0) {
    return array[array.length - 1];
  } else {
    return undefined;
  }
}
console.log('Last item in array:', getLast());

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
const myArray = [1, 2, 3, 4, 5];
const valueToFind = 3;
console.log(find(valueToFind, myArray));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (string.length > 0) {
    return string.charAt(0) === letter;
  }
  return false;
}
console.log(isFirstLetter("N", "Name"));
console.log(isFirstLetter("W", "Josh"));
console.log(isFirstLetter("A", "Dog"));
console.log(isFirstLetter("X", ""));

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
  // TODO: loop to add items

  // TODO: return the sum
}
const numbers = [1, 2, 3, 4, 5];
const result = sumAll(numbers);
console.log(result);

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(inputArray) {
  const positiveArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] > 0) {
      positiveArray.push(inputArray[i]);
    }
  }
  return positiveArray;
}
const originalArray = [1, -2, 3, -4, 5];
const resultArray = allPositive(originalArray);
console.log(resultArray);

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
