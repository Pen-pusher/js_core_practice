// Arrays to work on
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];


// Use the above two arrays and practice array methods


// Find largest number in numbers
function isLargest() {
  var big=numbers[0];
  numbers.forEach(element => {if(element > big) big = element;});
  return big; 
}

// Find longest string in strings
function isLongest(arr) {
  var long = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (long.length < arr[i].length) {
      long = arr[i];
    }
  }
  return long;
}


// Find all the even numbers
function evens() {
  var newArr = numbers.filter(v => v % 2 == 0)
  return newArr
}


// Find all the odd numbers
  function evens() {
    var newArr = numbers.filter(v => v % 2 != 0)
    return newArr
  }

// Find all the words that contain 'is' use string method 'contains'
function iscontains(arr) {
  var newArr = arr.filter(x => x.includes('is') );
  return newArr;
}

// Find all the words that contain 'is' use string method 'indexOf'
function isIndexof(arr) {
  var newArr = arr.filter(x => x.indexOf('is') != -1);
  return newArr;
}

// Check if all the numbers in numbers array are divisible by three use array method (every)
function checkEvery(arr) {
  return arr.every(v => v % 3 == 0 )
}



//  Sort Array from smallest to largest
function sorting(arr) {
  var newArr = arr.slice();
  return newArr.sort();
}


// Remove the last word in strings
function lastword(str) {
  var newstr = str.split(' ').pop().join(" ");
  return newstr;

}


// Add a new word in the array
function lastword(arr, word) {
  return arr.push(word);

}

// Remove the first word in the array
function remFirst(arr) {
  return arr.shift();
}


// Place a new word at the start of the array use (upshift)
function addFirst(arr, new) {
  return arr.unshift(new);
}


// Make a subset of numbers array [18,9,7,11]
function subsetNum() {
  return numbers.slice(3,7);
}


// Make a subset of strings array ['a','collection']
function subsetNum() {
  return strings.slice(2, 4);
}

// Replace 12 & 18 with 1221 and 1881
function replaceN() {
  numbers[numbers.indexOf(12)] = 1221;
  numbers[numbers.indexOf(18)] = 1881;
}

// Replace words with string in strings array
function replaceS() {
  strings[string.indexOf("words")] = "string";
}


// Customers Array
var customers = [
    { firstname : 'Joe', lastname : 'Blogs'},
    { firstname : 'John', lastname : 'Smith'},
    { firstname : 'Dave', lastname : 'Jones'},
    { firstname : 'Jack', lastname : 'White'}
];
// Find all customers whose firstname starts with 'J'

// Create new array with firstname and lastname


// Sort the array created above alphabetically
var newArr = customers.filter(v => v.firstname.indexOf('J') == 0 ).map(v => v.firstname + ' ' + v.lastname).sort();
console.log(newArr);

