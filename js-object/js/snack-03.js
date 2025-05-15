console.log('snack 03')

// const parola = prompt('iniserisci una parola')
const parola = 'Benvenuto' // otunevneB
let parolaInvertita = ''

for (let i = 0; i < parola.length; i++) {
	const index = parola.length - 1 - i
	const char = parola.charAt(index)
	console.log(char)
	parolaInvertita += char
	console.log(parolaInvertita)
}

// parolaInvertita = parola.split('') // array
// parolaInvertita.reverse() // inverte l'array originale
// parolaInvertita = parolaInvertita.join('')
// parolaInvertita = parola.split('').reverse().join('')
console.log(parolaInvertita)

// console.log(parolaInvertita)
// console.log(parola[2])
// console.log(parola.charAt(2))
// console.log(parola.at(-1))
