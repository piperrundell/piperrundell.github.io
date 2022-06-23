//API ENDPOINT
const adjective = 'https://random-word-form.herokuapp.com/random/adjective';

console.log(adjective);

const adjButton = document.querySelector('#js-new-adj');
adjButton.addEventListener('click', getAdj);

async function getAdj(){
  try {
    const response = await fetch(adjective);
    if(!response.ok){
      throw Error(response.statusText);
    }
    const json = await response.json();
    displayAdj(json);

  } catch (err) {
    console.log(err);
    alert('failed');
  }
  function displayAdj(adj){
    const adjText = document.querySelector('#js-adj-text');
    adjText.textContent = adj;
  }
}

const animal = 'https://random-word-form.herokuapp.com/random/animal';

console.log(animal);

const animalButton = document.querySelector('#js-new-animal');
animalButton.addEventListener('click', getAnimal);

async function getAnimal(){
  try {
    const response = await fetch(animal);
    if(!response.ok){
      throw Error(response.statusText);
    }
    const json = await response.json();
    displayAnimal(json);

  } catch (err) {
    console.log(err);
    alert('failed');
  }
  function displayAnimal(animal){
    const animalText = document.querySelector('#js-animal-text');
    animalText.textContent = animal;
  }
}
