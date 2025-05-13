console.log('array')

let a = 10
let b = a

b += 2
console.log(b) // 12
console.log(a) // 10

let nome = 'Gianluca'
let nome2 = nome

nome2 += ' Lomarco'

console.log(nome) // Gianluca
console.log(nome2) // Gianluca Lomarco

// Con gli array invece ...

const numeri = [1, 2, 3, 4, 5]
const numeri2 = numeri
const numeri3 = []
// numeri3 = [1, 2] // errore

numeri2.push(6)

for (let i = 0; i < numeri.length; i++) {
	const num = numeri[i]
	numeri3.push(num)
}

numeri3.push(7)

// numeri e numeri 2 sono lo stesso identico array ma con nomi diversi

console.log(numeri)
console.log(numeri2)
console.log(numeri3)
