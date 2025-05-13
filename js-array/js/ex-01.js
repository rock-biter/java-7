console.log('EX 01')

/**
 * dato un array di numeri stampare solo i numeri pari
 */
// const numeri = [1, 5, 9, 4, 6, 3, 5, 9, 7, 8, 5] // array(number)
// console.log(numeri)

// // PER OGNI numero
// for (let i = 0; i < numeri.length; i++) {
// 	const num = numeri[i] // number
// 	// console.log(`${i}: ${num}`)

// 	// - SE numero è pari
// 	if (num % 2 === 0) {
// 		//    - stampo
// 		console.log(num)
// 	}

// 	// console.log('------', i)
// }

/**
 * dato un array di numeri stampare solo i numeri dispari
 */
// const numeri = [1, 5, 9, 4, 6, 3, 5, 9, 7, 8, 5] // array(number)
// console.log(numeri)

// // PER OGNI numero
// for (let i = 0; i < numeri.length; i++) {
// 	const num = numeri[i] // number
// 	// console.log(`${i}: ${num}`)

// 	// - SE numero è dispari
// 	if (num % 2 !== 0) {
// 		//    - stampo
// 		console.log(num)
// 	}

// 	// - SE numero non è pari
// 	// if (!(num % 2 === 0)) {
// 	// 	//    - stampo
// 	// 	console.log(num)
// 	// }

// 	// console.log('------', i)
// }

/**
 * Dato un array di booleani creare un nuovo array con i valori opposti
 */
// const risposte = [true, true, true, false, true, false, false] // [false,  false, false, true, false, true, false]
// console.log(risposte)
// const opposti = []

// // PER OGNI elemento
// for (let i = 0; i < risposte.length; i++) {
// 	const elemento = risposte[i]
// 	// opposti.push(!elemento) // PRO
// 	// // console.log(i, elemento)
// 	// //  - SE elemento è uguale a TRUE
// 	if (elemento === true) {
// 		//    - pushaimo FALSE nel nuovo array
// 		// console.log('è true')
// 		opposti.push(false)
// 	} else {
// 		//  - ALTRIMENTI
// 		//    - psuhiamo TRUE nel nuovo array
// 		// console.log('è false')
// 		opposti.push(true)
// 	}
// }

// console.log(opposti)

const nomi = ['Mario', 'Marta', 'Martina', 'Marcello']
const nome = prompt('Dimmi un nome da cercare')
const index = nomi.indexOf(nome) // number
const presente = nomi.includes(nome) // boolean (true | false)

console.log(nomi)
console.log(index, presente)

if (index === -1) {
	console.log(`Mi dispiace ma il nome che cerchi non è presente`)
} else {
	console.log(`Abbiamo trovato quello che cercavi`)
}
