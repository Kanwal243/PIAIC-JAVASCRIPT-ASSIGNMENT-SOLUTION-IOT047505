// Java-script assignments chapter 5, 6, 7

// declare a variable for Number 'a' for example a value is 2
// declare a variable for Number 'b' for example b value is a++ + ++a - --a + a--
// print meassage in alert() variable a
// print meassage in alert() variable b

var a = 2;
var b = a++ + ++a - --a + a--;
alert(`variable `+ a);
alert(`variable `+ b);



// Explanation:

// Initially, a is assigned a value of 2.
// The value of a is first incremented using the post-increment operator a++. So, a becomes 3 and the expression returns the previous value of a, which is 2.
// The value of a is again incremented using the pre-increment operator ++a. So, a becomes 4 and the expression returns the current value of a, which is 4.
// The value of a is then decremented using the pre-decrement operator --a. So, a becomes 3 and the expression returns the current value of a, which is 3.
// Finally, the value of a is decremented using the post-decrement operator a--. So, a becomes 2 and the expression returns the previous value of a, which is 3.
// Therefore, the value of b is calculated as 2 + 4 - 3 + 3, which is equal to 6.
// The value of a remains unchanged at 2.