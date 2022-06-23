var nextItem = [];
nextItem[0] = prompt("Enter your name.");
nextItem[1] = prompt("Enter a place.");
nextItem[2] = prompt("Enter a noun.");
nextItem[3] = prompt("Enter a different place.");
nextItem[4] = prompt("Enter an animal.");
nextItem[5] = prompt("Enter a food.");

for (var i = 0; i < nextItem.length; i++) {
  nextItem[i];
}

var date = new Date();
var d = "Date: " + date.getFullYear() + "-" + date.getDate() + "-" + date.getMonth();
var madLib = d + ": " + nextItem[0] + " is going to " + nextItem[1] + " instead of " + nextItem[2] + " training. They are from " + nextItem[3] + ", where they feed all of the wild " + nextItem[4] + " hot " + nextItem[5] + ".";

document.getElementById('content').innerHTML = madLib;
