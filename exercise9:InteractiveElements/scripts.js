const para=document.querySelector('p') //const = a way of creating a variable //

para.addEventListener('click', updateName);

function updateName(){
  const name = prompt('Enter a New Name');
  para.textContent = `Player 1: ${name}`;

}

document.getElementById("mydiv").onclick = function(){
  this.style.backgroundColor= "pink";
  this.style.color="white";

}
