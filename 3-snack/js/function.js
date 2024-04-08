function stampa(array) {
    return array.join(", ")
}

const btnElem = document.createElement("button");
btnElem.addEventListener("click", function btn() {
    paraElem.textContent = stampa(array);
})