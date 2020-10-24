/* Implement a stack in JavaScript */

class Stack {
	constructor() {
		this.items = {}
		this.count = 0
	}

	push(item) {
		this.items[this.count] = item
		this.count++;
	}

	pop() {
		if (this.count === 0) {
			return undefined
		}

		const top = this.items[this.count - 1]
		delete this.items[this.count - 1]
		this.count--;
		return top
	}

	size() {
		return this.count
	}

	peek() {
		const top = this.items[this.count - 1]

		return top
	}


}


module.exports = Stack
