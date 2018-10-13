// Log message in console saying "I'm Learning Javascript"
console.log("I'm Learning Javascript");


// var name = "Mark"; mark is string , name is a variable name;


// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).
var name = "john";
var admin = name;
alert(admin)

// Use alert function to to show a message saying “Hello World”  https://javascript.info/alert-prompt-confirm
alert("Hello World");

// Write a function which uses prompt to take the name of person and greets them. i.e "Welcome Arun"
var name = prompt("enter your name");
alert("Welcome " + name);

// Modify the previous program such that only the users Alice and Bob are greeted with their names.
var name = prompt("enter your name");
if(name == "Alice" || name == "Bob") {
  alert("Welcome " + name);
}
else{
  alert("cant greet you");
}

// Find the error if any (var product cost = 3.45;)
			// variable name should not consist blankspace between them 
			// use hyphen or underscore to attach them or remove space.

// Write a function that takes 'user' as an argument and log a message in console saying 
// "Hello Sam, How are you doing?" if name of the user passed is "Sam"
var user = prompt("enter user name");
function check(a) {
  if (a == "sam") {
    console.log("Hello Sam, How are you doing?");
  }
}
check(user);



// Right or Wrong
//   "Hello World"    Right
//   'Hello World"    Wrong
//   "Hello World'    Wrong
//   'Hello World'    Right



// Get an input from the user using the prompt box and display the length of the string.
// e.g “Learning is fun” should output will be 15.
var str = prompt("entre string length");
var n = str.length;
console.log("string length is" + n);




// Age of the owner
var age = 26;
// Calculate the age of the dog if owner's age is 7 times of dog
// Use console.log() function to log the age of the dog 
var dogage = age / 7;
console.log("age of owner is " + dogage);



// Marks and max marks of the student
var studentScore = 41
var maxScore = 100
// Calculate the percentage of marks the student got
var percent = function percent(score,max) {
               return  (score/max)*100;
                }

// log the percentage in console using console.log()
console.log(percent(studentScore,maxScore)+ "%");



var city = 'Dharamshala'
var country = 'India'
// Make a function which can alert the message "Dharamshala, India"
alert(city + ", " + country);
