console.log('Strings')

const name = 'Gianluca' // string
const surname = 'Lomarco' // string
// concatenazione tra stringhe
const fullName = name + ' ' + surname // string
const stringa = `quiesta è una stringa
andando a capo
`
console.log(stringa)
// template literals
// const fullName3 =
// 	'Benvenuto ' + name + ' ' + surname + ', piacere di conoscerti'
const price = 60.321269 * 3 // number
const fullName3 = `Benvenuto ${name} ${surname}, piacere di conoscerti. Devi pagare ${price.toFixed(
	2
)} euro.`
console.log(fullName3)

// leggere la lunghezza di una variabile dio tipo string
const nameLength = name.length
console.log(nameLength)

const age = 32 // number
console.log(age.length) // undefined

// mettere una stringa tutta in maiuscolo
// 'Gianluca' => 'GIANLUCA'
const nameUpper = name.toUpperCase()
console.log(nameUpper, name)

// const fullName = 'Gianluca Lomarco'
const words = fullName.split(' ')
// console.log(words)
const subString = fullName.substring(0, 8) // string
console.log(subString)

const fullName2 = fullName.replace('Gianluca', '***') // string
console.log(fullName2)

const finded = fullName.includes('mar') // boolean (false)
console.log(finded)
