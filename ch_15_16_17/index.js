// Java-script assignments chapter 15 16 17

// Make a TODO
// 1 - Create an empty array with the name is courses. ```example: var courses=[] ``
// 2 - Get the 5-course name from the user, example: var course1 =prompt("course 1", "computer")  and save all 5 value in "courses" array. example: courses.push(course1)
// 3 - print courses array in alertexample: alert(courses)
// 4 - print all full 5-course name one by one in prompt. example: course1=prompt(course1, course1Value)
// 5 - If the user edit any value (through prompt), then that value is edit in the array. example: course1=prompt(course1, course1ValueEdit)  use Array.splice() to replace and edit index in array
// 6 - print courses array in alertexample: alert(courses)

// ------------------------------Array-----------------------------------

var courses = [];
        alert (courses);
        console.log(`courses`,courses)

        var course1 = prompt("Enter course 1");
        var course2 = prompt("Enter course 2");
        var course3 = prompt("Enter course 3");
        var course4 = prompt("Enter course 4");
        var course5 = prompt("Enter course 5");
        courses.push(course1,course2,course3,course4,course5);
        console.log(`push courses`,courses)
        alert(courses);

        var newCourse1 = prompt("choose course 1", course1);
        var newCourse2 = prompt("choose course 2", course2);
        var newCourse3 = prompt("choose course 3", course3);
        var newCourse4 = prompt("choose course 4", course4);
        var newCourse5 = prompt("choose course 5", course5);

        courses.splice(0,5,newCourse1,newCourse2,newCourse3,newCourse4,newCourse5);
        console.log(`new courses`,courses)
        alert(courses);



// ------------------------------While loop------------------------------------

// var courses = [];
// alert(courses);
// console.log(`courses`, courses);
// var i = 0;
// while (i < 5) {
//   var course = prompt(`Enter courses ${i + 1}`);
//   courses.push(course);
//   i++;
// }
// console.log(`push courses`, courses);
// alert(courses);
// var j = 0;
// while (j < 5) {
//   var newcourse = prompt(`Enter new courses`, courses[j]);
//   courses.splice(j, 1, newcourse);
//   j++;
// }
// console.log(`new courses`, courses);
// alert(courses);
