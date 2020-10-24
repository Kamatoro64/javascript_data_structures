const Stack = require('./stack')

function isPalindrome(word) {
	stack = new Stack()

	let rword = "";

	for (let i = 0; i < word.length; i++) {
		stack.push(word[i])
	}

	while (stack.size() > 0) {
		rword += stack.pop()
	}

	if (rword === word) {
		return true
	} else {
		return false
	}
}

module.exports = isPalindrome

console

// stack = [c,o,n,s,o,l,e] <- Top of stack because we inserted starting from word[0]-> word[word.length-1]
// When elements are popped off the stack [e,l,o,s,n,o,c] is produced due to LIFO nature of stacks