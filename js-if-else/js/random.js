console.log('random')

// const num = Math.random() // number 0 - 0.9999999999 [0 - 1[
// console.log(num)

// const num2 = Math.random() * 10 // number 0. - 9.99999999
// console.log(num2)

// const int = Math.floor(Math.random() * 10) + 1 // number 1 - 10
// const int2 = Math.ceil(num2) // number 0 - 10
// const int3 = Math.round(num2) // number 0 - 10
// console.log(int, int2, int3)

const dice1 = Math.floor(Math.random() * 6) + 1 // 1 - 6
const dice2 = Math.floor(Math.random() * 6) + 1 // 1 - 6
console.log('io:', dice1)
console.log('pc:', dice2)

if (dice1 > dice2) {
	alert('hai vinto')
} else if (dice1 < dice2) {
	alert('hai perso')
} else {
	alert('pareggio')
}

console.log('La partita è finita')
