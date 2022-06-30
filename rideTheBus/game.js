// Draw Card Stuff //
const endpoint = "https://deckofcardsapi.com/api/deck/new/draw/?count=1";

async function drawCard(cardColor, cardValue){
  try {
    const response = await fetch(endpoint); //access endpoint
    if(!response.ok){
      throw Error(response.statusText);
    }
    const json = await response.json();
    //console.log(json);
    //displayCard(json);
    let path = json.cards[0].image;
    let suit = json.cards[0].suit;
    let value = json.cards[0].value;
    console.log(json);

    // update the image with the new card image from the API
    cardImage.src = path;

    //store Card (json)
      const testObject = json.cards[0];
      localStorage.setItem('testObject', JSON.stringify(testObject));

      const retreivedObject = localStorage.getItem('testObject');
      console.log('retreivedObject: ', JSON.parse(retreivedObject));

      let lastCardPath = retreivedObject.image;
      let lastCardSuit = retreivedObject.suit;
      let lastCardValue = retreivedObject.value;

      lastCardImage.src = lastCardPath;


// if statements //
    if(cardColor == "red" && (suit == "HEARTS" || suit == "DIAMONDS")){
      console.log("You guessed right!");
      cardColorMessage.innerHTML="You guessed right! You may proceed."
    } else if (cardColor == "black" && (suit == "SPADES" || suit == "CLUBS")){
      console.log("You guessed right!");
      cardColorMessage.innerHTML="You guessed right! You may proceed."
    }
    else {
      console.log("You guessed wrong")
      cardColorMessage.innerHTML="You guessed wrong! Try again!"
    }


    if(cardValue == "higher" && (value > lastCardValue || value )) {
      console.log("You guessed right!");
      cardValueMessage.innerHTML="You guessed right! You may proceed.";
    } else if (cardValue == "lower" && (value < lastCardValue)){
      console.log("You guessed right!");
      cardValueMessage.innerHTML="You guessed right! You may proceed."
    }
    else {
      console.log("You guessed wrong")
      cardValueMessage.innerHTML="You guessed wrong! Try again!"
    }

  }catch(err){
      console.log(err);
      alert('failed');
    }
  }






const cardImageHolder = document.getElementById('cardImage', 'lastCardImage');

const redButton = document.getElementById('red');
const blackButton = document.getElementById('black');
redButton.addEventListener('click', function() {drawCard("red");} );
blackButton.addEventListener('click', function(){drawCard("black");});



const higherButton = document.getElementById('higher');
const lowerButton = document.getElementById('lower');
higherButton.addEventListener('click', function() {drawCard("higher"); } );
lowerButton.addEventListener('click', function(){drawCard("lower");});

let message = document.getElementById('message');
