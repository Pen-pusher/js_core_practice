const input = document.querySelector('.input');
const addBtn = document.querySelector('.add');
const output = document.querySelector('.output');
var arrList = [];

function addItem() {
  output.innerHTML +=`<li class="draggable" draggable="true">${input.value}</li>`;
}



addBtn.addEventListener("click",addItem);