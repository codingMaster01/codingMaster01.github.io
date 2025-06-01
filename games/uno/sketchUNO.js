//Handling Players
class Player {
  constructor() {
    //Creating Hands
    this.hand = [];
  }
  takeTurn() {
    //Allowing Turns To Function
    let playableCards = this.getPlayableCards();
    if (playableCards.length > 0) {
      this.playCard(playableCards[0]);
    } else {
      this.drawCard();
    }
  }
  playCard(card) {
    let opp = reverse ? 3 - ((turn + 1) % 4) : (turn + 1)  % 4
    //Establishing Played Card
    let playCard = this.hand.splice(card, 1)[0];
    discard.push(playCard);
    //ALL SPECIAL CARDS
    //Reverse
    if (playCard.rank === "Reverse") {
      reverse = !reverse;
      turn++;
    }
    //Wilds
    if (playCard.suit === "wild") {
      let selected = window.prompt(
        "Select A Color from the choices: blue / green / yellow / red"
      );
      if (
        selected !== "blue" &&
        selected !== "yellow" &&
        selected !== "green" &&
        selected !== "red"
      ) {
        selected = window.prompt(
          "Not Applicable: Please Select Again From The Following Choices: blue / green / yellow / red"
        );
        if (
          selected !== "blue" &&
          selected !== "yellow" &&
          selected !== "green" &&
          selected !== "red"
        ) {
          selected = window.prompt(
            "Not Applicable: Please Try Again From The Following Choices: blue / green / yellow / red"
          );
          if (
            selected !== "blue" &&
            selected !== "yellow" &&
            selected !== "green" &&
            selected !== "red"
          ) {
            selected = window.prompt(
              "Not Applicable: Select Properly: blue / green / yellow / red"
            );
          }
        }
      }
      console.log(selected);
      playCard.suit = selected;
      //Plus 4
      if (playCard.rank === "Plus 4") {
        for (let x = 0; x < 4; x++) {
          let plus4 = shuffledDeck.splice(0, 1);
          Players[opp].hand.push(...plus4);
        }
        turn = turn + 1;
      }
    }
    //Plus2
    if (playCard.rank === "Plus 2") {
      for (let x = 0; x < 2; x++) {
        let plus2 = shuffledDeck.splice(0, 1);
        Players[opp].hand.push(...plus2);
      }
      turn = turn + 1;
    }
    //Skip
    if (playCard.rank === "Skip") {
      turn = turn + 1;
    }
  }
  drawCard() {
    //Establishing Drawn Cards
    if (this.hand.length === 0) {
    } 
    else {
      let drawCard = shuffledDeck.splice(Math.floor(Math.random()), 1);
      this.hand.push(...drawCard);
    }
  }
  getPlayableCards() {
    //Establishing Possible Plays
    let PlayableCards = [];
    for (let x = 0; x < this.hand.length; x++) {
      if (
        this.hand[x].suit === discard[discard.length - 1].suit ||
        this.hand[x].rank === discard[discard.length - 1].rank ||
        this.hand[x].suit === "wild"
      ) {
        PlayableCards.push(x);
      }
    }
    return PlayableCards;
  }
}

//Declaring Images
let img;
let img2;
function preload() {
  img = loadImage("assetsUNO/unocards.jpg");
  img2 = loadImage("assetsUNO/2022-11-03 3.55.24 PM.png");
}


//Creating Deck
class Card {
  constructor(col, num, row, column) {
    this.rank = num;
    this.suit = col;
    this.row = row;
    this.column = column;
  }
  show() {
    console.log(this.suit + " of " + this.rank);
  }
  display(x, y) {
    image(img, x, y, 44, 60.4, this.column * 32, this.row * 44, 32, 44);
  }
}

//Establishing Deck
let deck = [];
//Listing The Card Types
let numbers = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "Skip",
  "Reverse",
  "Plus 2",
];
let colors = ["red", "yellow", "green", "blue"];
let changeColor = [
  "Change Color",
  "Change Color",
  "Change Color",
  "Change Color",
];
let fours = ["Plus 4", "Plus 4", "Plus 4", "Plus 4"];
let wilds = ["wild"];
let reverse = false;

//Creating New Cards
//Creating Basic Numbered Cards
for (let col = 0; col < colors.length; col++) {
  for (let num = 0; num < numbers.length; num++) {
    deck.push(new Card(colors[col], numbers[num], col, num));
  }
}
for (let col = 0; col < colors.length; col++) {
  for (let num = 1; num < numbers.length; num++) {
    deck.push(new Card(colors[col], numbers[num], col, num));
  }
}
//The Wilds
//Changing Color
for (let col of wilds) {
  for (let num of changeColor) {
    let column = 0;
    let row = 4;
    deck.push(new Card(col, num, row, column));
  }
}
//Plus 4
for (let col of wilds) {
  for (let num of fours) {
    let column = 1;
    let row = 4;
    deck.push(new Card(col, num, row, column));
  }
}

