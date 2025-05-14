# [5577783] SSGS Calc - Calcolatrice CLI

## Descrizione
SSGS Calc è una semplice calcolatrice con interfaccia a riga di comando (CLI) sviluppata come parte dei laboratori 6, 7, 8 e 9 del corso di Sviluppo di Sistemi di Gestione Software. Il progetto implementa le operazioni matematiche di base con un'interfaccia utente interattiva tramite terminale.

## Funzionalità
La calcolatrice supporta le seguenti operazioni:
- Addizione
- Sottrazione
- Moltiplicazione
- Divisione (con gestione degli errori di divisione per zero)
- Elevamento a potenza

## Struttura del Progetto
- `calculator.js` - Il modulo che implementa le operazioni matematiche di base
- `index.js` - L'interfaccia utente a riga di comando
- `calculator.test.js` - Test automatizzati per verificare il corretto funzionamento delle operazioni

## Come Utilizzare
1. Clonare il repository
2. Installare le dipendenze:
   ```
   npm ci
   ```
3. Avviare la calcolatrice:
   ```
   npm start
   ```
4. Seguire le istruzioni a schermo per selezionare un'operazione e inserire i numeri

## Esempio di Utilizzo
Esempio di input/output:
```
Seleziona un'operazione (0-5): 1
Inserisci il primo numero per l'addizione: 2
Inserisci il secondo numero per l'addizione: 3
Risultato: 5
```

## Test
Il progetto include una suite di test automatizzati che verificano tutte le funzionalità della calcolatrice. Per eseguire i test:

```
npm test
```

Per eseguire i test con report di copertura:

```
npm run test:coverage
```

La copertura dei test attuale è al 100% per tutte le funzioni implementate.

## CI/CD
Il progetto include una pipeline CI/CD configurata tramite GitHub Actions che esegue automaticamente i test ad ogni push sui branch main o master.

## Tecnologie Utilizzate
- Node.js (versione 18.x o superiore)
- Jest (per i test automatizzati)
- GitHub Actions (per CI/CD)

