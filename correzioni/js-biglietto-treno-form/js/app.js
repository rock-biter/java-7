console.log('biblietto del treno')

// recuperare il form dal DOM
const formElement = document.getElementById('form-biglietto')
const inputKM = formElement.querySelector('#km')
const selectSconto = formElement.querySelector('#sconto')
// const bigliettoCard = document.getElementById('biglietto')
const prezzoOutputElement = document.querySelector('#biglietto .prezzo')
console.log(prezzoOutputElement)
// console.log(inputKM, selectSconto)
// ascoltiamo l'evento submit e al submit blocchiamo l'invio del form
formElement.addEventListener('submit', function (event) {
	event.preventDefault() // blocca l'invio del form
	console.log('submit del form', event)

	// leggere il numero di km inseriti nell'input km (string)
	const kmValue = parseFloat(inputKM.value) // string

	// leggere il valore della select dello sconto ['','1','2']
	const scontoValue = selectSconto.value // string

	console.log(kmValue, scontoValue)

	// validazione (opzionale)
	// km deve essere maggiore di 0
	// km non deve essere un NaN
	if (isNaN(kmValue) || kmValue < 0) {
		alert('Il numero di km non è valido!')
		return
	}

	// scontoValue essere uno di questi 3 valori ['','1','2']

	// calcolare il prezzo base
	const prezzoBase = kmValue * 0.21
	console.log('prezzo base', prezzoBase)

	// calcoliamo lo sconto
	let percentualeSconto = 0

	if (scontoValue === '1') {
		// utente ha selezionato minorenni
		percentualeSconto = 20
	} else if (scontoValue === '2') {
		// utente ha selezionato over 65
		percentualeSconto = 40
	}

	console.log('percentuale sconto', percentualeSconto)

	const sconto = (prezzoBase * percentualeSconto) / 100
	console.log('sconto', sconto)

	// calcoliamo il prezzo finale
	const prezzoFinale = prezzoBase - sconto
	console.log('prezzo finale', prezzoFinale)

	// stampiamo nella card il prezzo formattato (con 2 cifre decimali)

	// console.log(prezzoOutputElement)
	prezzoOutputElement.innerHTML = prezzoFinale.toFixed(2) + ' &euro;'
	// prezzoOutputElement.innerHTML = new Intl.NumberFormat('it-IT', {
	// 	style: 'currency',
	// 	currency: 'EUR',
	// }).format(prezzoFinale)
})
