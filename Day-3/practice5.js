// Practice for scope and closure
// Write 'global' or 'local' infront of the line based on scope.
const dob = 2001;
const countAge = (name) => {
  const x = 2018;
  return x - dob;
}
var name = true;


//What's the output?

const x = 100;
const countValue = (num) => {
  const x = 10;
  return num * x;
}

console.log(x);



// Output of the following
let a = 100;

const changer = () => {
  a++;
}

console.log(a);
changer();
console.log(a);


// Output

let a = 5;
let b = 10;

const sum = () => {
  let a = 100;
  return a + b;
}

sum();

// Output

const makeBook = () => {
  const name = "The perks of being a wallflower.";

  const printName = () => {
    console.log(name);
  }

  return printName;
}

const myBook = createBook();
myBook();

// Output
function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter1 = makeCounter();

console.log(counter);
console.log(counter);
console.log(counter1);
console.log(counter1);

