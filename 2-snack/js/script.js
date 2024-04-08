const people = ["alessio", "antonio", "giuseppe", "gino"];

const container = document.getElementById("contenitor");
    console.log(container);

const inputElem = document.createElement("input");
    inputElem.type = "text";
    inputElem.placeholder = "inserisci un nome";
    inputElem.ariaLabel = "inputElem"
    inputElem.id = "inputElem"
    container.appendChild(inputElem);


    btnElem.id = "btn";
    btnElem.textContent = "Push";
    container.appendChild(btnElem);

const paraElem = document.createElement("p");
    container.appendChild(paraElem);