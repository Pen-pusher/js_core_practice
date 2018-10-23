// Change the background color of box1 to 'orange'
var box1 = document.getElementById('box1');
box1.style.background = 'red';


// set the font size in box1s to 44px
var box1s = document.getElementById('box1s');
box1s.style.fontSize = '44px';


// shrink box2 by half
var box2 = document.getElementById('box2');
var box2width = Number(box2.clientWidth);
var box2height = Number(box2.clientHeight);
box2height = box2height / 2;
box2width = box2width / 2;
box2.style.width = box2width + "px";
box2.style.height = box2height + "px";


// double the size of box2s
var box2s = document.getElementById('box2s');
var box2swidth = Number(box2s.clientWidth);
var box2sheight = Number(box2s.clientHeight);
box2sheight = box2sheight * 2;
box2swidth = box2swidth * 2;
box2s.style.width = box2swidth + "px";
box2s.style.height = box2sheight + "px";



// put a circle in the middle of box3 use the class named 'circle' you need to add <div class="circle"></div> in the innerHTML of the box
// **using .innerHTML**
var box3node = document.querySelector('#box3');
box3node.innerHTML += `<div class="circle"></div>`;



// **using .appendChild()**
var circleDiv = document.createElement("div");
circleDiv.setAttribute("class","circle");

box3node.appendChild(circleDiv);


//remove the circle from box3s
// **using .innerHTML**
box3s.innerHTML = " ";

// **using .removeChild()**
box3node.removeChild(circleDiv);



// write a function for #box5 called clearFinished that will remove all the chores in the list that have the class "done".
function clearFinished () {
  var listItems = document.querySelectorAll('#box5 ul li');
  listItems.forEach(v => { if (v.classList.contains('done')) v.style.display = "none"; })
}



//write a function for #box5 that takes all the completed chores and moves them to #box5s
  var listItems = document.querySelectorAll('#box5 ul li');
  listItems.forEach(v => { if (v.classList.contains('done') ) box5s.appendChild(v)});
  


// write a function called addChore that adds a new item to the list of chores, giving it the class "undone."
function addChore(str) {
  var bux5ul = document.querySelector('#box5 ul')
  var chore = `<li class="chore undone">${str} (undone)</li>`;
  bux5ul.innerHTML += chore;
}

  //do this task using the .appendChild() or innerHTML


//reverse the text in #box6
function rev6() {
  var str = document.querySelector('#box6 p').textContent;
  str = str.split("").reverse().join("");
  document.querySelector('#box6 p').textContent = str;  
}

// put <em></em> tags around the word "keep" in #box6s
function ital6s() {
  var str = document.querySelector('#box6s p').textContent;
  var arr = str.split(" ");
  var newArr = arr.map(v => { 
    if (v == "keep") {
      return `<em>${v}</em>` 
    } else 
      return v;
  });
  str = newArr.join(" ");
  document.querySelector('#box6s p').innerHTML = str;
}

