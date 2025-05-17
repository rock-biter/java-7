console.log('foreach')

// const cars = [
// 	{
// 		marca: 'Ford',
// 		modello: 'Fiesta',
// 		alimentazione: 'gpl',
// 	},
// 	{
// 		marca: 'Fiat',
// 		modello: 'Panda',
// 		alimentazione: 'elettrica',
// 	},
// 	{
// 		marca: 'Audi',
// 		modello: 'Q7',
// 		alimentazione: 'gpl',
// 	},
// 	{
// 		marca: 'Toyota',
// 		modello: 'Auris',
// 		alimentazione: 'diesel',
// 	},
// 	{
// 		marca: 'Fiat',
// 		modello: '500',
// 		alimentazione: 'benzina',
// 	},
// 	{
// 		marca: 'Toyota',
// 		modello: 'Yaris',
// 		alimentazione: 'elettrica',
// 	},
// 	{
// 		marca: 'Fiat',
// 		modello: 'Focus',
// 		alimentazione: 'benzina',
// 	},
// 	{
// 		marca: 'Opel',
// 		modello: 'Corsa',
// 		alimentazione: 'diesel',
// 	},
// 	{
// 		marca: 'Mercedes',
// 		modello: 'Classe A',
// 		alimentazione: 'metano',
// 	},
// 	{
// 		marca: 'Ford',
// 		modello: 'Kuga',
// 		alimentazione: 'gpl',
// 	},
// ]

// console.log(cars)
// const benzina = []

// cars.forEach((car) => {
// 	console.log(car, car.alimentazione)
// 	if (car.alimentazione === 'benzina') {
// 		benzina.push(car)
// 	}
// })

// console.log(benzina)

/**
 * creare una funzione che riceve 3 parametri: nome, cognome ed eta
 * la fuznione deve creare un oggetto di una parsona con le proprietà nome, congome e eta
 * e deve ritornare l'oggetto
// {
//   nome: 'gianluca',
//   cognome: 'Lomarco',
//   eta : 34
// }
 */

/**
 *
 * @param {string} nome
 * @param {string} cognome
 * @param {number} eta
 */
function creaPersona(nome, cognome, eta, genere = 'M', attivo = true) {
	const nuovaPersona = {
		nome: nome,
		cognome,
		eta,
		genere,
		attivo,
	}

	// console.log(persona)

	// return object
	return nuovaPersona
}

const persona1 = creaPersona('Gianluca', 'Lomarco', 34, 'M', false)
const persona2 = creaPersona('Anna', 'Bianchi', 53, 'F')

console.log(persona1, persona2)

function creaMacchina(_marca, _modello, _alimentazione) {
	return {
		marca: _marca,
		modello: _modello,
		alimentazione: _alimentazione,
	}
}

const macchina1 = creaMacchina('Fiat', 'Panda', 'metano')
const macchina2 = creaMacchina('Ford', 'Fiesta', 'diesel')

console.log(macchina1, macchina2)
