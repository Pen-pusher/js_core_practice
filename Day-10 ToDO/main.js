let btn = document.getElementById('btn');
let inputInfo = document.getElementById('input');
let outputbox = document.getElementById('output');
var toDoList = [];

// -----------------DISPLAY FUNCTION-----------
function renderFunc() {
  outputbox.innerHTML = '';
  toDoList.map( (v,i) => {
    let toDoObj = v;
    let checked = v.checked;
    let renderStr ="";
    if(v.checked) {
      renderStr = (`<input type = "checkbox" class = "check" data-id = "${i}" checked> <p data-id = "${i}" class = "checktrue"> ${toDoObj.listItem}</p> <button class="btn">del</button>`)
    } else {
      renderStr = (`<input type = "checkbox" class = "check" data-id = "${i}"> <p data-id = "${i}" > ${toDoObj.listItem}</p> <button class="btn" data-id="${i}">del</button>`)
    }
    let li = document.createElement("LI");
    li.innerHTML = renderStr;
    outputbox.appendChild(li);
    return ;
  });
}

// ------ADD TO ARRAY FUNCTION---------
function addFunc() {
  let toDoObj = {}
  if (inputInfo.value) {
    toDoObj.listItem = inputInfo.value;
    toDoObj.checked = false;
    toDoList.push(toDoObj);
    renderFunc();
  }
  inputInfo.value = '';
  return ;
}

// --------UPDATE FUNCTION(delet & Check)--------
function updateFunc(e) {
  if(e.target.classList.contains('btn') ) {
    var delIndex = Number(e.target.dataset.id);
    toDoList.splice(delIndex,1);
  }
  if(e.target.classList.contains('check') ) {
    var checkIndex = Number(e.target.dataset.id);
    toDoList[checkIndex].checked = e.target.checked;
  }
  renderFunc();
}

function keyDown(event) {
  if (event.keyCode == 13) {
    addFunc();
  }
}

outputbox.addEventListener('click', updateFunc);
btn.addEventListener("click", addFunc);
inputInfo.addEventListener("keydown", keyDown);