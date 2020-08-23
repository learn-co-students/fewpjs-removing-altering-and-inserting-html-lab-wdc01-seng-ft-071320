// Write your code here!

document.querySelector("main").remove();

let newHeader = document.createElement("h1");
newHeader.id = 'victory';

let head = document.querySelector("head");

document.head.appendChild(newHeader);
newHeader.innerHTML = "Christina is the champion"
