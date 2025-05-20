console.log('pari o dispari')

function getRandomBetween(min, max) {
	const minCeiled = Math.ceil(min)
	const maxFloored = Math.floor(max)
	return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled) // The maximum is inclusive and the minimum is inclusive
}

function ePari(num) {
	if (num % 2 === 0) {
		return true
	} else {
		return false
	}
}

const sceltaUtente = prompt(
	'Scegli pari o dispari scrivendo "pari" o "dispari"'
)
const numeroUtente = parseInt(prompt('Inserisci un numero intero da 1 a 6'))
const numeroPC = getRandomBetween(1, 6)

console.log(sceltaUtente, numeroUtente, numeroPC)

const somma = numeroUtente + numeroPC
console.log(somma)

if (ePari(somma) && sceltaUtente === 'pari') {
	console.log('Hai vinto con pari')
} else if (sceltaUtente === 'dispari' && !ePari(somma)) {
	console.log('Hai vinto con dispari')
} else {
	console.log('Hai perso')
}
