


/**json
 * 
 * @param {number} min 
 * @param {number} max 
 * 
 * @returns {number}
 */
function generaArrayCasuali() {
    let array = [];
    for (let i = 0; i < 10; i++) {
        array.push(Math.floor(Math.random() * 100) + 1);
    }
    return array;
}

