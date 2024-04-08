function rimuoviDallaTesta(array) {
    return array.shift();
};

const btnElem = document.createElement("button");
btnElem.addEventListener("click", function () {
    let elementoRimosso = rimuoviDallaTesta(array);
    pararemuvedElem.textContent = "L'elemento rimosso è: " + elementoRimosso;
    paraArrayModified.textContent = "L'array modificato: " + array
});