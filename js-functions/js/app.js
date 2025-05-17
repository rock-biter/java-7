console.log('Funzioni')

// dichiarato la funzione saluta
function saluta(nome) {
	// corpo della funzione, contieme il codice da eseguire
	console.log(`Ciao ${nome}`)
}

// invocazione della funzioane saluta
// saluta()
// saluta()
saluta('Gattino') // Ciao Gattino
saluta('Mario') // Ciao MArio
saluta('Gianluca') // Ciao gianlcua

console.log('Hello') // HEllo
console.log(saluta) //

const altraFunzione = saluta // function
altraFunzione()

const nome = 'Gianni'
const parola = nome.toLowerCase() // string

saluta(nome)

const chars = nome.split('')
console.log(chars, 'ciao', nome)

function somma(a, b) {
	console.log(a, b)
	// return a + b
	const risultato = a + b
	return risultato
	// console.log(risultato)
}

// somma(4, 7)
// somma(5, 92)
// somma(-23, 56)
somma(9, 10)
// somma('ciao', 'Mamma')
// somma(null, false)

const res = somma(40, 11)
console.log(res)

// console.log(risultato) errore: risultato is not defined

const numeri = [3, 6, 7, 8]
numeri.reverse()

// function saluta2() {
// 	console.log(`ciao ${cognome}`)
// }

// saluta2()
