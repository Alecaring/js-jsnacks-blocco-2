const array = ["antonio", "alberto"];

const container = document.getElementById("container");
console.log(container);

const paraAddedElem = document.createElement("p");
    paraAddedElem.textContent = "L'elemento aggiunto è: ";
    container.appendChild(paraAddedElem);

const inputElem = document.createElement("input");
    inputElem.type = "text";
    inputElem.placeholder = "Aggiungi qui";
    container.appendChild(inputElem);

btnElem.textContent = "Push";
    container.appendChild(btnElem);


const paraArrayModified = document.createElement("p");
    paraArrayModified.textContent = "L'array modificato: ";
    container.appendChild(paraArrayModified);