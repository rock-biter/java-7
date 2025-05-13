console.log('Array')

/**
 * Creare un array
 */
// dichiariamo qualche array
// const numero = 10 // number singolare
// const numeri = [2, 6, 3, 5, 9, 10] // Array(number)

// console.log(numeri)

// const nomi = ['Gianluca', 'Maria', 'Anna', 'Carlotta', 'Pino'] // Array(string)
// console.log(nomi)

// const lunghezzaNomi = nomi.length
// console.log(lunghezzaNomi)

// const booleani = [true, false, true, true] // Array(bool)
// console.log(booleani)

// const arrayDiArray = [numeri, nomi, [true, false]] // Array(Array)
// console.log(arrayDiArray)

// const misto = ['Gianluca', 'Lomarco', 34, 'M', true, null, undefined] // Array(any)
// console.log(misto)

// const vuoto = [] // Array
// console.log(vuoto)

/**
 * Accedere in lettura agli elementi di un array
 */
const nomi = ['Gianluca', 'Maria', 'Anna', 'Carlo', 'Giuseppe', 'Patrizia'] // Array(string)
console.log(nomi)

const secondoElemento = nomi[1] // Maria
console.log(secondoElemento)

const primoElemento = nomi[0] // Gianluca
console.log(primoElemento)

// Il numero di elementi di un array è sempre array.length
// l"ultimo indice disponibile di ogni array = length - 1

const ultimoIndice = nomi.length - 1
console.log(ultimoIndice)
const ultimoElemento = nomi[ultimoIndice] // nomi[4]
console.log(ultimoElemento)

// semplificazione
const ancheQuestoUltimo = nomi.at(-1) // nomi[nomi.length - 1]
console.log(ancheQuestoUltimo)

const message = `Ciao ${nomi[3]}, benvenuto!`
console.log(message)

/*
Accedere in scrittura ai dati dell'array
*/
nomi[2] = 'Filippo' // sostiuisco Anna coin Filippo
console.log(nomi)

// sostituire l'ultimo elem,ento di un array
nomi[nomi.length - 1] = 'Antonio'
console.log(nomi)

/**
 * Aggiungere uno o più elementi alla fine dell'array
 */
// nomi.push('Franca', 'Benedetta')
console.log(nomi)

// nomi[nomi.length] = 'Mario'
console.log(nomi)

/**
 * Togliere un elemento alla fine dell'array
 */
// const ultimo = nomi.pop()
// console.log(ultimo)
console.log(nomi)

/**
 * Agginugere uno o più elementi all'inizio dell'array
 */

// nomi.unshift('Gesu')
console.log(nomi)

/**
 * Togliere un elemento all'inizio dell'array
 */
// const primo = nomi.shift()
// console.log(primo)
console.log(nomi)

/**
 * Stampiamo tutti i nomi dell'array
 */
const nomiUppercase = []

for (let i = 0; i < nomi.length; i++) {
	const currentElement = nomi[i]
	console.log(i, currentElement)

	const currentElementUpper = currentElement.toUpperCase()
	nomiUppercase.push(currentElementUpper)
}

console.log(nomiUppercase)

/**
 * dato un array di numeri genera un nuovo array con i sui doppi
 */

const numeri = [1, 2, 8, 6, 9, 4, 21] // [2,4,16,12,18,8,42]
console.log(numeri)
const doppi = []
// console.log('lenght', numeri.lenght)

for (let i = 0; i < numeri.length; i++) {
	const currentElement = numeri[i]
	console.log(i, currentElement)
	const double = currentElement * 2
	doppi.push(double)
}

console.log(doppi)

console.log(nomi[100])
console.log(nomi[-1])

const prodotti = []
console.log(prodotti[prodotti.length - 1]) // prodotti[-1]

prodotti[100] = 'Scarpa'
console.log(prodotti.length) // ?? 1 | 0 | 99 | 6 | -1 | undefined | 100 | 5 | 101
// 100 = length - 1 => length = 100 + 1
console.log(prodotti)

for (let i = 0; i < prodotti.length; i++) {
	const element = prodotti[i]
	console.log(element)
}
