console.log('arrow function')

// arrow fn con RITORNO ESPLICITO
// const somma = (a, b) => {
// 	return a + b
// }

// arrow fn con RITORNO IMPLICITO
const somma = (a, b) => a + b

console.log(somma(10, 23))

const concatena = (stringA, stringB) => stringA + stringB
console.log(concatena('ciao', 'Mamma'))

const numeri = [1, 2, 5, 6]

function ciclaArray(array, funzioneDaInvocare) {
	for (let i = 0; i < array.length; i++) {
		const el = array[i]

		// console.log(el)
		funzioneDaInvocare(el)
	}
}

ciclaArray(numeri, logIsEven)

function logDouble(num) {
	console.log(num * 2)
}

function logPowerOfTwo(num) {
	console.log(num ** 2)
}

function logIsEven(num) {
	if (num % 2 === 0) {
		console.log(true)
	} else {
		console.log(false)
	}
}
