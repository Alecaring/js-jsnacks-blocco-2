function rimuoviDallaCoda(array) {
    return array.pop();
};

const btnElem = document.createElement("button");
btnElem.addEventListener("click", function () {
    let elementoRimosso = rimuoviDallaCoda(array);
    pararemuvedElem.textContent = "L'elemento rimosso è: " + elementoRimosso;
    paraArrayModified.textContent = "L'array modificato: " + array
});