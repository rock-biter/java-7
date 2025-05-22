console.log('business card')

// recuperare tutti i campi del form dove l'utente inserisce i dati
const selectGenre = document.getElementById('genre')
const inputName = document.getElementById('name')
const inputCompanyName = document.getElementById('company')
const inputJobTitle = document.getElementById('job-title')
const inputEmail = document.getElementById('email')
const inputPhone = document.getElementById('phone')
const inputFile = document.getElementById('logo')
const formBusiness = document.getElementById('business-form')

// const outputElCompanyName = document.getElementById('company-name')
// console.log(outputElCompanyName)

const companyCardElement = document.getElementById('company-card')
// console.log(companyCardElement)
const outputElCompanyName = companyCardElement.querySelector('.company-name')
const outputElName = companyCardElement.querySelector('.card-name')
const outputElEmail = companyCardElement.querySelector('.card-email')
const outputElPhone = companyCardElement.querySelector('.card-phone')
const outputElJobTitle = companyCardElement.querySelector('.card-job-title')
const outputElImage = companyCardElement.querySelector('img')
// console.log(
// 	outputElCompanyName,
// 	outputElName,
// 	outputElEmail,
// 	outputElPhone,
// 	outputElJobTitle
// )

// console.log(
// 	selectGenre,
// 	inputName,
// 	inputCompanyName,
// 	inputJobTitle,
// 	inputEmail,
// 	inputPhone,
// 	inputFile
// )
console.log(formBusiness)

formBusiness.addEventListener('submit', function (event) {
	event.preventDefault() // blocca l'invio del form
	// console.log('event', event)

	/**
	 * Qui trovate il link (solo per i più temerari) per vedere come leggere un file caricato con un input di tipo file, e impostarlo come anteprima nella card
	 * https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
	 */

	// recuperare i valore inseriri nel form
	const data = getFormData()
	console.log(data)
	printCard(companyCardElement, data)

	// const genre = selectGenre.value
	// const name = inputName.value
	// const companyName = inputCompanyName.value
	// const jobTitle = inputJobTitle.value
	// const email = inputEmail.value
	// const phoneNumber = inputPhone.value
	// const imageSrc = inputFile.value

	// console.log(genre)
	// console.log(name)
	// console.log(companyName)
	// console.log(jobTitle)
	// console.log(email)
	// console.log(phoneNumber)
	// console.log(imageSrc)

	// stampare il valore di quei campi dentro la card

	// outputElCompanyName.innerHTML = data.companyName
	// outputElEmail.innerHTML = data.email
	// outputElJobTitle.innerHTML = data.jobTitle
	// outputElName.innerHTML = `${data.genre} ${data.name}`
	// outputElPhone.innerHTML = data.phoneNumber
	// outputElImage.src = data.imageSrc
	// outputElImage.alt = `Logo ${data.companyName} - ${data.name}`
})

// window.addEventListener('mousemove', function (e) {
// 	console.log('mousemove', e)
// })

const linkBoolean = document.getElementById('link')
console.log(linkBoolean)

// linkBoolean.addEventListener('click', function (e) {
// 	e.preventDefault()
// 	console.log('click su link')
// 	if (confirm('Sei sicuro di vole cambiare pagina??')) {
// 		// completare la navigazione
// 		console.log('alla vai via!!')
// 		window.location = e.target.href
// 	}
// })

function getFormData() {
	const genre = selectGenre.value
	const name = inputName.value
	const companyName = inputCompanyName.value
	const jobTitle = inputJobTitle.value
	const email = inputEmail.value
	const phoneNumber = inputPhone.value
	const imageSrc = inputFile.value

	return {
		genre: genre,
		name,
		companyName,
		jobTitle,
		email,
		phoneNumber,
		imageSrc,
	}
}

function printCard(cardEl, data) {
	const outputElCompanyName = cardEl.querySelector('.company-name')
	const outputElName = cardEl.querySelector('.card-name')
	const outputElEmail = cardEl.querySelector('.card-email')
	const outputElPhone = cardEl.querySelector('.card-phone')
	const outputElJobTitle = cardEl.querySelector('.card-job-title')
	const outputElImage = cardEl.querySelector('img')

	outputElCompanyName.innerHTML = data.companyName
	outputElEmail.innerHTML = data.email
	outputElJobTitle.innerHTML = data.jobTitle
	outputElName.innerHTML = `${data.genre} ${data.name}`
	outputElPhone.innerHTML = data.phoneNumber
	outputElImage.src = data.imageSrc
	outputElImage.alt = `Logo ${data.companyName} - ${data.name}`
}
