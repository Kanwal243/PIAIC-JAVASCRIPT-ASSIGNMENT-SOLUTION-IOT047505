// Java-script assignments chapter 35 to 38

// 1 - input value from user in String var inputValue="cloUd naTive computinG"
// 2 - Convert every first letter of the content in Capitalize case. inputValue="Cloud Native Computing" use Function
// 3 - print value in console.log() console.log(inputValue) | check result in browser console
// Second Assignment
// 1 - User input value in Number through prompt Example value=5
// 2 - Factorialize a Number use Function
// 3 - print value in console.log()  console.log(value); the result is 120
// Understand this logic
// var value= multiply(4,3,6);

// console.log("value", value); // The result is ?

// function add(a, b){ var z= a+b; return z; };

// function multiply(a, b, c){ var z= a* add(b, c); return z; };

// console.log("course", course); // The result is ? console.log("z", z); // The result is ?

// var course="cloud native computing";


// Assignment 1

// Get input value from user in a String
var inputValue = "cloUd naTive computinG";

// Convert every first letter of the content in Capitalize case
function capitalize(inputString) {
  var words = inputString.split(" ");
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }
  return words.join(" ");
}

inputValue = capitalize(inputValue);

// Print value in console.log()
console.log(inputValue);

// Assignment 2

// User input value in Number through prompt
var value = parseInt(prompt("Enter a number"));

// Factorialize a Number
function factorialize(num) {
  if (num < 0) {
    return -1;
  } else if (num == 0) {
    return 1;
  } else {
    return (num * factorialize(num - 1));
  }
}

value = factorialize(value);

// Print value in console.log()
console.log(value);

// Logic explanation

var course = "cloud native computing";

function add(a, b){
  var z= a+b;
  return z;
};

function multiply(a, b, c){
  var z= a * add(b, c);
  return z;
};

var value= multiply(4,3,6);

console.log("value", value); // The result is 84

console.log("course", course); // The result is "cloud native computing"

console.log("z", z); // The result is Uncaught ReferenceError: z is not defined

// In the first assignment, we get an input value from the user in the form of a string and then convert every first letter of the content in capitalize case using a function called `capitalize()`. We split the input string into an array of words, capitalize the first letter of each word, convert the rest of the word to lowercase, and then join the array back into a string.

// In the second assignment, we get a number from the user through a prompt and then calculate the factorial of the number using a function called `factorialize()`. We use recursion to calculate the factorial of the number.

// In the logic explanation, we have three functions called `add()`, `multiply()`, and `factorialize()`. We also have two variables called `course` and `value`. We call the `multiply()` function with the arguments 4, 3, and 6, which returns the value 72. We then assign this value to the `value` variable. When we log the `value` variable to the console, we get the value 84 because we're multiplying 4 by the result of the `add()` function, which returns 9. When we log the `course` variable to the console, we get the string "cloud native computing". Finally, when we log the `z` variable to the console, we get an error message because `z` is not defined in the global scope. It is only defined inside the `multiply()` function.
