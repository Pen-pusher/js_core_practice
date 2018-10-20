var btn = document.getElementById('btn');
var inputInfo = document.getElementById('input');
var outputbox = document.getElementById('output');

function addfun() {
  console.log("clicked");
  if (inputInfo.value){
    var value = inputInfo.value;
    var li = document.createElement('li');
    var span = document.createElement('SPAN');
    span.innerText = value;
    li.appendChild(span);
    outputbox.appendChild(li);
  }
    inputInfo.value = '';  
}
function keyd(event) {
  if(event.keyCode == 13) {
    addfun();
  }
}
btn.addEventListener("click", addfun);
window.addEventListener("keydown",keyd);