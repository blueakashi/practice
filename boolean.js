function booleanExample() {
    const number = 4
    if (number === 10) {
        console.log('number is equal to 10')
    }
    else
    {console.log('number does not equal to 10')
    }
}

booleanExample()

function greaterThan100(number) {
    if (number > 100) {
        console.log('number is greater than 100')
    }
    else if (number <= 100) {
        console.log('number is not greater than 100')
        }
    
    }

    greaterThan100(20)

    function checkGrade(score) {
        if (score <= 59) {
            return('F')
        }
        if (score <= 69) {
            return('D')
        }
        if (score <= 79) {
            return('C')
        }
        if (score <= 89) {
            return('B')
        }
        if (score <= 100) {
            return('A')
        } 
    }

    console.log(checkGrade(100))
    console.log(checkGrade(75))
    console.log(checkGrade(83))
    console.log(checkGrade(90))
    console.log(checkGrade(60))
