console.log('form')
const inputPrezzo = document.getElementById('prezzo')
const selectVeluta = document.getElementById('valuta')
const buttonConverti = document.getElementById('converti')
const divRisultato = document.getElementById('risultato')
// console.log(inputPrezzo, selectVeluta, buttonConverti, divRisultato)

buttonConverti.addEventListener('click', function () {
	console.log('effettuare la conversione')

	// 1. leggere il valore inserito dall'utente nell'input prezzo
	const prezzo = parseFloat(inputPrezzo.value) // string
	console.log(prezzo)

	if (isNaN(prezzo)) {
		return
	}

	// 2. devo leggere il valore della valuta selezionata dall'utente nella select
	const valuta = selectVeluta.value
	console.log(valuta)

	let prezzoConvertito = prezzo
	let symbol = 'EUR'
	// 3. calcolare il prezzo convertito
	if (valuta === 'dollari') {
		prezzoConvertito *= 1.13
		symbol = 'USD'
	} else if (valuta === 'sterline') {
		prezzoConvertito *= 0.84
		symbol = 'GBP'
	} else if (valuta === 'franchi') {
		prezzoConvertito *= 0.94
		symbol = 'CHF'
	}

	console.log(prezzoConvertito)

	// 4. stampare il prezzo convertito
	divRisultato.innerHTML = `${prezzoConvertito.toFixed(2)} ${symbol}`
})
