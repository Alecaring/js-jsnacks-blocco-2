
document.getElementById("aggiungiElemento").addEventListener("click", function() {
    let valore = document.getElementById("elementoInput").value;
    if (valore !== "") {
        array.push(valore);
        document.getElementById("elementoInput").value = ""; // Reset del campo di input
        console.log("Elemento aggiunto:", valore);
    }
});

document.getElementById("stampaElementi").addEventListener("click", function() {
    let elementiStringa = stampa(array);
    document.getElementById("elementiArray").textContent = "Elementi nell'array: " + elementiStringa;
});

function stampa(array) {
    return array.join("; ");
}
