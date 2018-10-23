let btn = document.getElementById('addBtn');
let input = document.querySelector('#add-book input[type=text]');
let renderBox = document.querySelector('#book-list ul');
let hideChkBox = document.getElementById('hide');
var bookList = JSON.parse(localStorage.getItem('bookListData')) || [];

// // -----------------DISPLAY FUNCTION-----------
function rndrBooks() {
  // renderBox.innerHTML = '';
  bookList.forEach((v, i) => {
    let renderStr = (`<p data-id = "${i}" class = "bookName"> ${v}</p> <button class="delBtn">del</button>`);
    let li = document.createElement("LI");
    li.innerHTML = renderStr;
    console.log(li);
    renderBox.appendChild(li);
    console.log(renderBox);
    // return;
  });
  rndrBooks();
}
function updtStrg() {
  localStorage.setItem('bookListData', JSON.stringify (bookList));
}

// // ------ADD TO ARRAY FUNCTION---------
function addBook() {
  // if (input.value) {
    // bookList.push(input.value);
    // updtStrg();
    rndrBooks();
  // }
  // input.value = '';
  // return;
}

// // // --------REMOVE FUNCTION(delet)--------
// // function dltBook(e) {
// //   if (e.target.classList.contains('delBtn')) {
// //     var delIndex = Number(e.target.dataset.id);
// //     bookList.splice(delIndex, 1);
// //     updtStrg();
// //     rndrBooks();
// //   }
// // }
// // function hideAllBooks(e) {
// //   if (e.target.checked == true) {
// //     // renderBox.style.display = 'none';
// //   } else renderBox.style.display = 'block';
// // }

// --------------SEARCH-------------
function srchBook(e) {
  var Li = document.querySelectorAll("ul li");
  Li.forEach((v, i) => {
    if (!v.innerText.toLowerCase().includes(e.target.value)) {
      v.style.display = "none";
    } else {
      v.style.display = "block";
    }
  });
}

function keyDown(event) {
  if (event.keyCode == 13) {
    addBook();
  }
}
// // hideChkBox.addEventListener('click', hideAllBooks);
// renderBox.addEventListener('click', dltBook);
btn.addEventListener("click", addBook);
input.addEventListener("keydown", keyDown);