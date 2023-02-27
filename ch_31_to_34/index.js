// JS chapter 31 to 34
// Java-script assignments chapter 31 to 34

// 1 - input your name through prompt. for example name is  "Ameen Alam"

// 2 - input your DOB(date) through prompt. for example date is  "24"

// 3 - input your DOB(month) through prompt. for example month is  "05"

// 4 - input your DOB(year) through prompt. for example year is  "1999"

// 5 - print meassage in console.log() "Hello Ameen Alam, Good Morning, AfterNoon, Evening or Night"

// 6 - print meassage in console.log() "Your DOB is {in pakistan standard time format}"

// 7 - print meassage in console.log() "You are 20 years 7 Month 10 Days 19 Hours 20 Minutes 25 Seconds old"

// "Your Age in Days 7510"

// 8 - print meassage in console.log() "How much time left in your next birthday? 161 days 4 hours 39 minutes 34 seconds" or "happy Birth Day Ameen Alam.  Today is Your 20th Birthday"

// Solution

// Step 1: Get user input for name and date of birth
var name = prompt("Enter your name:");
var dateOfBirth = prompt("Enter your date of birth (DD):");
var monthOfBirth = prompt("Enter your month of birth (MM):");
var yearOfBirth = prompt("Enter your year of birth (YYYY):");

// Step 2: Create a Date object using the user input
var dob = new Date(yearOfBirth, monthOfBirth - 1, dateOfBirth);

// Step 3: Create variables for different time units
var currentDate = new Date();
var timeDiff = currentDate.getTime() - dob.getTime();
var seconds = Math.floor(timeDiff / 1000);
var minutes = Math.floor(seconds / 60);
var hours = Math.floor(minutes / 60);
var days = Math.floor(hours / 24);
var months = Math.floor(days / 30.4167); // average number of days in a month
var years = Math.floor(days / 365);

// Step 4: Greet the user based on the current time
var greeting = "";
var currentHour = currentDate.getHours();
if (currentHour < 12) {
  greeting = "Good Morning";
} else if (currentHour < 18) {
  greeting = "Good Afternoon";
} else {
  greeting = "Good Evening";
}

// Step 5: Print the greeting and date of birth in PST format
console.log("Hello " + name + ", " + greeting);
console.log(
  "Your DOB is " +
    dob.toLocaleString("en-US", { timeZone: "America/Los_Angeles" })
);

// Step 6: Print the user's age in years, months, days, hours, minutes, and seconds
console.log(
  "You are " +
    years +
    " years " +
    months +
    " months " +
    (days % 30) +
    " days " +
    (hours % 24) +
    " hours " +
    (minutes % 60) +
    " minutes " +
    (seconds % 60) +
    " seconds old"
);

// Step 7: Print the user's age in days
console.log("Your Age in Days " + days);

// Step 8: Calculate the time left until the next birthday
var nextBirthday = new Date(
  currentDate.getFullYear(),
  dob.getMonth(),
  dob.getDate()
);
if (nextBirthday < currentDate) {
  nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
}
var timeLeft = nextBirthday.getTime() - currentDate.getTime();
var secondsLeft = Math.floor(timeLeft / 1000);
var minutesLeft = Math.floor(secondsLeft / 60);
var hoursLeft = Math.floor(minutesLeft / 60);
var daysLeft = Math.floor(hoursLeft / 24);
console.log(
  "How much time left in your next birthday? " +
    daysLeft +
    " days " +
    (hoursLeft % 24) +
    " hours " +
    (minutesLeft % 60) +
    " minutes " +
    (secondsLeft % 60) +
    " seconds"
);
if (
  daysLeft === 0 &&
  hoursLeft === 0 &&
  minutesLeft === 0 &&
  secondsLeft === 0
) {
  console.log(
    "Happy Birthday " + name + "! Today is your " + (years + 1) + "th birthday"
  );
}
