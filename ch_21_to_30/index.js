// Java-script assignments chapter 21 to 30

// 1 - Take a input from user in number with decimal point  user input is 3.4
// 2 - Convert it into greater number Example: Math.ceil(3.4); to 4
// 3 - Declear a variable of string and assign some text var text="This is my dummy text"
// 4 - Slice the text into a new variable from 0 to the rounded number 0 to 4;  Example: text.slice(0, 4) | sliceText = This
// 5 - Use for loop and concatination to reverse the sliced string; 0==>4 ==> This ===> shiT 
// 6 - print value in alert "shiT"

// Second Assignment

// 1 - input value from user in String var inputValue="cloUd naTive computinG"
// 2 - Convert every first letter of the content in Capitalize case. inputValue="Cloud Native Computing"
// 3 - print value in console.log() console.log(inputValue) | check result in browser console

// 1 - Take a input from user in number with decimal point user input is 3.4
let userInput = prompt("Enter a number with decimal point:");

// 2 - Convert it into greater number Example: Math.ceil(3.4); to 4
let greaterNumber = Math.ceil(userInput);
console.log("Greater Number: " + greaterNumber);

// 3 - Declear a variable of string and assign some text var text="This is my dummy text"
let text = "This is my dummy text";

// 4 - Slice the text into a new variable from 0 to the rounded number 0 to 4; Example: text.slice(0, 4) | sliceText = This
let sliceText = text.slice(0, greaterNumber);
console.log("Sliced Text: " + sliceText);

// 5 - Use for loop and concatination to reverse the sliced string; 0==>4 ==> This ===> shiT
let reverseText = "";
for (let i = sliceText.length - 1; i >= 0; i--) {
reverseText += sliceText[i];
}

// 6 - print value in alert "shiT"
alert(reverseText);

// Second Assignment

// 1 - input value from user in String var inputValue="cloUd naTive computinG"
let inputValue = prompt("Enter a string:");

// 2 - Convert every first letter of the content in Capitalize case. inputValue="Cloud Native Computing"
let capitalizeString = "";
let words = inputValue.split(" ");
for (let i = 0; i < words.length; i++) {
let word = words[i];
let firstLetter = word[0].toUpperCase();
let restLetters = word.slice(1).toLowerCase();
let capitalizedWord = firstLetter + restLetters;
capitalizeString += capitalizedWord + " ";
}

// 3 - print value in console.log() console.log(inputValue) | check result in browser console
console.log(capitalizeString);