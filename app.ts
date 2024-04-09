// You are given an array of integers A of size N.
// Return the difference between the maximum among all even numbers of A and the minimum among all odd numbers in A.
// Problem Constraints
// 2 <= N <= 1e5
// -1e9 <= A[i] <= 1e9
// There is atleast 1 odd and 1 even number in A
// The first argument given is the integer array, A.
// Return maximum among all even numbers of A - minimum among all odd numbers in A.
// Example Input
//  A = [0, 2, 9]     || -7
// const A = [0, 2, 9]
// //  A = [5, 17, 100, 1] || 99
// const B = [5, 17, 100, 1]
// console.log(diffMaxEvenMinOdd(A))
// console.log(diffMaxEvenMinOdd(B))
function diffMaxEvenMinOdd(array: number[]) {
	let maxEven: number = Number.NEGATIVE_INFINITY
	let minOdd: number = Number.POSITIVE_INFINITY
	array.forEach(num => {
		if (num % 2 == 0) {
			maxEven = maxEven ? Math.max(maxEven, num) : num
		} else {
			minOdd = minOdd ? Math.min(minOdd, num) : num
		}
	})

	const result = maxEven - minOdd
	return result
}

// You are given an integer array A and an integer B.
// You are required to return the count of pairs having sum equal to B.
// NOTE: pair (i,j) and (j,i) are same.
// Problem Constraints
// 1 <= A.size() <= 10000
// 1 <= A[i] <= 10000
// 1 <= B <= 10000

function countPairsToSum(A: number[], B: number): number {
	const map: { [key: number]: number } = {}
	let count = 0
	A.forEach(item => {
		const complement = B - item
		if (map[complement]) {
			count += map[complement]
		}
		map[item] = (map[item] || 0) + 1
	})
	return count
}

function main() {
	countPairsToSum([1, 2, 3, 1, 2], 3)
}
main()
