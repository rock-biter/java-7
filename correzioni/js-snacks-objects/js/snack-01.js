console.log('01')

/**
 * Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e
alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a
benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array.
 */

const cars = [
	{
		marca: 'Ford',
		modello: 'Fiesta',
		alimentazione: 'gpl',
	},
	{
		marca: 'Fiat',
		modello: 'Panda',
		alimentazione: 'elettrica',
	},
	{
		marca: 'Audi',
		modello: 'Q7',
		alimentazione: 'gpl',
	},
	{
		marca: 'Toyota',
		modello: 'Auris',
		alimentazione: 'diesel',
	},
	{
		marca: 'Fiat',
		modello: '500',
		alimentazione: 'benzina',
	},
	{
		marca: 'Toyota',
		modello: 'Yaris',
		alimentazione: 'elettrica',
	},
	{
		marca: 'Fiat',
		modello: 'Focus',
		alimentazione: 'benzina',
	},
	{
		marca: 'Opel',
		modello: 'Corsa',
		alimentazione: 'diesel',
	},
	{
		marca: 'Mercedes',
		modello: 'Classe A',
		alimentazione: 'metano',
	},
	{
		marca: 'Ford',
		modello: 'Kuga',
		alimentazione: 'gpl',
	},
]

const macchineBenzina = []
const macchineDiesel = []
const altreAlimentazioni = []

console.log(cars)
for (let i = 0; i < cars.length; i++) {
	const currentCar = cars[i] // object (car)
	// console.log(i, currentCar.alimentazione)
	let arrayToPush = altreAlimentazioni
	const alimentazione = currentCar.alimentazione

	if (alimentazione === 'benzina') {
		arrayToPush = macchineBenzina
	} else if (alimentazione === 'diesel') {
		arrayToPush = macchineDiesel
	}

	arrayToPush.push(currentCar)

	// if (alimentazione === 'benzina') {
	// 	macchineBenzina.push(currentCar)
	// } else if (alimentazione === 'diesel') {
	// 	macchineDiesel.push(currentCar)
	// } else {
	// 	altreAlimentazioni.push(currentCar)
	// }
}

// for (const car of cars) {
// 	let arrayToPush = altreAlimentazioni
// 	const alimentazione = car.alimentazione

// 	if (alimentazione === 'benzina') {
// 		arrayToPush = macchineBenzina
// 	} else if (alimentazione === 'diesel') {
// 		arrayToPush = macchineDiesel
// 	}

// 	arrayToPush.push(car)

// }

console.log(macchineBenzina, macchineDiesel, altreAlimentazioni)
