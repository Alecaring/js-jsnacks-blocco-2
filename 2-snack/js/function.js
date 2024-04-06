/**
 * 
 * @param {object} array 
 * @param {string} elemento 
 * @returns {number}
 */
function trovaIndice(array, elemento) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === elemento) {
            return i;
        }
    }
    return -1;
}
function cercaIndice() {
    let arrFrutti = ["mela", "banana", "arancia", "kiwi"];
    let valore = document.getElementById("valoreInput").value;
    let indice = trovaIndice(arrFrutti, valore);
    let messaggio = indice === -1 ? "Elemento non trovato nell'array." : "L'indice dell'elemento " + valore + " è: " + indice;
    document.getElementById("risultato").textContent = messaggio;
}