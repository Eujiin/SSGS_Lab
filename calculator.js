/**
 * Modulo calcolatrice con le quattro operazioni fondamentali
 */

/**
 * Esegue l'addizione di due numeri
 * @param {number} a - Primo numero
 * @param {number} b - Secondo numero
 * @returns {number} La somma di a e b
 */
function add(a, b) {
    return a + b;
}

/**
 * Esegue la sottrazione di due numeri
 * @param {number} a - Primo numero
 * @param {number} b - Secondo numero
 * @returns {number} Il risultato di a - b
 */
function subtract(a, b) {
    return a - b;
}

/**
 * Esegue la moltiplicazione di due numeri
 * @param {number} a - Primo numero
 * @param {number} b - Secondo numero
 * @returns {number} Il prodotto di a e b
 */
function multiply(a, b) {
    return a * b;
}

/**
 * Esegue la divisione di due numeri
 * @param {number} a - Numeratore
 * @param {number} b - Denominatore
 * @returns {number} Il risultato di a / b
 * @throws {Error} Se b è zero (divisione per zero)
 */
function divide(a, b) {
    if (b === 0) {
        throw new Error("Impossibile dividere per zero");
    }
    return a / b;
}

/**
 * Esegue l'elevamento a potenza
 * @param {number} a - Base
 * @param {number} b - Esponente
 * @returns {number} Il risultato di a elevato alla b
 */
function power(a, b) {
    return Math.pow(a, b);
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    power
};
