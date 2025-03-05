
let pElement = document.createElement("p");
pElement.innerHTML = "this is a p tag";

document.body.prepend(pElement);

//document.body.appendChild(pElement);

let body = document.querySelector("#body");
let paragraph = document.querySelector("#paragraph");

body.insertBefore(hElement, paragraph );


let testdiv = document.querySelector("#testdiv");
let anchortag = document.querySelector("#htag");

let anchorElement = document.createElement("a");
hElement.innerHTML = "this is a anchor tag";

testdiv.insertBefore(hElement, anchortag);

