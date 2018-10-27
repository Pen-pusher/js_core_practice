// =================
// ---STYLING-------
// =================
var back = document.querySelector(".container");
var randoms = Math.floor((Math.random() * 19) + 1 );
back.style.background = `url("../img/B${randoms}.jpg")`;
back.style.backgroundSize = 'cover';



// =================
// ------CLOCK------
// =================
var clock = document.getElementById('clock');
var greeting ='';

function setClock() {
  const now = new Date();
  const sec = now.getSeconds();
  const mins = now.getMinutes();
  const hour = now.getHours();

  clock.innerText = `${hour}:${mins}:${sec}`;
  if ( (hour > 4) && (hour < 12) ) greeting = "Good Morning, ";
  if ((hour >= 12) && (hour < 17)) greeting = "Good AfterNoon, ";
  if ((hour >= 17) && (hour < 21)) greeting = "Good Evening, ";
  if (((hour >= 21) && (hour <= 24)) || ((hour >= 0) && (hour <= 4)) ) greeting = "Good Night, ";
}
setInterval(setClock, 1000);
setClock();

// =================
// ------GREET----
// ==================
var getName = document.getElementById('name');
var greet = document.getElementById('greet');
var nameFlag = true;
var name = localStorage.getItem('extName') || "";
var prompt = document.querySelector('.prompt');

function nameGreeter() {
  if(! name) {
    name = getName.value;
    localStorage.setItem('extName',name);
  }
  greet.innerText = `${greeting} ${name}`;
    prompt.style.display = "none"; 
}
if (name) {
  nameGreeter();
}
getName.addEventListener("keydown", event => {
  if (event.keyCode === 32 || event.keyCode === 13 ) {
    nameGreeter();
  }
});
setInterval(10000,nameGreeter);


// =================
// ------Quotes----
// ==================

var quote = document.querySelector(".quotes");
var author = document.querySelector(".author");
var quotebox = document.querySelector(".quote-section") 


function changeQuote() {
  var q = quotes[random()];
  quote.innerHTML = `<i class="fas fa-quote-left"></i>  ${q.quote}  <i class="fas fa-quote-right"></i>` ;
  author.innerHTML = "- " + q.author;
}



function random() {
  var i = Math.floor(Math.random() * quotes.length);
  return i;
}
setInterval(50000, changeQuote);
changeQuote();
quotebox.addEventListener("click", changeQuote)

// =================
// ------ToDos------
// =================

var todoInput = document.getElementById('todoInput');
var todoOutput = document.getElementById('todoOutput');

const form = document.getElementById('form');
const base = document.getElementById('base');
const counter = document.getElementById('counter');
let mainList = JSON.parse(localStorage.getItem('toDoListExtension')) || [];
let liveList = JSON.parse(localStorage.getItem('liveList')) || 0;
var htmlList = [];
let countActive = 0;


// ------------GENERAL FUNCTIONS-------

function updtStorage() {
  localStorage.setItem('toDoListExtension', JSON.stringify(mainList));
  cnvrtToHTML();
}

function cnvrtToHTML() {
  htmlList = mainList.map((v, i) => {
    return (
      `<li class="list-item" >
        <div>
          <input type="checkbox" class="check" data-id="${i}" ${v.done ? "checked" : ''}>
          <span ${!v.done ? `class="list-text"` : `class="list-text strike"`}>${v.task}</span>
        </div>
        <div>
          <button class="lbtn edit" data-id="${i}"><i class="edit far fa-edit" data-id="${i}"></i></button>
          <button class="lbtn delete" data-id="${i}"><i class="fas fa-times delete" data-id="${i}"></i></button>
        </div>
      </li>`
    )
  });
  statusList(htmlList);

}

function statusList(arr) {
  let checkedList = arr.filter((v, i) => (mainList[i].done == true));
  let unCheckedList = arr.filter((v, i) => (mainList[i].done == false));
  countActive = unCheckedList.length;

  switch (liveList) {
    case 0:
      rndrTodo(htmlList);
      break;
    case 1:
      rndrTodo(checkedList);
      break;
    case 2:
      rndrTodo(unCheckedList);
      break;
    default:
      break;
  }
}
function clearComplete() {
  var newList = mainList.filter((v) => v.done == false);
  mainList = newList;
  updtStorage();
}
function baseAction(e) {
  if (e.target.classList.contains('all')) {
    liveList = 0;
  }
  if (e.target.classList.contains('active')) {
    liveList = 2;
  }
  if (e.target.classList.contains('complete')) {
    liveList = 1;
  }
  if (e.target.classList.contains('clrBtn')) {
    clearComplete();
    return;
  }
  localStorage.setItem('liveList', JSON.stringify(liveList));
  statusList(htmlList);
}


//add input box value to main data array
function addTodo(e) {
  e.preventDefault();
  if (!todoInput.value) return;
  let itemObj = {
    task: "",
    done: false
  }
  itemObj.task = todoInput.value;
  mainList.push(itemObj);
  // rndrTodo ();
  updtStorage();
  this.reset();
}

//display main data array
function rndrTodo(arr) {
  todoOutput.innerHTML = '';
  arr.forEach(v => {
    todoOutput.innerHTML += v;
  });
  counter.innerText = `Active : ${countActive}`;
}


// --------REMOVE FUNCTION(delet)--------
function dltTodo(e) {
  if (e.target.classList.contains('delete')) {
    var delIndex = Number(e.target.dataset.id);
    mainList.splice(delIndex, 1);
    updtStorage();
  }
}
//======LIST BTN ACTION=====
function btnAction(e) {
  if (e.target.classList.contains('delete')) {
    var delIndex = Number(e.target.dataset.id);
    mainList.splice(delIndex, 1);
    updtStorage();
  }
  if (e.target.classList.contains('edit')) {
    var editIndex = Number(e.target.dataset.id);
    edit(editIndex);

    return;
  }
  if (e.target.classList.contains('check')) {
    var checkIndex = Number(e.target.dataset.id);
    mainList[checkIndex].done = e.target.checked;
    updtStorage();
  }
  if (e.target.classList.contains('done')) {
    var id = e.target.dataset.id;
    let edit = document.getElementById('edit');
    mainList[id].task = edit.value;
    updtStorage();
  }

}
//++++++++EDIT SECTION+++++++++
function edit(index) {
  var editstr = (
    `<li class="list-item" >
        <input id = "edit" type="text" placeholder = ${mainList[index].task}>
        <button class="done" data-id="${index}">done</button>
      </li>`
  );
  var newList = htmlList.map((v, i) => {
    if (index == i) {
      return editstr;
    } else return v;
  });
  rndrTodo(newList);
}

updtStorage();

todoOutput.addEventListener('click', btnAction);
form.addEventListener("submit", addTodo);
base.addEventListener("click", baseAction);
 



