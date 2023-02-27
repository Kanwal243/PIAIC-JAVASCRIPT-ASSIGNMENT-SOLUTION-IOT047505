// Java-script assignments chapter 39 to 42

// Make a Percentage Calculator
// Get the 5-course number from the userfor example course1 is 70 var totalMarks = 500
// Calculate the total percentage formula:  obtainedMarks * 100/ totalMarks
// Calculate the grade use switch case  Grade A+ 90% to 100% , Grade A 75% to 89% , Grade B 60% to 74% , Grade C 45% to 60% , Grade D 30% to 44% Grade F 0% to 29%
// print output in alert.

// Get course marks from the user
var course1 = parseFloat(prompt("Enter marks for course 1"));
var course2 = parseFloat(prompt("Enter marks for course 2"));
var course3 = parseFloat(prompt("Enter marks for course 3"));
var course4 = parseFloat(prompt("Enter marks for course 4"));
var course5 = parseFloat(prompt("Enter marks for course 5"));

// Calculate total marks and percentage
var totalMarks = 500;
var obtainedMarks = course1 + course2 + course3 + course4 + course5;
var percentage = obtainedMarks * 100 / totalMarks;

// Calculate grade based on percentage
var grade;
switch (true) {
  case (percentage >= 90 && percentage <= 100):
    grade = "A+";
    break;
  case (percentage >= 75 && percentage <= 89):
    grade = "A";
    break;
  case (percentage >= 60 && percentage <= 74):
    grade = "B";
    break;
  case (percentage >= 45 && percentage <= 59):
    grade = "C";
    break;
  case (percentage >= 30 && percentage <= 44):
    grade = "D";
    break;
  default:
    grade = "F";
}

// Print output in an alert box
alert("Total Obtained Marks: " + obtainedMarks + "\nPercentage: " + percentage + "%" + "\nGrade: " + grade);


// In this code, we first get the marks for all 5 courses from the user using the prompt() method. 
// Then we calculate the total marks and percentage using the formula you provided.
// Next, we calculate the grade using a switch-case statement that checks the percentage against various ranges and assigns the appropriate grade. 
// Finally, we print the output in an alert box using the alert() method.