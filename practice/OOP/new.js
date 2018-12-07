
function createStud(a, b, c) {

  this.marks = {};
  this.marks.physics = a;
  this.marks.chemistry = b;
  this.marks.biology = c;
    }
  createStud.prototype.say = function () {
    var sum = 0;
    for (const key in this.marks) {
      sum += this.marks[key];
    }
    return sum;
  }

  
