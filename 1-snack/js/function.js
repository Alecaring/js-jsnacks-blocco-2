// essenziale qui per il caricamento del DOM
const btnElem = document.createElement("button");

// funzione bottone
btnElem.addEventListener("click", function() {
    paraElem.textContent = "Elementi nell'array: " + stampa(array);
});

// funzione che aggiunge spazio e virgola
function stampa(array) {
    return array.join(", ")
}