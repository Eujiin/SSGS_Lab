//to run test on terminal -> npm test 
// to run test on terminal with coverage insights -> npm run test:coverage

const calculator = require('../src/calculator');

// Tests per l'operazione di addizione
test('Esercizio 1, test addizione di 2+2, deve fare 4', () => {
    // 1. Somma gli interi 2 e 2 e memorizza il risultato in una variabile
    const result = calculator.add(2, 2);
    
    // 2. Verifica tramite un'asserzione che il valore di quella variabile è uguale a 4
    expect(result).toBe(4);
});

test('Test addizione con numeri negativi', () => {
    // 1. Somma un numero positivo e uno negativo
    const result = calculator.add(5, -3);
    
    // 2. Verifica il risultato
    expect(result).toBe(2);
});

test('Test addizione con numeri decimali', () => {
    // 1. Somma numeri decimali
    const result = calculator.add(1.5, 2.5);
    
    // 2. Verifica il risultato
    expect(result).toBe(4);
});

// Tests per l'operazione di sottrazione
test('Test sottrazione di numeri positivi', () => {
    // 1. Sottrae due numeri positivi
    const result = calculator.subtract(10, 4);
    
    // 2. Verifica il risultato
    expect(result).toBe(6);
});

test('Test sottrazione con risultato negativo', () => {
    // 1. Sottrazione che produce un risultato negativo
    const result = calculator.subtract(3, 8);
    
    // 2. Verifica il risultato
    expect(result).toBe(-5);
});

test('Test sottrazione con decimali', () => {
    // 1. Sottrae numeri decimali
    const result = calculator.subtract(5.5, 2.2);
    
    // 2. Verifica con approssimazione per gestire l'imprecisione dei float
    expect(result).toBeCloseTo(3.3);
});

// Tests per l'operazione di moltiplicazione
test('Test moltiplicazione di numeri positivi', () => {
    // 1. Moltiplica due numeri positivi
    const result = calculator.multiply(3, 4);
    
    // 2. Verifica il risultato
    expect(result).toBe(12);
});

test('Test moltiplicazione con zero', () => {
    // 1. Moltiplica un numero per zero
    const result = calculator.multiply(7, 0);
    
    // 2. Verifica il risultato
    expect(result).toBe(0);
});

test('Test moltiplicazione con numeri negativi', () => {
    // 1. Moltiplica un positivo per un negativo
    const result1 = calculator.multiply(3, -4);
    // 2. Moltiplica due negativi
    const result2 = calculator.multiply(-3, -4);
    
    // 3. Verifica i risultati
    expect(result1).toBe(-12);
    expect(result2).toBe(12);
});

// Tests per l'operazione di divisione
test('Test divisione di numeri positivi', () => {
    // 1. Divide due numeri positivi
    const result = calculator.divide(10, 2);
    
    // 2. Verifica il risultato
    expect(result).toBe(5);
});

test('Test divisione con risultato decimale', () => {
    // 1. Divisione che produce un decimale
    const result = calculator.divide(10, 3);
    
    // 2. Verifica con approssimazione
    expect(result).toBeCloseTo(3.333, 2);
});

test('Test divisione per zero lancia un errore', () => {
    // Verifica che la divisione per zero lanci un'eccezione
    expect(() => {
        calculator.divide(5, 0);
    }).toThrow("Impossibile dividere per zero");
});

test('Test divisione con numeri negativi', () => {
    // 1. Divisione con un numero negativo
    const result1 = calculator.divide(-10, 2);
    // 2. Divisione con due numeri negativi
    const result2 = calculator.divide(-10, -2);
    
    // 3. Verifica i risultati
    expect(result1).toBe(-5);
    expect(result2).toBe(5);
});

// Tests per l'operazione di potenza
test('Test potenza con esponente positivo', () => {
    // 1. Calcola la potenza con esponente positivo
    const result = calculator.power(2, 3);
    
    // 2. Verifica il risultato
    expect(result).toBe(8);
});

test('Test potenza con esponente zero', () => {
    // 1. Calcola la potenza con esponente zero
    const result = calculator.power(5, 0);
    
    // 2. Verifica il risultato
    expect(result).toBe(1);
});

test('Test potenza con esponente negativo', () => {
    // 1. Calcola la potenza con esponente negativo
    const result = calculator.power(2, -2);
    
    // 2. Verifica il risultato
    expect(result).toBe(0.25);
});

test('Test potenza con base negativa ed esponente pari', () => {
    // 1. Calcola la potenza con base negativa ed esponente pari
    const result = calculator.power(-2, 2);
    
    // 2. Verifica il risultato
    expect(result).toBe(4);
});

test('Test potenza con base negativa ed esponente dispari', () => {
    // 1. Calcola la potenza con base negativa ed esponente dispari
    const result = calculator.power(-2, 3);
    
    // 2. Verifica il risultato
    expect(result).toBe(-8);
});

// Manteniamo il test skippato per riferimento
test.skip('Esercizio 2, test addizione SBAGLIATO, deve fallire', () => {
    //1. Somma gli interi 3 e 5 e memorizza il risultato in una variabile 
    const result = calculator.add(3, 5);
    
   // 2. Verifica tramite un'asserzione che il valore di quella variabile è uguale a 7
    expect(result).toBe(7);
});