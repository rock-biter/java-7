console.log('biglietto treno')

/**
 * 
 * Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
 */

// salviamo in una variabile il prezzo per km del biglietto
const COSTO_PER_KM = 0.21 // snake_case

// 1. salvare in una variabile il numero di km che l'utente ha inserito
const distanza = parseFloat(prompt('Inserisci il numero di km da percorrere'))
console.log(distanza)

// 2. salvare in una variabile l'eta del passeggero
const eta = parseInt(prompt("Inserisci l'età del passeggero"))
console.log(eta)

// 3. calcolare il prezzo del biglietto
//  - calcolare il prezzo base (numero dei km * prezzo al km)
const prezzoBase = distanza * COSTO_PER_KM
console.log(prezzoBase)
let pctSconto = 0
//  - calcolare uno sconto:
//    - SE eta < 18
if (eta < 18) {
	//      - sconto = 20 * prezzo base / 100
	pctSconto = 20
} else if (eta > 65) {
	//      - sconto = 40 * prezzo base / 100
	pctSconto = 40
}

//  - calcolare il prezzo finale = prezzo base - sconto
const sconto = (pctSconto * prezzoBase) / 100
const prezzoFinale = prezzoBase - sconto
console.log(sconto)
console.log(prezzoFinale)

// 4. stampare il prezzo del biglietto con massimo 2 cifre decimali
const prezzoFormattato = new Intl.NumberFormat('it-IT', {
	style: 'currency',
	currency: 'EUR',
}).format(prezzoFinale)

// const message = `Il prezzo del biglietto è di ${prezzoFinale.toFixed(2)} Euro`
const message = `Il prezzo del biglietto è di ${prezzoFormattato}`
console.log(message)
