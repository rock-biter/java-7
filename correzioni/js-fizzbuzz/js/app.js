console.log('fizz buzz')

/**
 * Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
 */

for (let i = 0; i < 100; i++) {
	const n = i + 1
	const resto3 = n % 3
	const resto5 = n % 5
	// const resto15 = n % 15

	// console.log(`numero: ${n}, resto: ${resto}`)
	if (resto5 === 0 && resto3 === 0) {
		console.log(`FizzBuzz`)
	} else if (resto3 === 0) {
		console.log(`Fizz`)
	} else if (resto5 === 0) {
		console.log(`Buzz`)
	} else {
		console.log(n)
	}

	console.log('-------')
}
