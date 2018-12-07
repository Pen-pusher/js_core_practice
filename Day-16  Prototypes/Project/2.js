// Define a constructor function called Persone which takes three arguments
//(name, yearOfBirth, job) Initiate the properties
function Persone(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}



// Define a function name calculateAge which returns the age of the person
Persone.prototype.calculateAge = function () {
  let currentYear = (new Date()).getFullYear();
  return (Number(currentYear) - this.yearOfBirth);
}



// Use constructor function to make three objects with different values for example ('John', 1990, 'teacher')
var john = new Persone('John', 1990, 'teacher');
var ravu = new Persone('ravu', 1994, 'cooldude');
var vishvu = new Persone('vishvu', 1989, 'familyElder');


// call the calculateAge function on each object
john.calculateAge();
ravu.calculateAge();
vishvu.calculateAge();


