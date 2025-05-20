console.log('Hello DOM')
/**
 * https://en.wikipedia.org/wiki/Document_Object_Model
 */

// Recupero l'elemento dal DOM ( Document Object Model )
const paragrafo = document.getElementById('saluto')
console.dir(paragrafo)

// modificare il contentuto di un elemento del DOM
// paragrafo.innerHTML = 'Ciao giangi'

// modificare una proprietà dell'elemnto del DOM (attributo class)
// paragrafo.className = paragrafo.className + ' blue'
// paragrafo.className += 'blue'

// altro modo per modificare le clssi
// paragrafo.classList.add('bg-violet')
// paragrafo.classList.remove('red')

// modificare lo stile inline
console.log(paragrafo.style)
// paragrafo.style.color = '#ffff00'

// recuperare il pulsante "cambia contenuto"
const buttonChangeContent = document.getElementById('change-content')
console.log(buttonChangeContent)

let i = 0

// ascoltiamo l'evento click sul pulsante
buttonChangeContent.addEventListener('click', function () {
	console.log('click su pulsante cambia contenuto')
	i++

	paragrafo.innerHTML = i
})

// aggiungiamo l'id al button
// recuperare l'elemento dal DOM
const buttonChangeStyle = document.getElementById('change-style')

// aggiungo l'event listener che ascolta l'evento click
buttonChangeStyle.addEventListener('click', function () {
	console.log('click cambia style')

	paragrafo.classList.toggle('bg-violet')
	paragrafo.classList.toggle('red')
	paragrafo.style.color = '#ffff00'
	// paragrafo.className += ' bg-violet'
})
