console.log('ciclo for')

// dire 10 volte ciao all'utente
// for (let i = 0; i < 10; i++) {
// 	console.log(i)
// 	console.log('ciao')

// 	console.log('i++ -------')
// }

// console.log('Siamo fuori dal loop')

// stampare i primi 10 numeri: da 1 a 10 (10 iterazioni)
// for (let i = 0; i < 10; i++) {
// 	const num = i + 1
// 	console.log(`i = ${i}, num = ${num}`)
// 	console.log('------ i++')
// }

// stampare i primi 10 numeri: da 11 a 20 (10 iterazioni)
// for (let i = 0; i < 10; i++) {
// 	const num = i + 1 + 10
// 	console.log(`i = ${i}, num = ${num}`)
// 	console.log('------ i++')
// }

// stampare i primi 10 numeri: da 1 a 10 al contrario (10 iterazioni)
// for (let i = 10; i > 0; i--) {
// 	const num = i
// 	console.log(`i = ${i}, num = ${num}`)
// 	console.log('------ i++')
// }

// stampando i numeri da 1 a 100
// for (let i = 0; i < 100; i++) {
// 	const num = i + 1
// 	// console.log(num)

// 	// stampiamo solo i numeri dispari
// 	// - calcolare il modulo di 2 (il resto della divisione per 2)
// 	const resto = num % 2
// 	// console.log(`num: ${num}, resto: ${resto}`)
// 	// SE modulo di 2 === 0
// 	// const ePari = resto === 0
// 	const eDispari = resto === 1
// 	if (eDispari) {
// 		//  - stampiamolo
// 		console.log(num)
// 	} else {
// 		// ALTRIMENTI
// 		// - stampere il numero incrementato di 1
// 		console.log(num + 1)
// 	}

// 	// stampiamo il numero * 2
// 	// const double = num * 2
// 	// console.log(double)
// }

// console.log(num) // num not defined
// console.log(i) // i is not defined
console.log('fuori dal loop')

// i = 0

// i < 10 => 0 < 10 => true
// log(i) => log(0), i++ => i = 1
// i++ => i = 2

// i < 10 => 2 < 10 => true
// log(i) => log(2), i++ => i = 3
// i++ => i = 4

// i < 10 => 4 < 10 => true
// log(i) => log(4), i++ => i = 5
// i++ => i = 6

// i < 10 => 6 < 10 => true
// ... log(6)
// i = 8

// i < 10 => 8 < 10 => true
// ... log(8)
// i = 10

// i < 10 => 10 < 10 => false

// log('fuori dal loop)

// fare la somma dei primi 10 numeri 1 + 2 + 3 + 4 ... + 10 = ?
let sum = 0

// const numIterazioni = parseInt(prompt('Inserisci un numero intero')) // string | null
// console.log(numIterazioni)

// for (let i = 0; i < numIterazioni; i++) {
// 	// console.log(i)
// 	const num = i + 1
// 	console.log(num)
// 	sum += num
// }

// console.log(`La somma è ${sum}.`)

for (let i = 0; i < 100; i += 2) {
	const num = i + 2
	console.log('i: ', i)
	console.log('num: ', num)
	// const resto = num % 2

	// if (resto === 0) {
	// 	console.log(num)
	// }
	console.log('----------------')
}
