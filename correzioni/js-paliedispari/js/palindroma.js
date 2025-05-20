console.log('palindroma')

const parolaUtente = prompt('Inserisci una parola')
console.log(parolaUtente)

if (ePalindroma(parolaUtente)) {
	// - log di "La parola è palindroma"
	console.log('Si')
} else {
	// ALTRIMENTI
	// - log di "La parola non è palindroma"
	console.log('no')
}

function ePalindroma(parola) {
	// generare la parola invertita
	parola = parola.toLowerCase()
	const parolaInvertita = invertiParola(parola)
	// console.log(parolaInvertita, parola)ciao
	if (parolaInvertita === parola) {
		return true
	} else {
		return false
	}
}

function invertiParola(parola) {
	let parolaInvertita = ''

	for (let i = 0; i < parola.length; i++) {
		const char = parola.at(-1 - i)
		parolaInvertita += char
		console.log(char, parolaInvertita)
		// console.log(parolaInvertita)
	}

	return parolaInvertita
}

// parola.split('').reverse().join('')

// const esito = ePalindroma('Osso')
// console.log(esito)

// console.log(invertiParola('mamma'))
