console.log('parole')

// chiedo all'utente di inserire 2 parole
// stampiamo la parola più lunga

/**
 * PSEUDOCODICE
 */

// chiedo la prima parola e la salvo in una variabile
const parola1 = prompt('Inserisci una parola') // string | null
console.log(parola1.length)
// chiedo la seconda parola e la salvo in un altra variabile
const parola2 = prompt("Inserisci un'altra parola") // string | null
console.log(parola2.length)

// IF lunghezza prima parola > lunghezza seconda parola
if (parola1.length > parola2.length) {
	// - console log prima parola
	console.log(`La parola ${parola1} è più lunga della parola ${parola2}`)
} else if (parola2.length > parola1.length) {
	// ELSE IF lunghezza seconda parola > lunghezza prima parola
	// - console log seconda parola
	console.log(`La parola ${parola2} è più lunga della parola ${parola1}`)
} else {
	// ELSE
	// - console log "Le parole sono lunghe uguali"
	console.log(`Le parole ${parola1} e ${parola2} sono lunghe uguali`)
}
