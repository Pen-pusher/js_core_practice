// Get two values from the user ‘password’ and ‘confirm password’  using the prompt box and display a message “Password validated” if both the values match else display the message “Password do not match”
var Password = prompt("entre password");
var ConfirmPassword = prompt("Confirm the password");
if (Password == ConfirmPassword) {
  alert("Password validated");
}
else {
  alert("Password do not match");
}


// Find the output of the following
// Logical AND operation    
// true  && true;           true
// true  && false;          false 
// false && true;           false
// false && false;          false

// Logical OR operation
// true  || true;           true    
// true  || false;          true
// false || true;           true
// false || false;          false

// "foo" && "bar";          "bar"
// "bar" && "foo";          "foo"
// "foo" && "";             ""
// ""    && "foo";          ""

// "foo" || "bar";          "foo"
// "bar" || "foo";          "bar"
// "foo" || "";             "foo"
// ""    || "foo";          "foo"



// Output of this alert( alert(1) || 2 || alert(3) );
// ans      1       2

// Create a function which takes two input and (a,b) and display the sum, sub, multiplication, devision of those two numbers.
function BasicOp(a, b) {
  var sum = a + b;
  console.log("sum" + sum);
  var sub = a - b;
  console.log("sub" + sub);
  var multi = a * b;
  console.log("multiplication" + multi);
  var div = a / b;
  console.log("devision" + sub);
}


// Function to display a number if user enters negative number
function NegNum(a) {
  if (a < 0)
    console.log(a);
}
var num = prompt("enter number: ");
NegNum(num);


// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.
function multi35() {
  var sum = 0;
  for(var i = 0; i < 1000; i++) {
    if ( ( (i % 3) == 0) || ( (i % 5) == 0) )
      sum += i;
  }
  console.log(sum);
}


// If user enters positive number, that number won't be displayed
function NoPosNum(a) {
  if (a >= 0)
    console.log(a);
}


// Funnction to check whether an integer entered by the user is odd or even
function OddEven(a) {
  if(a >= 0) {
    if( (a % 2) == 0) {
      console.log("even");
    }
    else {
      console.log("odd");
    }
  }
  else
    console.log("invalid:negative no.");
}



// Funnction to take two input and show the relation using =, > or < i.e (21,45) 21 < 45, (23,12) 23 > 12
function relation(a, b) {
  if (a < b) {
    console.log(a + "<" + b);
  }
  else {
    if (a > b) {
      console.log(a + ">" + b);
    }
    else {
      console.log(a + "=" + b);
    }
  }
}


// Funnction to Check Whether a Character is Vowel or Consonant
function isVowel() {
  var cha = prompt("Entre a Character");
  var chal = cha.toLowerCase();
  if (cha == 'a' || cha == 'e' || cha == 'i' || cha == 'o' || cha == 'u') {
    alert(cha + " is Vowel");
  }
  else {
    alert(cha + "is Consonant");
  }
}



// Funnction to Find the Largest Number Among Three Numbers
function isGreater(a, b, c) {
  if (a > b){
    if(a > c)
      console.log(a +" isGreatest");
  }
  else
    if(b>c)
      console.log(b + " isGreatest");
    else
      console.log(c + " isGreatest");
    
  }



//Switch
// You are given a variable, . Your task is to print:
// - ONE, if num is equal to .
// - TWO, if num is equal to .
// - THREE, if num is equal to .
// - FOUR, if num is equal to .
// - FIVE, if num is equal to .
// - SIX, if num is equal to .
// - SEVEN, if num is equal to .
// - EIGHT, if num is equal to .
// - NINE, if num is equal to .
// - PLEASE TRY AGAIN, if  is none of the above.
switch( prompt("enter a number") ){
  case "1":
    console.log("ONE");
    break;
  case "2":
    console.log("TWO");
    break;
  case "3":
    console.log("THREE");
    break;
  case "4":
    console.log("FOUR");
    break;
  case "5":
    console.log("FIVE");
    break;
  case "6":
    console.log("SIX");
    break;
  case "7":
    console.log("SEVEN");
    break;
  case "8": 
    console.log("EIGHT");
    break;
  case "9":
    console.log("NINE");
    break;
  default:
    console.log("PLEASE TRY AGAIN");
}



// You are given a variable marks. Your task is to print:
// - AA if marks is greater than 90.
// - AB if marks is greater than 80 and less than or equal to 90
// - BB if marks is greater than 70 and less than or equal to 80
// - BC if marks is greater than 60 and less than or equal to 70
// - CC if marks is greater than 50 and less than or equal to 60
// - CD if marks is greater than 40 and less than or equal to 50
// - DD if marks is greater than 30 and less than or equal to 40
// - FF if marks is less than or equal to 30
function grade(marks) {
  if(marks > 90) {
    alert("AA");
  }
  else {
    if (marks > 80) {
      alert("AB");
    }
    else {
      if (marks > 70) {
        alert("BB");
      }
      else {
        if (marks > 60) {
          alert("BC");
        }
        else {
          if (marks > 50) {
            alert("CC");
          }
          else {
            if (marks > 40) {
              alert("CD");
            }
            else {
              if (marks > 30){
                alert("AA");
              }
              else
               alert("FF");
           }
         }
       }
     }
   }
 }
}





// Funnction to generate Multiplication Table of a given number (use alert for number input)
function mulTable(a) {
  var pro = 1,i;
  for(let i = 1; i <= 10; i++){
    pro = a * i;
  }
  console.log(a + " X " + i + " = " + pro);
}


// Funnctionn to calculate the Factorial of a Number

function fact(a) {
  var nfact = 1;
  for (var i = a ; i > 0 ; i--){
    nfact *= i;
  }
  console.log("factorial of " + a + "is = " + nfact);  
}


// Output: var x = 10 + "1"; console.log(x); typeof x;
  // ans    101   string


//  Solve: 225 % 6 = ?
  // ans      3


// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
function FibonacciSum() {
  var a = 1, b = 2;
  var c, sum = b;
  while (b < 4000000) {
    if ( (c % 2) == 0)
      sum += c;
    console.log(c);
    c = a + b;
    a = b;
    b = c;
  }
  console.log("sum=" + sum);
}


