function createStud(a,b,c) {
  student = {
    marks: {
      maths: a,
      chem: b,
      phy: c,
    },
    total: function () {
      var sum = 0;
      for (const key in this.marks) {
        sum += this.marks[key];
      }
      return sum;
    },
    percent: function () {
      return ((this.total() / (Object.keys(student.marks).length * 50)) * 100);
    },
    passOrFail: function () {
      return (this.percent() < 50) ? false : true;
    }
  }
  return student;
}