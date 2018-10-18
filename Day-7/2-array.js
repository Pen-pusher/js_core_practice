var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];
//Write a function findLongestWord that takes an array of words and returns the longest one.
//If there are 2 with the same length, it should return the first occurrence.
function isLongest(arr) {
  var long = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (long.length < arr[i].length) {
      long = arr[i];
    }
  }
  return long;
}




var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// Create a sumArray function that takes an array of numbers1 as a parameter, and calculate the sum of all its numbers
// Use reduce method of array
// Use the above sum and calculate the average.
function sumAng(arr) {
  var sum = [1, 2, 3].reduce((a, b) => a + b, 0);
  var avg = avg/arr.length;
  return (`sum = ${sum} avg = ${avg}`)  
}




var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
//Write a function averageNumbers that receives an array of numbers2 and calculate the average of the numbers
function Avg(arr) {
  return ( ( [1, 2, 3].reduce((a, b) => a + b, 0) )/arr.length);
}



var words2 = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];
//Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function averageLength(array) {
  newarray = [];
  for (i = 0; i < array.length; i++) {
    newarray.push(array[i].length);
  }

  var avg = newarray.reduce(add, 0);
  function add(a, b) {
    return a + b;
  }
  avg = avg / newarray.length
  return avg;
}


