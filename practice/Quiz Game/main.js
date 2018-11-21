const qtext = document.getElementById('qText'); //where i want to out my question
const optbox = document.getElementById('optionBox'); //the whole UL where option will render
const qwin = document.querySelector(".questionWindow"); //the whole window for question + section (needed as after quiz end i want this window to vanish)
const rwin = document.querySelector(".resultWindow"); //whole result window needed in end of quiz
const rtext = document.getElementById("rText"); //score text

// Question object 
class Question {
  constructor(questStr, optionArray, correctAns) {
    this.questText = questStr; //question text
    this.choice = optionArray; //array of choices
    this.ans = correctAns;    // correct ans from choices
  }
}
// four set of questions object in form of array 
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
    this.score = 0; //score counter
    this.questions = ques; //the array of questions object is passed and stored here
    this.currentIndex = 0; //current question counter
  }

  //the initial screen is in html(catogory one) as someone click any catagory it initially goes to ansClick function



//function to render question and choices on screen
  qScreen() {
    if (this.quizEnd()) { //if quiz end render scorescreen
      this.scoreScreen();
    } else {
      qwin.classList.remove("none"); //if this question screen is display none remove none prop.
      rwin.classList.add("none"); //display none score screen
      var q = this.questions[this.currentIndex];
      //just rendering additional things using IDs from HTML (not important)
      qIndex.innerText = `Question no. ${this.currentIndex + 1}`;
      qtext.innerText = q.questText; // render question
      qCurrent.innerText = ` Question No. ${this.currentIndex + 1} of ${this.questions.length}`;
      optbox.innerHTML = "";
      // render Choices array
      q.choice.forEach((v, i) => {
        optbox.innerHTML += `
        <li>
          <p>${v}</p> <button data-ansID="${i}" class='button-primary'>select</button>
        </li >
        `
      });
    }
  }
  // print score screen
  scoreScreen() {
    rwin.classList.remove("none");
    qwin.classList.add("none");
    rtext.innerText = this.score;
  }

  // function from event listner is button is clicked
  ansClick(e) {
    //if button is from catogry window
    if (e.target.classList.contains("strBtn")) {
      if (e.target.classList.contains("capital")) {
        this.questions = capital; //if capital is clicked change question object array in Quiz.questions
      }
      if (e.target.classList.contains("science")) {
        this.questions = science; //same
      }
      if (e.target.classList.contains("IT")) {
        this.questions = IT; //same
      }
      this.qScreen(); //print question screen
    }

    //else if button clicked from question window
    if (e.target.classList.contains("button-primary")) {
      e.preventDefault();
      if (this.isCorrectAns(e)) { //if correct ans increase score
        this.score++
      };
      this.currentIndex++; //increase current question number
      this.qScreen(); 
    }
  }
  //function to check if quiz end or not
  // if current question is same as length of all question(total no of question)
  quizEnd() {
    if (this.currentIndex >= this.questions.length) {
      return true;
    } else return false;
  }
  //function to check if correct ans
  isCorrectAns(e) {
    let index = e.target.dataset.ansid; //retrive button index
    if (this.questions[this.currentIndex].choice[index] == this.questions[this.currentIndex].ans) return true; //if choice on that button index is same as answer value
    return false;
  }
}
var newQuiz = new Quiz(color);
// newQuiz.qScreen();

optbox.addEventListener("click", newQuiz.ansClick.bind(newQuiz)); //every button will this only event handler