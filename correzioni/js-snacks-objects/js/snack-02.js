/**
 * Apartire da un array di stringhe creare un nuovo array formatando le stringe con la prima lettera maiuscola e le altre minuscole
 */

const parole = ['Mamma', 'CANE', 'porTonCIno'] // [Mamma, Cane, Portoncino]
const paroleFormattate = []
console.log(parole)

for (let i = 0; i < parole.length; i++) {
	const parola = parole[i] // string
	// console.log(i, parola)
	// prendere le prima lettera della parola e metterla maiuscola
	const firstChar = parola.charAt(0).toUpperCase()
	// firstChar = firstChar.toUpperCase()
	// console.log(firstChar)
	// prendere il resto della parola (dalla seconda lettera in poi) e metterela tutta minuscola
	const restoParola = parola.substring(1).toLowerCase()
	// console.log(restoParola)

	// concatenare la prima lettera con il resto della parola
	// console.log(firstChar + restoParola)
	const parolaFormattata = firstChar + restoParola
	paroleFormattate.push(parolaFormattata)
}

console.log(paroleFormattate)
