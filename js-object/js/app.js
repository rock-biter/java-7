console.log('object')

// creare un oggetto
const persona1 = {} // oggetto vuoto
console.log(persona1)

const persona = {
	nome: 'Gianluca',
	cognome: 'Lomarco',
	celibe: false,
	age: 34,
	children: ['Caterina', 'Benedetta', 'Chiara'],
	saluta: function () {
		console.log('Ciao')
	},
	cartaDiCredito: {
		numero: '123456789123456',
		dataScadenza: '02/32',
		proprietario: 'Gianluca Lomarco',
	},
	// propName: 'Leggo questa',
}

// stampare il nome dell'oggetto persona?
console.log(persona.nome) // dot notation
console.log(persona['nome']) // brackets notation

const propName = 'cognome'
console.log(persona.cognome) // Lomarco
console.log(persona['cognome']) // Lomarco
console.log(persona[propName]) // Accesso dinamico alle priops di un oggetto
console.log(persona.propName) // undefined

console.log(persona.cartaDiCredito.numero)

persona.nome = 'Filippo' // acesso in scrittura
persona.age = 35

console.log(persona)

const macchina = {
	marca: 'Ford',
	modello: 'Fiesta',
	targa: 'FG123LK',
	dataImmatricolazione: '2012/02/25',
	colore: 'bianco',
	peso: 1100,
}

const macchina2 = {
	marca: 'Fiat',
	modello: 'Panda',
	targa: 'GH456PO',
	dataImmatricolazione: '2021/11/01',
	colore: 'rosso',
	peso: 900,
}

console.log(persona)
// persona.saluta()

const nome = 'Pippo'
console.log(nome.length)

const persona2 = persona // non viene duplcicato l'oggetto

persona2.nome = 'Maria'
persona2.cognome = 'Lomarco 2'
persona2.age = 12

// persona e parsona2 sono lo stesso identico oggetto
console.log(persona2)
console.log(persona)

const uotput = [
	'Mario Rossi può guidare',
	'Maria Gialli non può guidare',
	'Elena bianchi puo guidare',
]
