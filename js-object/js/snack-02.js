console.log('snack 02')

const zucchine = [
	{
		varieta: 'lunga',
		peso: 200,
		lunghezza: 15,
	},
	{
		varieta: 'corta',
		peso: 100,
		lunghezza: 10,
	},
	{
		varieta: 'lunga',
		peso: 250,
		lunghezza: 35,
	},
	{
		varieta: 'lunga',
		peso: 180,
		lunghezza: 25,
	},
	{
		varieta: 'corta',
		peso: 120,
		lunghezza: 14,
	},
]

const zucchineLunghe = []
const zucchineCorte = []

console.log(zucchine)

for (let i = 0; i < zucchine.length; i++) {
	const elementoCorrente = zucchine[i] // object
	console.log(i, elementoCorrente.lunghezza)
	// IF lunghezza elementoCorrente >= 15
	if (elementoCorrente.lunghezza >= 15) {
		//  - metiamo elemento corrente dentro array zucchine lunghe
		zucchineLunghe.push(elementoCorrente)
	} else {
		// ALTRIMENTI
		// - mettiamo elemento corrente dentro array zucchine corte
		zucchineCorte.push(elementoCorrente)
	}
}

console.log(zucchineLunghe, zucchineCorte)

let sommaLunghe = 0

for (let i = 0; i < zucchineLunghe.length; i++) {
	// const elementoCorrente = zucchine[i] // object
	// console.log(i, elementoCorrente.peso)
	sommaLunghe += zucchineLunghe[i].peso
}

console.log(sommaLunghe)

let sommaCorte = 0

for (let i = 0; i < zucchineCorte.length; i++) {
	// const elementoCorrente = zucchine[i] // object
	// console.log(i, elementoCorrente.peso)
	sommaCorte += zucchineCorte[i].peso
}

console.log(sommaCorte)

/**
 * Sopluizione ottimizzata e meno ridondante
 */
// const zucchine2 = [zucchineLunghe, zucchineCorte]
// console.log(zucchine2)

// for (let i = 0; i < zucchine2.length; i++) {
// 	const arrayZucchine = zucchine2[i] // array
// 	console.log(i, arrayZucchine)

// 	let somma = 0
// 	for (let i = 0; i < arrayZucchine.length; i++) {
// 		// const elementoCorrente = zucchine[i] // object
// 		// console.log(i, elementoCorrente.peso)
// 		somma += arrayZucchine[i].peso
// 	}

// 	console.log(somma)
// }
