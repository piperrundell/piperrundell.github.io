//Shuffle Stuff //
const shuffle = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
console.log(shuffle);

const shuffleButton = document.querySelector('#shuffle-deck');
shuffleButton.addEventListener('click', getShuffle);

async function getShuffle(){
  try{
    const response = await fetch(shuffle);
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
    shuffleText.textContent = "✓";
  }
}

// Draw Card Stuff //
const drawCard = "https://deckofcardsapi.com/api/deck/new/draw/?count=1"
console.log(drawCard);

const drawButton = document.querySelector('#draw-card');
drawButton.addEventListener('click', getCard);

async function getCard(){
  try{
    const response = await fetch (drawCard);
    if(!response.ok){
      throw Error(response.statusText);
    }
    const json = await response.json()
    displayCard(json);
  }
    catch (err) {
      console.log(err);
      alert('failed');
    }
  function displayCard(drawCard){
    const cardReturn = document.querySelector('#js-quote-text');
    cardReturn.textContent = "hi";
  }
}
