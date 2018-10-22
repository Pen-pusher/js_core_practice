let btn = document.getElementById('btn');
let inputInfo = document.getElementById('input');
let outputbox = document.getElementById('output');
var trueList = [];


function renderFunc() {
  outputbox.innerHTML = '';
  trueList.map( (v,i) =>
    {
    let trueObj = v;
    let checked = v.checked;
    let renderStr ="";
    if(v.checked) {
      renderStr = (`<input type = "checkbox" class = "check" data-id = "${i}" checked> <p data-id = "${i}" class = "checktrue"> ${trueObj.listItem}</p> <button class="btn">del</button>`)
    } else {
      renderStr = (`<input type = "checkbox" class = "check" data-id = "${i}"> <p data-id = "${i}" > ${trueObj.listItem}</p> <button class="btn" data-id="${i}">del</button>`)
    }
    let li = document.createElement("LI");
    li.innerHTML = renderStr;
    outputbox.appendChild(li);
    return ;
  }
  )
}

function addFunc() {
  let trueObj = {}
  if (inputInfo.value) {
    trueObj.listItem = inputInfo.value;
    trueObj.checked = false;
    trueList.push(trueObj);
    renderFunc();
  }
  inputInfo.value = '';
}

// deletFunc() {

// }

function keyd(event) {
  if (event.keyCode == 13) {
    addFunc();
  }
}

function updateFunc(e) {
  if(e.target.classList.contains('btn') ) {
    var delIndex = Number(e.target.dataset.id);
    trueList.splice(delIndex,1);
  }
  if(e.target.classList.contains('check') ) {
    var checkIndex = Number(e.target.dataset.id);
    trueList[checkIndex].checked = e.target.checked;
    // console.log(e.target.checked);
  }
  renderFunc();
}
function checkFunc() {

}

outputbox.addEventListener('click', updateFunc)

btn.addEventListener("click", addFunc);
inputInfo.addEventListener("keydown", keyd);