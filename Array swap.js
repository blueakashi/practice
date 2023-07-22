const numbers = [13, 14, 23, 25, 32]

const swap = numbers[0]
numbers[0] = numbers[numbers.length - 1]
numbers[numbers.length - 1] = swap

console.log(numbers)