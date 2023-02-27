// Java-script assignments chapter 10 to 14

// Make a Calculator
// input a value from user for example num1 is 7
// input a second value from user for example num2 is 3
// input a third value from user for example sign is "+" or "-" or "*" or "/" or "%"
// print operation in alert() 7-3 =4, or 7*3 =21, or 7/3 =2.3, or 7+3 =10 or 7%3 =1

// Second Assignment - Make a Percentage Calculator
// Get the 5-course number from the userfor example course1 is 70 var totalMarks = 500
// Calculate the total percentage formula:  obtainedMarks * 100/ totalMarks
// print output in alert.

//Solution

// var num1 = parseInt(prompt(`Num 1 is`));
// var num2 = parseInt(prompt(`Num 2 is`));
// var sign = prompt(`Enter sign is "+" or "-" or "*" or "/" or "%"`);
// //addition
// if (sign === "+") {
//   alert(num1 + num2);
// }
// //subtraction
//  else if (sign === "-") {
//   alert(num1 - num2);
// }
// //multiplication
// else if (sign === "*") {
//   alert(num1 - num2);
// } 
// //division
// else if (sign === "/") {
//   alert(num1 / num2);
//   //modules
// } else if (sign === "%") {
//   alert(num1 % num2);
// }  
// else {
//   alert("please enter valid input ");
// }

//--------------------------------------------------------------------------------------
// Solution to the first assignment of chapter 10 to 14

// Take input from user
let num1 = +prompt("Enter first number:");
let num2 = +prompt("Enter second number:");
let sign = prompt("Enter an operation (+, -, *, /, or %):");

let result;

// Perform operation based on the sign input
switch (sign) {
case "+":
result = num1 + num2;
alert(`${num1} + ${num2} = ${result}`);
break;
case "-":
result = num1 - num2;
alert(`${num1} - ${num2} = ${result}`);
break;
case "*":
result = num1 * num2;
alert(`${num1} * ${num2} = ${result}`);
break;
case "/":
result = num1 / num2;
alert(`${num1} / ${num2} = ${result}`);
break;
case "%":
result = num1 % num2;
alert(`${num1} % ${num2} = ${result}`);
break;
default:
alert("Invalid operation!");
}

// Solution to the second assignment of chapter 10 to 14

// Get input from user
let course1 = +prompt("Enter marks for course 1:");
let course2 = +prompt("Enter marks for course 2:");
let course3 = +prompt("Enter marks for course 3:");
let course4 = +prompt("Enter marks for course 4:");
let course5 = +prompt("Enter marks for course 5:");
let totalMarks = 500;

// Calculate percentage
let obtainedMarks = course1 + course2 + course3 + course4 + course5;
let percentage = (obtainedMarks / totalMarks) * 100;

// Print output in alert
alert(`Percentage: ${percentage}%`);

// -----------------Second Assignment - Make a Percentage Calculator--------------------