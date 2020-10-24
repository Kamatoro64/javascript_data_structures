const isPalindrome = require('./isPalindrome.js');

test('Check isPalindrome() function correctly checks if string is palindrome', () => {
	expect(isPalindrome('racecar')).toBe(true)
	expect(isPalindrome('console')).toBe(false)

})