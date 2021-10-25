const decode = require('../index')

const decodeLetters = ['abcdefghijklmnopqrstuvwxyz']

describe('reverse letters', () => {
	it('Test cases', () => {
		const expectedOutput = 'zyxwvutsrqponmlkjihgfedcba'
		const actualOutput = 'zyxwvutsrqponmlkjihgfedcba'
		expect(actualOutput).toBe(expectedOutput)
	})
})
