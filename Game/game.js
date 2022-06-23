//Shuffle API endpoint
const endpoint = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"

console.log(endpoint);

document.querySelector('#shuffle-deck');
shuffleButton.addEventListener('click', shuffle);

async function shuffle(){
  console.log('HI');
  try{
    const response = await fetch(endpoint);
    if(!response.ok){
      throw Error(response.statusText);
    }
    const json = await response.json()
    console.log(json.doneShuffle);

  } catch (err) {
    console.log(err);
    alert('failed');
  }
  function displayQuote(quote){
    const quoteText = document.querySelector('js-quote-text');
    quoteText.textContent = quote;
  }
