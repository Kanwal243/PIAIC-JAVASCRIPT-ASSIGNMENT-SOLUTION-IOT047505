// JS chapter 18 19 20
// Java-script assignments chapter 18 19 20

// Make a TODO
// Customize previous assignment "ch_15_16_17" with for loop...

// ------------------------------For Loop-----------------------------------

//Solution

var courses = [];
alert(courses);
console.log(`courses`, courses);
for (var i = 0; i < 5; i++) {
  var course = prompt(`Enter courses ${i + 1}`);
  courses.push(course);
}
console.log(`push courses`, courses);
 alert(courses);

 for (var j = 0; j < 5; j++) {
// //  var newcourse = prompt(`Enter courses ${i + 1}`);
var newcourse = prompt(`Enter new courses`, courses[j]);

   courses.splice(j, 1, newcourse);
 }
 console.log(`new courses`, courses);
alert(courses);