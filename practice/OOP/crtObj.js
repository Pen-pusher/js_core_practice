let objFunction = {
  total: function () {
    var sum = 0;
    for (const key in this.marks) {
      sum += this.marks[key];
    }
    return sum;
  },
  percent: function () {
    return ((this.total() / (Object.keys(this.marks).length * 50)) * 100);
  },
  passOrFail: function () {
    return (this.percent() < 50) ? false : true;
  }
}
function createStud(a, b, c) {
  let student = Object.create(objFunction);
  student.marks = Object.create(null);
  student.marks.physics = a;
  student.marks.chemistry = b;
  student.marks.biology = c;
  return student;
}