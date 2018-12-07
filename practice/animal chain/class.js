class JanvarCreater {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`i can eat`);
  };
  move() {
    console.log(`i can move`);
  }
}

// VEG++++++++++++++++++++++++++++++++++++++++++++=
class ShakahariJanvar extends JanvarCreater {
  constructor(name, age, dom) {
    super(name, age);
    this.dom = Boolean(dom);
  }
  eatGrass() {
    console.log(`i can eat ghaas`);
  };
  domestic() {
    console.log((this.dom) ? `I'm a Paltu Jaanvar` : `Not a Paltu`);
  };
}
// NonVEG++++++++++++++++++++++++++++
class MaasahariJanvar extends JanvarCreater {
  constructor(name, age, hunt) {
    super(name, age);
    this.hunt = Boolean(hunt);
  }
  eatFlesh() {
    console.log(`i like Mutton`);
  }
  sheekari() {
    console.log((this.dom) ? `aai aaim a HUNTER` : `Not a Sheekari`);
  }
}
// Animals VEG=========================================
class RabbitCreator {
  constructor(name, age, dom) {
    super(name, age, dom);
  }
  about() {
    console.log(`i am a Khargosh and i Jump`);
  }
}
class CowCreator {
  constructor(name, age, dom) {
    super(name, age, dom);
  }
  about() {
    console.log(`i am a cow and i provide DooDh`);
  }
}
class DonkeyCreator {
  constructor(name, age, dom) {
    super(name, age, dom);
  }
  about() {
     console.log(`i am a Gadha and i carry Load`);
  }
}