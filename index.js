function decode(message) {
	const alphabet = [...'abcdefghijklmnopqrstuvwxyz']
	const reversedAlphabet = [...'abcdefghijklmnopqrstuvwxyz'].reverse()
	return message
		.split('')
		.map((letter) => {
			if (letter === '') return ''
			return reversedAlphabet[alphabet.indexOf(letter)]
		})
		.join('')
}

module.exports = decode
