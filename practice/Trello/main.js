var listInput = document.getElementById('inputbox');
var listCounter = 0;
var cardCounter = 0;


class Board{
  constructor(name,id){
    this.bName = name;
    this.bId = id;
    this.bListItems = [];
  }
  createList(name,id){
    var newList = new List(name,id,this.bName);
    this.bListItems.push(newList);
    return newList;
  }
  eventListner(){
    var nameL = listInput.value;
    this.createList(nameL,listCounter++);

  }
}
class List{
  constructor(name,id,board){
    this.lName = name;
    this.lId =id;
    this.lBordName = board;
    this.lCardList=[];
  }
  createCard(value,id) {
    newCard = new Cards(value,id)
    this.lCardList.push(newCard);
    return newCard;
  }

}
class Cards{
  constructor(value ,id){
    this.cValue = value ;
    this.cId = id;
  }
}

tBoard = new Board("trello","b1");
inputBtn.addEventListener("click", tBoard.eventListner.bind(tBoard))
