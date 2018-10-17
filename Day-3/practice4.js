// Write a JavaScript program to calculate the factorial of a number. Go to the editor
function factorial(number) {
  if (number == 0) {
    return 1;
  }
  else {
    return (number = number * factorial(number - 1));
  }
}

// Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
function gcd(a, b) {
  if (a == 0 || b == 0) {
    return ("zero(both no. should be positive)");
  }
  if (a == b) {
    return (`GCD is ${a}`)
  }
  if (a > b) {
    return gcd(a - b, b);
  }
  if (b > a) {
    return gcd(a, b - a);
  }
}




//Write a JavaScript program to get the integers in range (x, y)

function onetoN(x, y) {
  if (x <= y) {
    console.log(x);
    onetoten(x + 1, y)
  }
  else {
    return;
  }
}

//WAP recurssion to print 1 to 10.
function onetoN(final, initial) {
  if (!(initial)) {
    initial = 1;
  }
  if (initial <= final) {
    console.log(initial);
    onetoten(final, initial + 1)
  }
  else {
    return;
  }



}
function onetoten(a) {
  if (!a) {
    a = 1;
  }
  if (a <= 10) {
    console.log(a);
    onetoten(a + 1);
  }
  else {
    return;
  }
}