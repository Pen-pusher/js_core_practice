const qtext = document.getElementById('qText');
const optbox = document.getElementById('optionBox');
const qwin = document.querySelector(".questionWindow");
const rwin = document.querySelector(".resultWindow");
const rtext = document.getElementById("rText");


class Question {
  constructor(questStr, optionArray, correctAns) {
    this.questText = questStr;
    this.choice = optionArray;
    this.ans = correctAns;
  }
  // isCorrectAns(e) {
  //   if (!e.target) {
  //     if (e == this.correctAns) return true;
  //   } else {
  //     let index = e.target.dataset.ansId;
  //     if (this.choice[index] == correctAns) return true;
  //   }
  //   return false;
  // }
}


var color = [
  new Question("what is color of taj mahal", ["red", "green", "white"], "white"),
  new Question("what is color of red fort", ["red", "green", "purple", "hsdfkj"], "red"),
  new Question("what is color of pochi", ["red", "black&brown", "purple"], "black&brown"),
  new Question("what is the color of blood", ["red", "purple"], "red"),
  new Question("what is color of pishta", ["red", "green", "purple"], "green"),
  new Question("what is color of red fort", ["red", "purple"], "red"),
];
var IT = [
  new Question("First computer virus is known as ", ["Rabbit", "Creeper Virus", "Elk Cloner"], "Creeper Virus"),
  new Question("Number of bit used by the IPv6 address", ["32 bit", "64 bit", "128 bit", "256 bit"], "128 bit"),
  new Question("what is color of pochi", ["red", "black&brown", "purple"], "black&brown"),
  new Question("what is the color of blood", ["red", "purple"], "red"),
];
var capital = [
  new Question("What is the capital of the USA", ["New York", "Washington DC"], "Washington DC"),
  new Question("What is the capital of AUSTRALIA", ["Sydney", "green", "Canberra"], "Canberra"),
  new Question("What is the capital of BRAZIL", ["Brasilia", "black&brown", "Rio DE Janeiro"], "Brasilia"),

];
var science = [
  new Question("Which of the following is a non metal that remains liquid at room temperature", ["Phosphorous", "Bromine", "Chlorine", "Helium"], "Bromine"),
  new Question("Which of the following is used in pencils", ["Graphite", "Silicon", "Charcoal", "Phosphorous"],"Graphite"),
  new Question("The gas usually filled in the electric bulb is", ["nitrogen", "hydrogen", "carbon dioxide"], "nitrogen"),
  new Question("Which of the gas is not known as green house gas", ["Methane", "Nitrous oxide", "Carbon dioxide", "Hydrogen"], "Hydrogen"),
];


class Quiz {
  constructor(ques) {
    this.score = 0;
    this.questions = ques;
    this.currentIndex = 0;
  }
  // renderDisplay() {
  //   if (this.quizEnd()) {
  //     this.scoreScreen();
  //     return;
  //   }
  // }

  qScreen() {
    if (this.quizEnd()) {
      console.log("done");
      this.scoreScreen();
    } else {
      qwin.classList.remove("none");
      rwin.classList.add("none");
      var q = this.questions[this.currentIndex];
      console.log(q, "string");
      qtext.innerText = q.questText;
      optbox.innerHTML = "";
      qCurrent.innerText = ` Question No. ${this.currentIndex + 1} of ${this.questions.length}`;
      qIndex.innerText = `Question no. ${this.questions.length}`;
      q.choice.forEach((v, i) => {
        optbox.innerHTML += `
        <li>
          <p>${v}</p> <button data-ansID="${i}" class='button-primary'>select</button>
        </li >
        `
      });
    }
  }
  scoreScreen() {
    rwin.classList.remove("none");
    qwin.classList.add("none");
    rtext.innerText = this.score;
  }
  ansClick(e) {

    if (e.target.classList.contains("strBtn")) {
      if (e.target.classList.contains("capital")) {
        this.questions = capital;
      }
      if (e.target.classList.contains("science")) {
        this.questions = science;
      }
      if (e.target.classList.contains("IT")) {
        this.questions = IT;
      }
      this.qScreen();
    }
    if (e.target.classList.contains("button-primary")) {
      e.preventDefault();
      if (this.isCorrectAns(e)) {
        this.score++
      };
      this.currentIndex++;
      this.qScreen();
    }
  }
  quizEnd() {
    if (this.currentIndex >= this.questions.length) {
      return true;
    } else return false;
  }
  isCorrectAns(e) {
    let index = e.target.dataset.ansid;
    if (this.questions[this.currentIndex].choice[index] == this.questions[this.currentIndex].ans) return true;
    return false;
  }
}
var newQuiz = new Quiz(color);
// newQuiz.qScreen();

// optbox.onclick = this.ansClick.bind(this);
optbox.addEventListener("click", newQuiz.ansClick.bind(newQuiz));