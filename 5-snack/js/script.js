const array = ["alessio", "antonio", "daniele", "giacomo", "alberto"];

// elemnto div dell'html
const container = document.getElementById("container");
console.log(container);

// elemnto rimosso
const pararemuvedElem = document.createElement("p");
pararemuvedElem.textContent = "L'elemento rimosso è: ";
container.appendChild(pararemuvedElem);

// bottone
btnElem.textContent = "push"
container.appendChild(btnElem);

const paraArrayModified = document.createElement("p");
paraArrayModified.textContent = "L'array modificato: "
container.appendChild(paraArrayModified)

