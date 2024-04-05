





let N = prompt("Inserisci un numero: ");
N = parseInt(N);


for (let i = 0; i < N; i++) {
    let arrayCasuali = generaArrayCasuali();
    console.log(`Array ${i + 1}: `, arrayCasuali);
}