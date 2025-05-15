const teachers = ['Nathan', 'Ed', 'Fabio', 'Phil', 'Carlo', 'Lewis', 'Luca'] // NON MODIFICARE QUESTA VARIABILE
console.log(teachers)

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.toReversed()
// for (let i = 0; i < teachers.length; i++) {
// 	const index = teachers.length - 1 - i
// 	const element = teachers[index]
// 	reversedTeachers.push(element)
// }
// console.log(teachers)
// console.log(reversedTeachers)

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
let longNames = []
// for (let i = 0; i < teachers.length; i++) {
// 	const name = teachers[i] // string
// 	console.log(name, name.length)
// 	if (name.length >= 5) {
// 		longNames.push(name)
// 	}
// }
// longNames = teachers.filter((name) => name.length >= 5) // PRO
// console.log(longNames)

// 3. Rimuovi 'Ed' dall'array teachers
const indexEd = teachers.indexOf('Maria') // number
// console.log(indexEd)
// if (indexEd !== -1) {
// 	teachers.splice(indexEd, 1)
// }
// console.log(teachers)

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
let isFabioPresent = teachers.includes('Fabio') // boolean
// for (let i = 0; i < teachers.length; i++) {
// 	const name = teachers[i]
// 	console.log(name)
// 	if (name === 'Fabio') {
// 		isFabioPresent = true
// 	}
// }

console.log(isFabioPresent)

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
let teachersString = teachers.join()
// const separatore = ', '
// for (let i = 0; i < teachers.length; i++) {
// 	const name = teachers[i]
// 	// console.log(name)

// 	teachersString += name
// 	if (i < teachers.length - 1) {
// 		teachersString += separatore
// 	}
// }

console.log(teachersString)
