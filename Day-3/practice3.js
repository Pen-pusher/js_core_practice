function AnimalTestUser(username, otherArgs) {
  var obj = {};
  obj.username = username;
  if (otherArgs) {
    obj.otherArgs.push(otherArgs);
  }
  return obj;
}
var testSheep = AnimalTestUser('CottonBall');
console.log(testSheep); //{ username: 'CottonBall' }

var testSheep = AnimalTestUser('CottonBall', { 'loves dancing': true }, [1, 2, 3]);
console.log(testSheep); //{ username: 'CottonBall', otherArgs: [ {'loves dancing': true}, [1,2,3] ] }

function AnimalCreator(username, species, tagline, noises) {
  this.username = username;
  this.species = species;
  this.noises = tagline;
  this.tagline = noises;
  this.friends = [];
}
var sheep =new AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);
console.log(sheep);
      // { username: 'Cloud',
      //  species: 'sheep',
      //  tagline: 'You can count on me!',
      //  noises: ['baahhh', 'arrgg', 'chewchewchew'],
      //  friends: []
      // }

function addFriend(obj1, obj2) {
  obj1.friends.push(obj2.username);
}