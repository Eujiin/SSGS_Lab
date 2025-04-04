//to run test on  terminal -> npm test 
const calculator = require('./calculator');

test('Esercizio 1, test addizione di 2+2, deve fare 4', () => {
    // 1. Somma gli interi 2 e 2 e memorizza il risultato in una variabile
    const result = calculator.add(2, 2);
    
    // 2. Verifica tramite un'asserzione che il valore di quella variabile è uguale a 4
    expect(result).toBe(4);
});
test.skip('Esercizio 2, test addizione SBAGLIATO, deve fallire', () => {
    //1. Somma gli interi 3 e 5 e memorizza il risultato in una variabile 
    const result = calculator.add(3, 5);
    
   // 2. Verifica tramite un’asserzione che il valore di quella variabile è uguale a 7
    expect(result).toBe(7);
});