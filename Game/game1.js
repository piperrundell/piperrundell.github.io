//Shuffle API endpoint
const endpoint = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
console.log(endpoint);

let "HEARTS" = red
let "DIAMONDS" = red
let "SPADES" = black
let "CLUBS" = black

const suit = fetch("cards.suit")

const redButton = document.querySelector('#red');
redButton.addEventListener('click', redChoice);

async function redChoice(){
  try{
    const response = await fetch(endpoint);
    if(!response.ok){
      throw Error(response.statusText);
    }
    const json = await response.json()
    displayShuffle(json);

  } catch (err) {
    console.log(err);
    alert('failed');
  }
  function displayShuffle(shuffle){
    const shuffleText = document.querySelector('#js-quote-text');
    shuffleText.textContent = "shuffled";
  }
}
