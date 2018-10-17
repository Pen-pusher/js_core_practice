// Write a JavaScript function to chop a string into chunks of a given length.
// Input ( String, Number) -> ('Hello World!', 2)
// Output ['He', 'll', 'o ', 'Wo', 'rl', 'd!']
function splitN(str, n) {
  var arstr = str.split("");
  var newArray = [];
  for (let i = 0; i < arstr.length; i = i + n) {
    let strN = '';
    for (let j = i; j < i + n && j < arstr.length; j++) {
      strN = strN.concat(arstr[j]);
    }
    newArray.push(strN);
  }
  return newArray;
}



//Write a JavaScript function to count the occurrence of a substring in a string.
// Input (String, String) -> ('The world of the dogs', 'the')
// Output (Number) -> 2
function count(mainStr, subStr) {
  var mArr = mainStr.split("");
  var sArr = subStr.split("");  
  var counter =  0;
  for(let i = 0; i < mainStr.length; i++) {
    var flag = 1;
    for(let j = 0,k = i ; j < subStr.length; j++, k++) {
      if( !(subStr[j] == mainStr[k]) ) {
        flag = 0;
        break;
      }
    }
    if(flag) {
      counter++;
    }
  }
  return counter;
}



//  Write a JavaScript function to strip leading and trailing spaces from a string.
// Input (String) -> ('Hello World   ')
// Output String -> "Hello World"
function trail(str) {
  return str.trim();
}


// Write a JavaScript function to truncate a string to a certain number of words.
// Input (String, Number) -> ('The quick brown fox jumps over the lazy dog', 4)
// Output ( String ) -> "The quick brown fox"
function truncate(str, n) {
  var Arr = str.split(' ');
  var newArr = [];
  for (let i = 0; i < n; i++) {
    newArr.push(Arr[i]);
  }
  return newArr.join(' ');
}



// Write a JavaScript function to alphabetize a given string.(A -z)
// Input (String) -> 'United States'
// Output 'SUadeeinsttt'



// Write a JavaScript function to test case insensitive (except special Unicode characters) string comparison.
// Input ( String String) -> ('abcd', 'AbcD')
// Output Boolean -> true
// ('ABCD', 'Abce') -> false
function caseins(str1, str2) {
  var Ustr2 = str2.toUpperCase();
  var Ustr1 = str1.toUpperCase();

}