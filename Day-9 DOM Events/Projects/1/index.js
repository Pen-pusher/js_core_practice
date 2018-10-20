//Select the section with an id of container without using querySelector.
var cont1 = document.getElementById("container");

//Select the section with an id of container using querySelector.
var cont2 = document.querySelector("#container");

//Select all of the list items with a class of "second".
var secondlist = document.getElementsByClassName('second');


//Select a list item with a class of third, but only the list item inside of the ol tag.
var olthird = document.querySelector('ol .third');


//Give the section with an id of container the text "Hello!".
cont1.innerHTML += "Hello!" + " " 


//Add the class main to the div with a class of footer.
var footer = document.querySelector('.footer');
footer.classList.add("main");

//Remove the class main on the div with a class of footer.
footer.classList.remove("main");

//Create a new li element.
var li = document.createElement("LI");



//Give the li the text "four".
li.innerText = "four";


//Append the li to the ul element.
var ul = document.querySelector('ul');
ul.appendChild(li);


//Loop over all of the list inside the ol tag and give them a background color of "green".
var olli = document.querySelectorAll("ol li")

olli.forEach(i => {
  i.style.background = "green"; 
});
//Remove the div with a class of footer.
footer.remove();