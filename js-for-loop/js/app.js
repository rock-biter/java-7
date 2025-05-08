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

/**
 * @here
Ciao ragazzi,
Esercizio di oggi: FizzBuzz
nome repo: js-fizzbuzz

Consegna:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?

Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

Buon lavoro e buon divertimento! :slightly_smiling_face:

1 => 1
2 => 2
3 => Fizz
4 => 4
5 => Buzz
6 => Fizz
7 => 7
8 => 8
9 => Fizz

...

15 => FizzBuzz
 
...

20 => Buzz
21 => Fizz

....
30 => FizzBuzz

 */
