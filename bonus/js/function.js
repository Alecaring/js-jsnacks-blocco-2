function inserisciInTesta(array, elementoDaAggiungere) {
    array.unshift(elementoDaAggiungere); 
    return elementoDaAggiungere; 
};

const btnElem = document.createElement("button");
btnElem.addEventListener("click", function () {
    const elementoDaAggiungere = inputElem.value;
    if (elementoDaAggiungere) { 
        let elementoAggiunto = inserisciInTesta(array, elementoDaAggiungere);
        paraAddedElem.textContent = "L'elemento aggiunto è: " + elementoAggiunto;
        paraArrayModified.textContent = "L'array modificato: " + array.join(", ");
        inputElem.value = '';
        inputElem.focus();
    } else {
        alert("Inserisci un valore valido.");
    }
});