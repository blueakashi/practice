const numbers = [13, 12, 15, 24, 23]

function searchEvenNumber(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            return i; 
        } }
        return -1
    }

console.log(searchEvenNumber(numbers))