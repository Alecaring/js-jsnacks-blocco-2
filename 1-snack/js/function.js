
document.getElementById("btn").addEventListener("click", function() {
    
    const elem = inputValue.value;

    const arrElem = ["alessio", "daniele", "alessandro"];

    const numElem = contaElem(arrElem, elem);
    console.log("numero di elementi in array", numElem);

    arrElem.push(elem);

function contaElem(arreyElem, elem) {
    let conta = arreyElem.length;
    if (elem) {
        conta++;
    }
    return conta;
}
});


