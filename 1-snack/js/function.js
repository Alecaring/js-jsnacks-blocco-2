document.getElementById("aggiungiElemento").addEventListener("click", function() {
    let valore = document.getElementById("elementoInput").value;
    if (valore !== "") {
        array.push(valore);
        document.getElementById("elementoInput").value = ""; // Reset input field
        console.log("Elemento aggiunto:", valore);
    }
});

document.getElementById("contaElementi").addEventListener("click", function() {
    let numero = contaElementi(array);
    document.getElementById("numeroElementi").textContent = "Numero di elementi: " + numero;
});

/**
 * 
 * @param {object} array 
 * @returns {number}
 */
function contaElementi(array) {
    let indice = 0;
    while (indice < array.length) {
        indice++;
    }
    return indice;
}