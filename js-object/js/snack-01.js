console.log('snack 01')

const zucchine = [
	{
		varieta: 'lunga',
		peso: 200,
		lunghezza: 30,
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

console.log(zucchine)
// const secondaZucchina = zucchine[1] // object
// console.log(secondaZucchina)
// // stampa il peso della seconda zucchina
// console.log(secondaZucchina.peso)
// console.log(zucchine[1].peso)
// console.log(zucchine[1]['peso']) // tendenzialmente non si fa
let somma = 0

for (let i = 0; i < zucchine.length; i++) {
	// const elementoCorrente = zucchine[i] // object
	// console.log(i, elementoCorrente.peso)
	somma += zucchine[i].peso
}

console.log(somma)
