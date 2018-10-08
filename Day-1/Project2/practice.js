console.log("I'm Learning Javascript");



// var name = "Mark"; mark is string , name is a variable name;



// var name = "john";
// var admin = name;
// alert(admin)


// alert("Hello World");


// var name=prompt("enter your name");
// alert("Welcome " + name);


// var name=prompt("enter your name");
// if(name =="Alice" || name=="Bob")
//   alert("Welcome " + name);
// else
//   alert("cant greet you");


// variable name should not consist blankspace between them 
// use hyphen or underscore to attach them or remove space.


var user = prompt("enter user name");
function check(a){
  if(a == "sam")
    console.log("Hello Sam, How are you doing?");
}
check(user);



// Right or Wrong
//   "Hello World"    Right
//   'Hello World"    Wrong
//   "Hello World'    Wrong
//   'Hello World'    Right


var str = prompt("entre string length");
var n = str.length;
console.log("string length is" + n);





// Age of the owner
// var age = 26;
// var dogage= age/7;
// console.log("age of owner is " + dogage);


// var studentScore = 41
// var maxScore = 100
// var percent = function percent(score,max) {
//                return  (score/max)*100;
//                 }
// console.log(percent(studentScore,maxScore)+ "%");



var city = 'Dharamshala'
var country = 'India'
alert(city +", "+ country);