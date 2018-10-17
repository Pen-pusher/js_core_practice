
// Write a JavaScript function to check whether an `input` is a string or not.
function isString(a) {
  var result = false;
  if (typeof (a) == typeof (typeof (a))) {
    result = true;
  }
  return result
}


// Write a JavaScript function to check whether a string is blank or not. 

// var str = prompt("entre string");
// function isblank(a) {
//   if (a) {
//     return (`string is not blank`)
//   }
//   else return (`string is blank`)
// }


// Write a JavaScript function to split a string and convert it into an array of words.
// Input -> "Hello World In Javascript"
// Output -> ['Hello','World', 'In', 'Javascript']

// var stra = prompt(`entre a string`);
// function strToArr(str) {
//   var arr = str.split(" ");
//   return arr;
// }

// Write a JavaScript function to extract a specified number of characters from a string.
// Input -> (string, number) -> ('Hello World!', 4)
// Ouptut -> String -> "Hell"
function strTill(str, num) {
  return str.substr(0, num);
}


// Write a JavaScript function to convert a Full Name like (Rahul Dravid) -> (Rahul D.)
// Input -> (String)
// Output (String)
function strName(str) {
  var space = str.indexOf(" ");
  var newstr = str.substr(0, space + 2).concat(".");
  return newstr;
}

// Write a JavaScript function to hide email addresses to protect from unauthorized user.
// Input -> (String) -> "someone@altcampus.io"
// Output -> (String) -> "som....@altcampus.io"
function strEmail(str) {
  var atrate = str.indexOf("@");
  var start = str.substr(0, atrate / 2);
  var dot = ".";
  if (atrate % 2 == 0) {
    dot = dot.repeat(atrate / 2);
  }
  else {
    dot = dot.repeat((atrate / 2) + 1);
  }
  var end = str.substring(atrate);
  var newstr = start.concat(dot, end)
  return newstr;
}


// Write a JavaScript function to parameterize a string
// Input -> (String) -> ('The Perks Of Being A Wallflower')
// Output -> (String) -> 'the-perks-of-being-a-wallflower





// Write a JavaScript function to capitalize the first letter of every Word of a string.
// Inpput -> (String) -> 'hello Batman from India'
// Output -> (String) -> 'Hello Batman From India'
function capatilise(str) {
  var arstr = str.split("");
  arstr[0] = arstr[0].toUpperCase();
  for (let i = 1; i < arstr.length; i++) {
    if (arstr[i] == ' ') {
      arstr[i + 1] = arstr[i + 1].toUpperCase()
    }
  }
  var newstr = arstr.join('');
  return newstr;
}


// Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.
// Input (String) -> 'AaBbcVv'
// Output -> 'aAbBCvV'
function uppertolower(str) {
  var arstr = str.split('');
  for (let i = 0; i < arstr.length; i++) {
    if (arstr[i] === arstr[i].toUpperCase()) {
      arstr[i] = arstr[i].toLowerCase();
    }
    else {
      arstr[i] = arstr[i].toUpperCase();
    }
    var newstr = arstr.join('');
  }
  return newstr;
}


// Write a JavaScript function to convert a string into camel case.
// Input (String) -> 'Learning about js'
// Output -> 'LearningAboutJs'
function camel(str) {
  var arstr = str.split("");
  arstr[0] = arstr[0].toUpperCase();
  for (let i = 1; i < arstr.length; i++) {
    if (arstr[i] == ' ') {
      arstr[i + 1] = arstr[i + 1].toUpperCase()
    }
  }
  var newArstr = arstr.filter(v => v != " ");
  var newstr = newArstr.join('');
  return newstr;
}



// Write a JavaScript function to uncamelize a string
// Input (String) -> 'LearningAboutJs'
// Output -> 'Learning About Js'
function unCamel(str) {
  var arstr = str.split("");
  var newArray = [arstr[0]];
  for (let i = 1; i < arstr.length; i++) {
    if (arstr[i] == arstr[i].toUpperCase()) {
      newArray.push(" ");
    }
    newArray.push(arstr[i]);
  }
  var newstr = newArray.join('');
  return newstr;
}


// Write a JavaScript function to concatenates a given string n times
// Input (String, number) -> ('Hello!', 4)
// Output -> 'Hello!Hello!Hello!Hello!'
function rept(str, n) {
  var newStr = str.repeat(n);
  return newStr;
}



// Write a JavaScript function to humanized number
// Input -> (Number) -> 1 or 2
// Output -> (String) -> 1st or 2nd
function humanize(number) {
  if (number % 100 == 11 || number % 100 == 13 || number % 100 == 12)
    return number + "th";

  switch (number % 10) {
    case 1: return number + "st";
    case 2: return number + "nd";
    case 3: return number + "rd";
    default: return number + "th";
  }
}


