function JanvarCreater(name,age) {
  var newAnimal = Object.create(janvarFunc);
  newAnimal.name = name;
  newAnimal.age = age;
  return newAnimal;
}
var janvarFunc = {
  eat : function () {
    console.log(`i can eat`);
  },
  move: function () {
    console.log(`i can move`);
  }
}
// VEG+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function ShakahariJanvar(name, age , dom) {
  var newShakahari = JanvarCreater(name, age);
  Object.setPrototypeOf(newShakahari,shakahariFunc);
  newShakahari.dom = Boolean(dom);
  return newShakahari;
}
var shakahariFunc = {
  eatGrass: function () {
    console.log(`i can eat ghaas`);
  },
  domestic: function () {
    console.log((this.dom) ? `I'm a Paltu Jaanvar` : `Not a Paltu`);
  }
}
Object.setPrototypeOf(shakahariFunc,janvarFunc);
// NONVEG============================================================
function MaasahariJanvar(name, age, hunt) {
  var newMaasahari = JanvarCreater(name, age);
  Object.setPrototypeOf(newMaasahari, MaasahariFunc);
  newMaasahari.hunt = Boolean(hunt);
  return newMaasahari;
}
var MaasahariFunc = {
  eatFlesh: function () {
    console.log(`i like Mutton`);
  },
  sheekari: function () {
    console.log((this.dom) ? `aai aaim a HUNTER` : `Not a Sheekari`);
  }
}
Object.setPrototypeOf(MaasahariFunc, janvarFunc);

// ANIMALS=VEG=====================================================

function RabbitCreator(name, age, dom) {
  var newRabbit = ShakahariJanvar(name, age,dom);
  Object.setPrototypeOf(newRabbit, rabbitFunc);
  return newRabbit;
}
var rabbitFunc = {
  about: function () {
    console.log(`i am a Khargosh and i Jump`);
  }
}
Object.setPrototypeOf(rabbitFunc, shakahariFunc);

function CowCreator(name, age, dom) {
  var newCow = ShakahariJanvar(name, age, dom);
  Object.setPrototypeOf(newCow, cowFunc);
  return newCow;
}
var cowFunc = {
  about: function () {
    console.log(`i am a cow and i provide DooDh`);
  }
}
Object.setPrototypeOf(cowFunc, shakahariFunc);

function DonkeyCreator(name, age, dom) {
  var newDonkey = ShakahariJanvar(name, age, dom);
  Object.setPrototypeOf(newDonkey, donkeyFunc);
  return newDonkey;
}
var donkeyFunc = {
  about: function () {
    console.log(`i am a Gadha and i carry Load`);
  }
}
Object.setPrototypeOf(donkeyFunc, shakahariFunc);

// Animal===NONVEG====================================
function DogCreator(name, age, hunt) {
  var newDog = MaasahariJanvar(name, age, hunt);
  Object.setPrototypeOf(newDog, dogFunc);
  return newDog;
}
var dogFunc = {
  about: function () {
    console.log(`i am a kutta and i bark`);
  }
}
Object.setPrototypeOf(dogFunc, MaasahariFunc);

function LionCreator(name, age, hunt) {
  var newLion = MaasahariJanvar(name, age, hunt);
  Object.setPrototypeOf(newLion, lionFunc);
  return newLion;
}
var lionFunc = {
  about: function () {
    console.log(`i am a lion and i am Lazy`);
  }
}
Object.setPrototypeOf(lionFunc, MaasahariFunc);

function TigerCreator(name, age, hunt) {
  var newTiger = MaasahariJanvar(name, age, hunt);
  Object.setPrototypeOf(newTiger, tigerFunc);
  return newTiger;
}
var tigerFunc = {
  about: function () {
    console.log(`i am a Tiger and i am getting extinct`);
  }
}
Object.setPrototypeOf(tigerFunc, MaasahariFunc);
