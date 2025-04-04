const readline = require('readline');
const calculator = require('./calculator');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function visualizzaMessaggioBenvenuto() {
    console.log("\n==============================");
    console.log("Benvenuto nella Calcolatrice Semplice!");
    console.log("Operazioni supportate:");
    console.log("1. Addizione");
    console.log("2. Sottrazione");
    console.log("3. Moltiplicazione");
    console.log("4. Divisione");
    console.log("5. Potenza");
    console.log("0. Esci");
    console.log("==============================\n");
}

function richiediOperazione() {
    return new Promise((resolve) => {
        function chiediOperazione() {
            rl.question("Seleziona un'operazione (0-5): ", (answer) => {
                const operazione = parseInt(answer);
                if (isNaN(operazione) || operazione < 0 || operazione > 5) {
                    console.error("Operazione non valida. Inserisci un numero da 0 a 5.");
                    chiediOperazione(); // Riprova
                } else {
                    resolve(operazione);
                }
            });
        }
        chiediOperazione();
    });
}

function richiediNumeri(operazione) {
    if (operazione === 0) return Promise.resolve(null); // Caso di uscita
    
    const operazioni = ["addizione", "sottrazione", "moltiplicazione", "divisione", "potenza"];
    const nomeOperazione = operazioni[operazione - 1];
    
    return new Promise((resolve) => {
        function chiediPrimoNumero() {
            rl.question(`Inserisci il primo numero per l'${nomeOperazione}: `, (primo) => {
                const a = parseFloat(primo);
                if (isNaN(a)) {
                    console.error("Numero non valido. Riprova.");
                    chiediPrimoNumero(); // Riprova
                } else {
                    chiediSecondoNumero(a);
                }
            });
        }
        
        function chiediSecondoNumero(a) {
            rl.question(`Inserisci il secondo numero per l'${nomeOperazione}: `, (secondo) => {
                const b = parseFloat(secondo);
                if (isNaN(b)) {
                    console.error("Numero non valido. Riprova.");
                    chiediSecondoNumero(a); // Riprova
                } else if (operazione === 4 && b === 0) {
                    console.error("Impossibile dividere per zero! Riprova.");
                    chiediSecondoNumero(a); // Riprova
                } else {
                    resolve({ a, b });
                }
            });
        }
        
        chiediPrimoNumero();
    });
}

function calcolaRisultato(operazione, a, b) {
    try {
        let risultato;
        switch (operazione) {
            case 1:
                risultato = calculator.add(a, b);
                break;
            case 2:
                risultato = calculator.subtract(a, b);
                break;
            case 3:
                risultato = calculator.multiply(a, b);
                break;
            case 4:
                risultato = calculator.divide(a, b);
                break;
            case 5:
                risultato = calculator.power(a, b);
                break;
        }
        return risultato;
    } catch (errore) {
        console.error(`Errore: ${errore.message}`);
        return null;
    }
}

function generaSalutoRandom() {
    const saluti = [
        "Arrivederci!",
        "A presto!",
        "Alla prossima!",
        "È stato un piacere servirti!",
        "Torna presto a calcolare con noi!",
        "Ciao ciao, matematico!",
        "Numeri, numeri, alla prossima!",
        "Grazie per aver calcolato con noi!",
        "Non dimenticare di tornare per altre operazioni!",
        "Calcoli finiti? Ci vediamo alla prossima sessione!"
    ];
    
    const indice = Math.floor(Math.random() * saluti.length);
    return saluti[indice];
}

async function main() {
    visualizzaMessaggioBenvenuto();
    
    let continua = true;
    
    while (continua) {
        const operazione = await richiediOperazione();
        
        if (operazione === 0) {
            continua = false;
            continue;
        }
        
        const numeri = await richiediNumeri(operazione);
        if (!numeri) continue;
        
        const { a, b } = numeri;
        const risultato = calcolaRisultato(operazione, a, b);
        
        if (risultato !== null) {
            console.log(`\nRisultato: ${risultato}\n`);
        }
        
        console.log("------------------------------");
        console.log("Vuoi eseguire un'altra operazione? (Seleziona 0 per uscire)");
    }
    
    console.log(`\n${generaSalutoRandom()}`);
    console.log("Grazie per aver utilizzato la Calcolatrice Semplice.");
    
    rl.close();
}

main();
