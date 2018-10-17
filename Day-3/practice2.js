/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */
function numtostr(n){
  var strnumber = String(n);
  return strnumber;
}




/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
function addOne(n) {
  var number = ++n;
  return number;
}


/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
function subOne(n) {
  var number = --n;
  return number;
}


/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
function add(x, y) {
  var sum = x + y;
  return sum;
}


/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
function subtract(x, y) {
  var diff = x - y;
  return diff;
}


/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
function multiply(x, y) {
  var mul = x * y;
  return mul;
}


/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
function divide(x, y) {
  var div = x / y;
  return div;
}


/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
function square(x) {
  var sqr = x * x;
  return sqr;
}


/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
function mathOpr(operation, x, y) {
  if (operation == "add") {
    var sum = x + y;
    console.log(`${x} + ${y} = ${sum}`);
    return sum;
  }
  if (operation == "subtract") {
    var sub = x - y;
    console.log(`${x} - ${y} = ${sub}`);
    return sub;
  }
  if (operation == "multiply") {
    var mul = x * y;
    console.log(`${x} * ${y} = ${mul}`);
    return mul;
  }
  if (operation == "divide") {
    var div = x / y;
    console.log(`${x} / ${y} = ${div}`);
    return div;
  }
  console.log("Invalid Operator")
  return null;
}


/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
function isGreater(a, b) {
  var result = false;
  if(a > b) {
    result = true;
  }
  return result;
}


/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
function isLesser(a, b) {
  var result = false;
  if (a < b) {
    result = true;
  }
  return result;
}


/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
function isEqual(a, b) {
  var result = false;
  if (a == b) {
    result = true;
  }
  return result;
}


/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
function whichSmaller(a, b) {
  if (a < b) {
    return a;
  }
  else
    return b;
}


/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
function whichGreater(a, b) {
  if (a > b) {
    return a;
  }
  else
    return b;
}


/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
function isEven(n) {
  var result = false;
  if (n % 2 == 0) {
    result = true;
  }
  return result;
}


/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
function isEven(n) {
  var result = false;
  if ( !(n % 2 == 0) ) {
    result = true;
  }
  return result;
}


/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
function grade(score, total) {
  var percent = (score / total) * 100;
  if (percent > 100) {
    return "Invalid Input";
  }
  if (percent >= 90) {
    return "A";
  }
  if (percent >= 80) {
    return "B";
  }
  if (percent >= 70) {
    return "C";
  }
  if (percent >= 60) {
    return "D";
  }
  return "F";
}


/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */ 
var restaurant = {};
function checkReview(obj) {
  if (obj.reviews) {
    obj.reviews++;
  }
  else {
    obj.reviews = 1;
  }
  return obj;
}



/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
function concat(word1, word2) {
  var strfinal = word1 + " " + word2;
  return strfinal;
}

/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */
function funcCircle(radius) {
  var circle = {}
  circle.circumference = 2 * math.PI * radius;
  circle.area = math.PI * radius * radius;
  return circle;
}

