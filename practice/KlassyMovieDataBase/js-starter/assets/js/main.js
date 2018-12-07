// import '../stylesheets/style.scss';
console.log('hello');
const ytsUrl = `https://yts.am/api/v2/list_movies.json?`;
console.log(ytsUrl);
var wishlist = [];
var searchArr = [];
const sort = document.getElementById('sort');
console.log(sort);

function dataGrab() {
  var query = `&query_term=${InputQuery.value}`;
  var rating = `&minimum_rating=${ratings.value}`;
  var sort = (sortid.value) ? `&sort_by=${sortid.value}` : '';
  var genre = (genreid.value) ? `&genre=${genreid.value}` : '';
  fetch(`${ytsUrl}${query}${genre}${sort}${rating}`).then(x => x.json()).then(d => {
    console.log(d);
    ; console.log(`${ytsUrl}${query}${genre}${sort}${rating}`); displayMovie(d.data.movies)
  })
}
function displayMovie(ytsObj) {
  searchArr = ytsObj;
  if (ytsObj.length == 0) {
    viewPort.innerHTML = `<h1>There is No Movies To show</h1><h2>Try Different Search Query</h2>`
    return;
  }
  viewPort.innerHTML = "";
  ytsObj.forEach((element, i) => {
    var x = `
    <div id="movie">
      <a href="#">
        <img src="${element.medium_cover_image}" alt="">
      </a>
      <div id="content">
        <a><h1 data-id="${element.id}">${element.title}</a><span> (${element.year})</span></h1>
        <p>${element.genres.join(", ")}</p>
        <p class="card-description">${element.summary}</p>`

    for (var i = 0; i < 10; i++) {
      if (i < element.rating) {
        x += ("<span class=star>★</span>");
      } else {
        x += '<span class="star nonrate">★</span>';
      }
    }
    x += `<button class="addWish" data-id ="${i}}">add to Wishlist</button>`
    x.concat(`</div></div>`)
    viewPort.innerHTML += x;
  });
  addListener(ytsObj);
}



function addListener(ytsObj){
  console.log("1");
  
  var wishbtn = document.querySelectorAll('.addwish');
  wishbtn.forEach(x => {
    x.addEventListener("click", addtoWishlist)
    console.log(x);
  });
}

function addtoWishlist(e){
  console.log('addwish')
  console.log(searchArr);
  
  wishlist.push(searchArr[e.target.dataset.id]);
}




search.addEventListener('click', dataGrab);
