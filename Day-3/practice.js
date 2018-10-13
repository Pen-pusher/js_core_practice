// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
function tellFortune(numberOfChildren, partnerName, geographicLocation, jobTitle) {
  console.log(`You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids`); 
}



// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Add an additional argument to the function that takes the conversion rate of human to dog years.
function calculateDogAge(puppyAge,humanAge) {
  if(humanAge){
    console.log(`Your doggie is ${puppyAge * 7} years old in dog years!`);
    console.log(`Your Age is ${humanAge * 7} years old in dog years!`);
  }
  else
    console.log(`Your doggie is ${puppyAge * 7} years old in dog years!`);
}



// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Accept floating point values for amount per day, and round the result to a round number.
const MAX_AGE=70;
function calculateSupply(age,amount) {
  var supply = (MAX_AGE - age) * amount * 365;
  console.log(`You will need ${supply} to last you until the ripe old age of ${MAX_AGE}`);
}

// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
function celsiusToFahrenheit(tempC) {
  console.log(`${tempC}°C is ${(tempC * 1.8) + 32}°F`); 
}

var fahrenheitToCelsius = (tempC) => console.log(`${tempC}°F is ${(tempC - 32) * (5/9) }°C`)



//1. The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}
// Will the function work differently if else is removed?

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}
// Is there any difference in the behavior of these two variants?
//  in this function there is no diff in working as the statements are terminating before going to next line if if statement is true







// 2. The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Do you have your parents permission to access this page?');
  }
}
// Rewrite it, to perform the same, but without if, in a single line.
// Make two variants of checkAge:
// Using a question mark operator ?
function newAge(age) {
  var result=(age > 18) ?true:confirm('Do you have your parents permission to access this page?');
}
// Using OR ||



// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Use prompt to take values for x and n, and then shows the result of pow(x,n) using alert.
// In this task the function should support only natural values of n: integers up from 1.
function pow(x,n) {
  if(!x || !n){
    x = prompt("entre value Of X as in X^n ");
    n = prompt("entre value Of n as in X^n ")
  }
  if(n >= 1 || Number.isInteger(n))
  {
    result = 1;
    for(var i = 0;i < n; i++){
      result *= x;
    }
    return result;
  }  
  else 
  console.log("invalid n value")
}


// Enter a string and the program counts the number of vowels in the text. For added complexity have it report a sum of each vowel found.
function ifVowel() {
  var str = prompt("enter a string");
  var ar = str.split('');
  var noOfVowel = 0;
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] == 'a' || ar[i] == 'A' || ar[i] == 'e' || ar[i] == 'E' || ar[i] == 'i'|| ar[i] == 'I' || ar[i] == 'o' || ar[i] == 'O' || ar[i] == 'U' || ar[i] == 'u')
    noOfVowel++;
  }
  return(`No of Vowels = ${noOfVowel}`);
}

// Checks if the string entered by the user is a palindrome. That is that it reads the same forwards as backwards like “racecar”
function ifPalindrome() {
  var str = prompt("enter a string");
  var ar = str.split('');
  var isPal=true;
  for (let i = 0,let j = (ar.length -1); i < ar.length/2; i++, j--) {
      if(!(ar[i] == ar[j])){
        isPal = false;
      }
  }
  if(isPal)
    return(`${str} is Palindrome`);
  else
    return(`${str} is  not Palindrome`);
}

// Counts the number of individual words in a string. For added complexity read these strings in from a text file and generate a summary.
function noWords() {
  var str = prompt("enter a string");
  var ar = str.split(" ");
  noWords = ar.length;
  return (`No of Words = ${noWords}`);
}
// Show the following output using one loop.
    // 1, 2, 3, 4, 5
    // 6, 7, 8, 9, 10
    function loopOutput() {
      var ar = [];
      for (i = 1 ;i <= 10 ; i++)
      {
        ar.push(i);
        if (i == 5) {
          ar.push('\n');
        }
      }
      console.log(ar);
    }


// Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n.
function sOrP() {
  var n = prompt("entre number n");
  n = Number(n);
  var sum = 0 ,pro = 1 ;
  var check=prompt(`entre \n 1 for sum 1 to n \n 2 for product 1 to n `);
  for (let i = 1; i <= n; i++) {
    sum += i;
    pro *= i;
  }
  if (check == '1')
  {
    return (`Sum is ${sum}`)
  }
  if (check == `2`)
    return (`product is ${pro}`)
  else
  return (`invalid choice`);
}


// Write a function that returns the largest element in a list.
function list() {
  var nstr = prompt(`entre string of arraay`)
  
}



// Write a program that asks the user for a number n and prints the sum of the numbers 1 to n
function sumN() {
  var n = prompt("entre number n");
  var sum = 0;
  n = Number(n);
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return (`Sum is ${sum}`)
}

// Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71
function sumN57() {
  var n = prompt("entre number n");
  var sum = 0;
  n = Number(n);
  for (let i = 1; i <= n; i++) {
    if((i % 5 == 0) || (i % 7 == 0))
    sum += i;
  }
  return (`Sum is ${sum}`)
}

// Write a program that takes a number under (25) and prints the multiplication table for the number.
function multable() {
  var x = prompt(`entre value of X`);
  if (x <= 25){
    for (let i = 1; i <= 10; i++) {
      console.log(`${x} X ${i} = ${x*i}`);
    }
  }
  else
  return (`No is Greater than 25`)
}
