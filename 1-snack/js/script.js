// array
let array = ["alessio", "antonio", "giuseppe", "andrea"];

// prendo il tad dall'html
const containerElem = document.getElementById("container");

// creo il bottone
containerElem.appendChild(btnElem)
btnElem.id = "btn" // id bottone
btnElem.textContent = "Push"

// creo il paragrafo
const paraElem = document.createElement("p");
paraElem.textContent = "elementi nell'array: ";
containerElem.appendChild(paraElem)