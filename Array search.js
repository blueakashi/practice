const numbers = [13, 12, 15, 24, 23]

//FINd FIRST NUMBER INdEX

function searchEvenNumber(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            return i; 
        } }
         return -1
    }

//FINd ALL EVEN NUMBERS

function allEvenNumbers(array) {
    const evens = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evens.push(i)
        }
    }
    return evens
}

//FINd ALL EVEN NUMBERS (Join method)

function allEvenNumbers2(array) {
    const evens = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evens.push(i)
        }
    }
    return evens.join(', ')
}

console.log(searchEvenNumber(numbers))
console.log(allEvenNumbers(numbers))
console.log(allEvenNumbers2(numbers))