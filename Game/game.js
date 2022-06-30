// Draw Card Stuff //
const endpoint = "https://deckofcardsapi.com/api/deck/new/draw/?count=1";

async function drawCard(cardColor){
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
    console.log(json);


    // update the image with the new card image from the API
    cardImage.src = path;

    if(cardColor == "red" && (suit == "HEARTS" || suit == "DIAMONDS")){
      console.log("You guessed right!");
      message.innerHTML="You guessed right!"
    } else if (cardColor == "black" && (suit == "SPADES" || suit == "CLUBS")){
      console.log("You guessed right!");
      message.innerHTML="You guessed right!"
    }
    else {
      console.log("You guessed wrong")
      message.innerHTML="You guessed wrong! Try again!"
    }

  } catch(err){
    console.log(err);
    alert('failed');
  }
}
const cardImageHolder = document.getElementById('cardImage');
const redButton = document.getElementById('red');
const blackButton = document.getElementById('black');
redButton.addEventListener('click', function() { drawCard("red"); } );
blackButton.addEventListener('click', function(){drawCard("black");});

let message = document.getElementById('message')
