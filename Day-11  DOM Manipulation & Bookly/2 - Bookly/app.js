let btn = document.getElementById('addBtn');
let input = document.querySelector('#add-book input[type=text]');
let renderBox = document.querySelector('#book-list ul');
let hideChkBox = document.getElementById('hide');
let srchFltr = document.querySelector('#search-books input');
var bookList = JSON.parse(localStorage.getItem('bookListData')) || [];
var htmlList = [];

//-------------GENERAL FUNCTION------------
function updtStrg() {
  localStorage.setItem('bookListData', JSON.stringify(bookList));
  cnvrtToHTML();
}

function cnvrtToHTML() {
  htmlList = bookList.map((v, i) => {
    return (
      `<li>
        <span data-id="${i}" class="bookName"> ${v} </span>
        <button data-id="${i}" class="delete"> del </button>
      </li>`
    )
  });
}

updtStrg();
rndrBooks(htmlList);



// // -----------------DISPLAY FUNCTION-----------
function rndrBooks(booksArr = []) {
  renderBox.innerHTML = '';
  booksArr.forEach( v => {
    renderBox.innerHTML += v;
  });

}

// // ------ADD TO ARRAY FUNCTION---------
function addBook(e) {
  e.preventDefault();
  if (input.value) {
    bookList.push(input.value);
    updtStrg();
    rndrBooks(htmlList);
  }
  input.value = '';	
  return;
}

// --------REMOVE FUNCTION(delet)--------
function dltBook(e) {
  if (e.target.classList.contains('delete')) {
    var delIndex = Number(e.target.dataset.id);
    bookList.splice(delIndex, 1);
    updtStrg();
    rndrBooks(htmlList);
    srchFltr.value = "";
  }
}

// ------HIDE ALL BOOKS-------
function hideAllBooks(e) {
  var hddnArr = [];
  if (!e.target.checked) {
    hddnArr = htmlList;
  }
  rndrBooks(hddnArr);
}

// --------------SEARCH-------------
function srchBook(e) {
  var filter = e.target.value.toLowerCase();
  var fltrArr = htmlList.filter((v, i) => bookList[i].toLowerCase().includes(filter));
  rndrBooks(fltrArr); 
}

hideChkBox.addEventListener('click', hideAllBooks);
renderBox.addEventListener('click', dltBook);
btn.addEventListener("click", addBook );
srchFltr.addEventListener('keyup',srchBook);
