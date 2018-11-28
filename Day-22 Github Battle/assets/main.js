const btn1 = document.getElementById('play1button');
const btn2 = document.getElementById('play2button');
let playerOne; // will store player 1 object here
let playerTwo; // will store player 2 object here
count = 0;

function printData1(user) {
  //for player 1
  //to print data on screen what we get from fetching
  playerOne = user; //storing user obj to global player
  play1sec1.textContent = `${user.name}` //print name
  play1sec2.innerHTML = `<img src=${user.avatar_url}>`; //print photo
  play1sec3.innerHTML = `
    <p> followers: ${user.followers} </p>
    <p> following: ${user.following}</p>
    <p> public repos: ${user.public_repos} </p> `
    count++; //just for battle btn display
    battleBtn();
}
function printData2(user) {
  //same as for player 1
  playerTwo = user;
  play2sec1.textContent = `${user.name}`
  play2sec2.innerHTML = `<img src=${user.avatar_url}>`;
  play2sec3.innerHTML = `
    <p> followers: ${user.followers} </p>
    <p> following: ${user.following}</p>
    <p> public repos: ${user.public_repos} </p> `
  count++; //just for battle btn display
  battleBtn();
}
function battleBtn() {
  if(count == 2){ //if both player property are fetched
    btlBtnSec.classList.remove("none"); //then show battle button
  }
}


function ply1Fun() {
  //just for player 1
  //fetching data from github api then use PROMISE(THEN) and inside THEN call functions witch required fetch data(here the argument data in end of line is object of user uncomment the console log thing and you will get what obj it is)
  fetch(`https://api.github.com/users/${play1input.value}`).then(d => d.json()).then(data => {/*console.log(data);*/ printData1(data)});
}
function ply2Fun() {
  //for player 2
  //same as player 1
  fetch(`https://api.github.com/users/${play2input.value}`).then(d => d.json()).then(data => printData2(data));
}
function battle() {
  //comparing both player score
  //score = no of repo + (2 X followers) 
  let p1Score = playerOne.public_repos + (playerOne.followers * 2); //player 1 score
  if(isCreator(playerOne)) p1Score = 1000; //just for fun no use for this
  let p2Score = playerTwo.public_repos + (playerTwo.followers * 2); //player 2 score
  if (isCreator(playerTwo)) p2Score = 1000; //just for fun no use for this
  btlBtnSec.innerHTML = `<h4>${playerOne.name} score : ${p1Score}</h4>
                      <h4>${playerTwo.name} score : ${p2Score}</h4> `
  if(p1Score > p2Score){
    btlBtnSec.innerHTML += `<h2> WINNER is ${playerOne.name}</h2>`
  }else {
    btlBtnSec.innerHTML += `<h2> WINNER is ${playerTwo.name}</h2>`
  }
}
function isCreator(x){ //just for fun No use

  if (x.login == "klassynihal"){
    return true;
  } 
  return false;
}

btn1.addEventListener('click', ply1Fun); //button on player 1
btn2.addEventListener('click', ply2Fun); //button on player 2
btlBtn.addEventListener('click',battle); //battle btn