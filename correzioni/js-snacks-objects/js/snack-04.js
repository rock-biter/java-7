console.log('04')

/**
 * Creare un array che rappresente delle parsone ogni persona ha nome cognome e eta
 * Genera un array di messaggio con cnome congome e se può guidare
 */

const persone = [
	{
		nome: 'Gianni',
		cognome: 'Bianchi',
		eta: 62,
	},
	{
		nome: 'Anita',
		cognome: 'Verdi',
		eta: 12,
	},
	{
		nome: 'Bianca',
		cognome: 'Gialli',
		eta: 31,
	},
	{
		nome: 'Adamo',
		cognome: 'Rossi',
		eta: 18,
	},
]

console.log(persone)

const messaggi = []

for (let i = 0; i < persone.length; i++) {
	const persona = persone[i]
	console.log(i, persona)
	const nome = persona.nome
	const cognome = persona.cognome
	const eta = persona.eta

	let finale = 'può guidare'

	if (eta < 18) {
		finale = 'non può guidare'
	}

	const messaggio = `${nome} ${cognome} ${finale}`

	// let messaggio = `${nome} ${cognome}`

	// if (eta < 18) {
	// 	messaggio += ' non'
	// }

	// messaggio += ' può guidare.'
	// console.log(messaggio)

	messaggi.push(messaggio)
}

console.log(messaggi)
