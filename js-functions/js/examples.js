console.log('pari e dispari')

// const numero = parseInt(prompt('Inserisci un numero'))

// // const resto = numero % 2

if (isEven(numero)) {
	console.log('il numero è pari')
} else {
	console.log('il numero è dispari')
}

function isEven(num) {
	// if num è pari
	if (num % 2 === 0) {
		return true
	} else {
		return false
	}
}

// console.log(isEven(31))
// console.log(isEven(1259))
// console.log(isEven(22))

function isOdd(num) {
	// IF num pari
	if (num % 2 === 0) {
		//  return false
		return false
	} else {
		// ELSE
		//  retrun true
		return true
	}
}

// console.log('----------')
// console.log(isOdd(13))
// console.log(isOdd(22))
// console.log(isOdd(22))

function getRandomBetween(min, max) {
	const minCeiled = Math.ceil(min)
	const maxFloored = Math.floor(max)
	return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled) // The maximum is inclusive and the minimum is inclusive
}

const userNumber = getRandomBetween(1, 6)
const pcNumber = getRandomBetween(1, 6)

// console.log(userNumber, pcNumber)

// if (userNumber > pcNumber) {
// 	console.log('Hai vinto')
// } else {
// 	console.log('hai perso')
// }

function invertiParola(parola) {
	let parolaInvertita = ''

	for (let i = 0; i < parola.length; i++) {
		// const index = parola.length - 1 - i
		const char = parola.at(-1 - i)
		parolaInvertita += char
	}

	return parolaInvertita
	// return parola invertita (string)
}

// const parolaUtente = prompt('Inserisci una parola')
// // console.log(invertiParola(parolaUtente))
// console.log(capitalize(parolaUtente))

function capitalize(parola) {
	const first = parola.charAt(0).toUpperCase()
	const rest = parola.slice(1).toLowerCase()
	return first + rest

	// return la parola con la prima maiuscola e le altre minuscole
}

// Ciao === oaiC

// osso === osso (palindroma)
// mamma === ammam (non palindroma)
// Osso === ossO

// vostraFunzione('parola') // true o false
