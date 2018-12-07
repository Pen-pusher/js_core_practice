student = {
  marks : {
    maths : 50,
     chem : 39,
      phy : 48,
  },
  total : function() {
    var sum = 0;
    for (const key in student.marks) {
      sum += student.marks[key];
      }
    return sum;
  },
  percent : function () {
    return ((student.total() / (Object.keys(student.marks).length * 50)) * 100);
  },
  passOrFail:function () {
    return (student.percent() < 50) ? false : true; 
  }
}