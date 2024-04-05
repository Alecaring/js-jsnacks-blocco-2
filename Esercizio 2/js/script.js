// Esercizio 2
// Dare la possibilità di inserire due parole.
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.




const parola1 = prompt("ins1");
const parola2 = prompt("ins2");

if (parola1.length === parola2.length) {
    console.log(`${parola1} e ${parola2} sono della stessa lunghezza`);
} else {
    console.log("sono diverse");
}