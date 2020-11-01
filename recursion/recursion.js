/* A study on recursion

A requirement of recursive functions is a termination point or base case. Every recursive program must have base case to make sure that the function will terminate. 

*/

// Start with a function that counts down from a given integer n. Then implement this as a recursive function 
function countdown(n) {
	for (let i = n; i > 0; i--) {
		console.log(i)
	}
}

function countdownRecursive(n) {

	if (n === 0) { // Base case. Stop recursive behaviour when n is reduced to 0
		return
	}
	console.log(n)
	countdownRecursive(n - 1)
	// WARNING: implicit return at the end of the function here
}

/* Call stack
countdownRecursive(3)
	countdownRecursive(2)
		countdownRecursive(1)
			countdownRecursive(0)
				-> Base case. Return
		countdownRecursive(1) -> End of function. Returns
	countdownRecursive(2) -> End of function. Return
countdownRecursive(3) -> End of function. Returns
END
*/

/*
Write a runction that sums all numbers up n (inclusive). This is a more meaningful recursion problem

Note: The output of the script is the total/sum and not a side effect (console.log), be sure to set the return value correctly. (i.e. don't rely on the program returining implicitly at the end of the function). See BUG
*/

function sumRange(n) {
	let total = 0;
	for (let i = n; i > 0; i--) {
		total += i
	}
	return total
}

// The total variable's scope is limited to each recursive function. Therefore we have to pass it as an argument for each recursion
function sumRangeRecursive(n, total = 0) {
	if (n <= 0) {
		return total
	}
	return sumRangeRecursive(n - 1, total += n) // See BUG
}

console.log(sumRangeRecursive(3))

/* Call stack
BUG FIX: Forgetting to return the return value of the recursive function. Fails at unwind
sumRangeRecursive(3,0)
	sumRangeRecursive(2,3)
		sumRangeRecursive(1, 5) -> returns undefined since -- BUG
			sumRangeRecursive(0, 6) -> return 6 to caller      |
															   |
															   |
															   sumRangeRecursive(n - 1, total += n)
															   return (implicit return here)
															   |
															   |
															   Fix: return sumRangeRecursive(n - 1, total += n) (explicitly return the return value of the recursive function)
															   |
|--------------------------------------------------------------|
Corrected sequence:

sumRangeRecursive(3,0)
	sumRangeRecursive(2,3)
		sumRangeRecursive(1, 5)
			sumRangeRecursive(0, 6) -> return 6 to caller
		return 6
	return 6
return 6
*/

// Real recursion problem - print children

const tree = {
	name: 'John',
	children: [
		{
			name: 'Jim',
			children: []
		},
		{
			name: 'Zoe',
			children: [
				{ name: 'Kyle', children: [] },
				{ name: 'Sophia', children: [] },

			]
		}
	]
}

// Each Object represents a person and has a name and children property

function printChildren(tree) {
	// Base case. If person has no children, return function
	if (!tree.children || !tree.children.length) {
		return
	}
	// Else, print each child and run the printChildren function on each
	tree.children.forEach(child => {
		console.log(`${tree.name} <- ${child.name}`)
		printChildren(child)
	});

}

printChildren(tree)
