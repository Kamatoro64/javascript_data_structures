const Stack = require('./stack');

test('size() returns 0 for empty stack', () => {
	const stack = new Stack()
	expect(stack.size()).toBe(0)
})

test('pop() returns undefined for empty stack', () => {
	const stack = new Stack()
	expect(stack.pop()).toBe(undefined)
})

test('pop() does not decrement count for empty stack (no negatives)', () => {
	const stack = new Stack()
	expect(stack.count).toBe(0)
	expect(stack.pop()).toBe(undefined)
	expect(stack.count).toBe(0)
})

test('push(item) adds item to stack and increases count', () => {
	const stack = new Stack()
	stack.push('Banana')
	expect(stack.items[0]).toBe('Banana')
	expect(stack.count).toBe(1)
	expect(stack.size()).toBe(1)
})



test('pop() correctly returns last item added to stack and decreases count', () => {
	const stack = new Stack()
	stack.push('Banana')
	stack.push('Candy')
	stack.push('Cake')
	expect(stack.count).toBe(3)
	expect(stack.pop()).toBe('Cake')
	expect(stack.count).toBe(2)
	expect(stack.size()).toBe(2)
})

test('peek() correctly returns last item added to stack but not decrease count', () => {
	const stack = new Stack()
	stack.push('Banana')
	stack.push('Candy')
	stack.push('Cake')
	expect(stack.count).toBe(3)
	expect(stack.peek()).toBe('Cake')
	expect(stack.count).toBe(3)
	expect(stack.size()).toBe(3)
})



