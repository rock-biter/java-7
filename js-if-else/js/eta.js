console.log('eta')

// chiedo l'eta della prima persona
let age1 = prompt('inserisci la tua età') // string | null
age1 = parseInt(age1)
console.log(age1)
// chiedo l'eta della seconda persona
let age2 = prompt("inserisci l'eta del tuo cane")
age2 = parseInt(age2)
// const age2 = parseInt(prompt("inserisci l'eta del tuo cane"))
console.log(age2)

// if eta1 > eta2
if (age1 > age2) {
	console.log(age1)
	// - consolo log eta1
} else if (age2 > age1) {
	// else if eta2 > eta1
	// - console log eta2
	console.log(age2)
} else {
	// else
	// - console log 'stessa eta'
	console.log('avete la stessa età')
}
