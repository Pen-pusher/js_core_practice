const inputText = document.getElementById('input');
const outputBox = document.getElementById('output');
const form = document.getElementById('form');
const base =document.getElementById('base');
const counter = document.getElementById('counter');
let mainList = JSON.parse(localStorage.getItem('toDoListData'))  || [];
let liveList = JSON.parse(localStorage.getItem('liveList')) || 0;
var htmlList = [];
let countActive = 0;


// ------------GENERAL FUNCTIONS-------

function updtStorage() {
  console.log('upd');
  localStorage.setItem('toDoListData', JSON.stringify(mainList));
  cnvrtToHTML();
}

function cnvrtToHTML() {
  console.log('cvt');
  htmlList = mainList.map((v, i) => {
    return (
      `<li class="list-item" >
        <div>
          <input type="checkbox" class="check" data-id="${i}" ${v.done ? "checked":''}>
          <span ${!v.done ? `class="list-text"` :`class="list-text strike"`}>${v.task}</span>
        </div>
        <div>
          <button class="edit" data-id="${i}">edit</button>
          <button class="delete" data-id="${i}">delete</button>
        </div>
      </li>`
    )
  });
  statusList(htmlList);
  // rndrTodo(htmlList);
}

function statusList(arr) {
  console.log('status');
  let checkedList = arr.filter( (v,i) => (mainList[i].done == true) );
  let unCheckedList = arr.filter((v, i) => (mainList[i].done == false) );
  countActive = unCheckedList.length;
  // console.log(checkedList);
  // console.log(unCheckedList);
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
  console.log('clr');
  var newList = mainList.filter((v) => v.done == false);
  mainList = newList;
  updtStorage();
}
function baseAction(e) {
  console.log('bsAct');
  console.log(e);
  if(e.target.classList.contains('all')) {
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
  console.log('addTodo');
  e.preventDefault();
  if (!inputText.value) return;
  let itemObj = {
    task : "",
    done : false
  }
  itemObj.task = inputText.value;
  mainList.push(itemObj);
  // rndrTodo ();
  updtStorage();
  this.reset();
}

//display main data array
function rndrTodo(arr) {
  console.log('rndr');
  outputBox.innerHTML = '';
  arr.forEach(v => {
    outputBox.innerHTML += v;
  });
  counter.innerText = `Active : ${countActive}`;
}


// --------REMOVE FUNCTION(delet)--------
function dltTodo(e) {
  console.log('dlt');
  if (e.target.classList.contains('delete')) {
    var delIndex = Number(e.target.dataset.id);
    mainList.splice(delIndex, 1);
    updtStorage();  
  }
}
//======LIST BTN ACTION=====
function btnAction(e) {
  console.log('btnAct');
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
  console.log('edit');
  var editstr = (
    `<li class="list-item" >
        <input id = "edit" type="text" placeholder = ${mainList[index].task}>
        <button class="done" data-id="${index}">done</button>
      </li>`
  );
  var newList = htmlList.map((v,i) => {
    if(index == i) {
      return editstr;
    } else return v;
  });
  rndrTodo(newList);
}

updtStorage();

outputBox.addEventListener('click', btnAction);
form.addEventListener("submit", addTodo);
base.addEventListener("click", baseAction);
