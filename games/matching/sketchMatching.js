// Get The Game Board From The HTML
let gameBoard = document.querySelector(".game-board");

//18 Unique Soccer-Themed Cards
let images  = [
    "images/fede.jpg",
    "images/haaland.jpg",
    "images/kane.jpg",
    "images/kdb.jpg",
    "images/kroos.jpg",
    "images/lewa.jpg",
    "images/maradona.jpg",
    "images/mbappe.jpg",
    "images/messi.jpg",
    "images/modric.jpg",
    "images/neuer.jpg",
    "images/neymar.jpg",
    "images/r9.jpg",
    "images/ramos.jpg",
    "images/ronaldo.jpg",
    "images/salah.jpg",
    "images/vini.jpg",
    "images/yamal.jpg"
]

// Duplicate The Array To Create Pairs
let cardImages = images.concat(images);

// Variable To Track Flipped Cards & Check For Matches
let firstCard = null;
let secondCard = null;
let lockBoard = false;

// Shuffle The Cards
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

let shuffledImages = shuffle(cardImages);

// Create A New Card Element
function createCard(imageName) {
    // Create The Outer Card Container
    let card = document.createElement("div");
    card.classList.add("card");

    // Inner Wrapper For The Card (Holds Front And Back)
    let inner = document.createElement("div");
    inner.classList.add("card-inner");

    // Front Face (What The Player Sees First)
    let front = document.createElement("div");
    front.classList.add("card-front");

    // Back Face (What The Player Sees After Flipping)
    let back = document.createElement("div");
    back.classList.add("card-back");

    // Set The Image For The Back Face
    back.style.backgroundImage = "url('../matching/" + imageName + "')";

    // Build The Structure
    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);

    // Add Click Event Listener To Flip The Card
    card.addEventListener("click", function() {
        // Ignore Clicks If The Card Is Already Flipped
        if (lockBoard || card === firstCard) {
            return;
        }

        // Flip The Card (Add Flipped Class)
        inner.classList.add("flipped");

        // First Card Clicked
        if (!firstCard) {
            firstCard = card;
            // Store The Inner Element In Case Of Flipping Back
            firstCard.innerCard = inner
            return;
        }
        // Second Card Clicked
        else {
            secondCard = card;
            secondCard.innerCard = inner;
            // Function To Check For A Match
            checkForMatch();
        }
    });
    return card;
}

// Function To Check For A Match
function checkForMatch() {
    // Get The Images From The Flipped Cards
    let firstImage = firstCard.innerCard.querySelector(".card-back").style.backgroundImage;
    let secondImage = secondCard.innerCard.querySelector(".card-back").style.backgroundImage;

    // If The URLS Match
    if (firstImage === secondImage) {
        firstCard = null;
        secondCard = null;
    }
    // If They Don't Match
    else {
        lockBoard = true;
        //Flip Back The Cards After A Delay Of 1 Second
        setTimeout(function() {
            firstCard.innerCard.classList.remove("flipped");
            secondCard.innerCard.classList.remove("flipped");
            firstCard = null;
            secondCard = null;
            lockBoard = false;
        }, 1000)
    }
}

// Loop Through The Shuffled Images And Create Cards
for (let i = 0; i < shuffledImages.length; i++) {
    let card = createCard(shuffledImages[i]);
    gameBoard.appendChild(card);
}