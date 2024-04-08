function trovaIndice() {
    for (let i = 0; i < people.length; i++) {
        let inputElemValue = inputElem.value;
        if (inputElemValue === people[i]) {
            return i;
        } 
    }
    return -1;
}

const btnElem = document.createElement("button");
btnElem.addEventListener("click", function () {
    paraElem.textContent = "la posizione del tuo nome è: " + trovaIndice();
});