//Shuffling The Deck
let shuffledDeck = [];
for (let i = 0; i < 108; i++) {
  let randCard = deck.splice(Math.floor(Math.random() * (108 - i)), 1);
  shuffledDeck.push(randCard[0]);
}

//ConsoleLogging The Shuffled Deck
for (let c of shuffledDeck) {
  c.show();
}

//Setup Function
function setup() {
  createCanvas(505, 400);
  drawingContext.imageSmoothingEnabled = false;
  //Establishing FrameRate
}

//Establishing Players
let Players = [];
for (let x = 0; x < 4; x++) {
  let card = shuffledDeck.splice(0, 7);
  Players.push(new Player());
  Players[x].hand.push(...card);
}
console.log(Players);

//Draw Function
function draw() {
  //Setting Background
  background(255);
  //Setting GameBoard
  image(img2, 0, 0, 500, 400);
  strokeWeight(1);
  textSize(15);
  text("Deck", 178, 260);
  text("Discard", 297, 260);
  fill(100, 120, 200);
  line(178, 265, 213, 265);
  line(297, 265, 347, 265);
  strokeWeight(3);
  stroke(0, 0, 255);
  line(110, 100, 0, 0);
  stroke(0, 255, 0);
  line(110, 300, 0, 400);
  stroke(255, 0, 0);
  line(395, 100, 505, 0);
  stroke(255, 255, 0);
  line(395, 300, 505, 400);
  stroke(0);
  line(110, 100, 110, 300);
  line(110, 100, 395, 100);
  line(395, 100, 395, 300);
  line(395, 300, 110, 300);
  
  //Displaying Shuffled Discard Deck
  for (let i = 0; i < shuffledDeck.length; i++) {
    shuffledDeck[i].display(i * 0.1 + 170, 180);
  }
  
  //Showing Dealed Cards
  for (let i = 0; i < Players[0].hand.length; i++) {
    if (Players[0].hand.length === 0) {
      break;
    }
    if (Players[0].hand.length >= 10) {
      y = 60;
      Players[0].hand[i].display(20, i * 15 + 60);
    } else {
      y = 100;
      Players[0].hand[i].display(20, i * 25 + 100);
    }
  }
  for (let i = 0; i < Players[1].hand.length; i++) {
    if (Players[1].hand.length === 0) {
      break;
    }
    if (Players[1].hand.length >= 10) {
      y = 60;
      Players[1].hand[i].display(450, i * 15 + 60);
    } else {
      y = 100;
      Players[1].hand[i].display(450, i * 25 + 100);
    }
  }

  for (let i = 0; i < Players[2].hand.length; i++) {
    if (Players[2].hand.length === 0) {
      break;
    }
    if (Players[2].hand.length >= 10) {
      y = 135;
      Players[2].hand[i].display(i * 15 + 105, 310);
    } else {
      Players[2].hand[i].display(i * 25 + 155, 310);
    }
  }
  for (let i = 0; i < Players[3].hand.length; i++) {
    if (Players[3].hand.length === 0) {
      break;
    }
    if (Players[3].hand.length >= 10) {
      Players[3].hand[i].display(i * 15 + 105, 30);
    } else {
      Players[3].hand[i].display(i * 25 + 155, 30);
    }
  }
  
  //Displaying Discard Pile
  for (let i = 0; i < discard.length; i++) {
    discard[i].display(i * 0.09 + 300, 180);
  }
}

//Establishing Start Of Discard Pile
let discard = [];
for (let x = 0; x < 9; x++) {
  if (
    shuffledDeck[x].rank !== "Change Color" &&
    shuffledDeck[x].suit !== "wild"
  ) {
    discard = shuffledDeck.splice(x, 1);
  }
  if (shuffledDeck[x].rank !== "Plus 4" && shuffledDeck[x].suit !== "wild") {
    discard = shuffledDeck.splice(x, 1);
  }
}

//Cycling Turns
let turn = 0
function mousePressed() {
  if (Players[0].hand.length === 0) {
    text("Player 1 Wins")
  }
  if (Players[1].hand.length === 0) {
    text("Player 2 Wins")
  }
  if (Players[2].hand.length === 0) {
    text("Player 3 Wins")
  } 
  if (Players[3].hand.length === 0) {
    text("Player 4 Wins")
  } 
  if (shuffledDeck.length === 0) {
    for (let y = 0 ; y< 108 ; y++) {
          let x = discard.splice(0 , 1)
              shuffledDeck.push(x)

    }
  }
  if(reverse){
     Players[3 - turn % 4].takeTurn();
  }
  else{
     Players[turn % 4].takeTurn();
  }
 
  turn++;
  console.log(turn)
}