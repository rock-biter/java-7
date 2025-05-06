console.log('if else')

const condition = true // false

if (condition) {
	console.log('questo viene eseguito se condition = true')
}

let number = -10

// if (number > 3) {
// 	console.log('il numero è maggiore di 3')
// } else {
// 	console.log('il numero è minore o uguale a 3')
// }

// if (number > 5) {
// 	console.log('il numero è maggiore di 5')
// } else if (number < 5) {
// 	console.log('il numero e minore di 5')
// } else {
// 	console.log('il numero è uguale a 5')
// }

if ((number = 0)) {
	console.log('il numero è uguale a 0')
} else if (number > 5) {
	console.log('il numero è maggiore di 5')
} else {
	console.log('il numero è minore di 5')
}

// if (number > 10) {
// 	console.log('il numero è maggiore di 10')
// } else if (number > 5) {
// 	console.log('il numero è maggiore di 5')
// } else if (number > 0) {
// 	console.log('il numero è maggiore di 0')
// } else if (number > -3) {
// 	console.log('il numero è maggiore di -3')
// } else {
// 	console.log('il numero è minore o uguale a -3')
// }

let message = 'Ciao Pippo'

if (message != '') {
	console.log(message)
} else {
	message = 'Ciao Mamma'
	console.log(message)
}

// if (message == '') {
// 	console.log('paese sconosciuto')
// } else if (message == 'hello') {
// 	console.log('sei inglese')
// } else if (message == 'ciao') {
// 	console.log('sei italiano')
// } else {
// 	console.log('wtf')
// }

const numberA = false
const numberB = null

if (numberA == numberB) {
	console.log('i due numeri sono uguali')
} else {
	console.log('i due numeri non sono uguali')
}

if (numberA === numberB) {
	console.log('i due numeri sono identici')
} else {
	console.log('i due numeri non sono identici')
}

const num = -3
// 0 ---- 5 ---- 10 ---- 15 ----- 20
// num > 5
// e
// num < 15
if (num >= 5 && num <= 15) {
	console.log(`il numero ${num} è compreso tra 5 e 15`)
} else {
	console.log(`il numero ${num} non è compreso tra 5 e 15`)
}

// num < 5
// o
// num > 15

// if (num < 5 || num > 15) {
if (!(num >= 5 && num <= 15)) {
	console.log(`il numero ${num} non è compreso tra 5 e 15`)
} else {
	console.log(`il numero ${num} è compreso tra 5 e 15`)
}

const x = 3
const y = 4

const cond = !(x > y) // !(false) => true
const cond2 = !x > y // !(true) > 4 => false > 4
console.log(cond, cond2)

const piove = false // non sta piovendo

if (!piove) {
	console.log('non piove quindi vado a fare una passeggiata')
}

if (piove === false) {
	console.log('non piove quindi vado a fare una passeggiata')
}

let isLogged = false // non loggato

if (!isLogged) {
	console.log('redirect alla home page')
}
