console.log('pari dispari')

const num = parseInt(prompt('inserire un numero intero') /* string | null */) // number (NaN)
console.log(num)

// se il numero è pari o dispari
// i numeri pari sono quei numeri che divisi per 2 non danno resto
// 10 / 2 => 5 resto di 0
// i numeri dispari sono quei numeri che non sono pari
// quei numeri che divisi per 2 ci danno resto 1
// 11 / 2 => 5 resto di 1

// operatore modulo
console.log(num % 2) // 0 | 1
console.log(num % 3) // 0 | 1 | 2
console.log(num % 4) // 0 | 1 | 2 | 3

// 9 / 3 => 3 resto 0
// 10 / 3 => 3 resto 1
// 11 / 3 => 3 resto 2
// 12 / 3 => 4 resto 0

const resto = num % 2 // number 0 | 1

// se il numero è pari
if (resto == 0) {
	// - stampiamo 'e pari'
	console.log(`il numero ${num} è pari`)
} else {
	// else
	// - stampare 'è dispari'
	console.log(`il numero ${num} è dispari`)
}
