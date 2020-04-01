const buttons = document.querySelectorAll('span')
const buttonsList = Array.from(buttons)
const screen = document.querySelector('#screen')
const clear = document.querySelector('#clear')
const equals = document.querySelector('#equals')
let expression = ''

function displayOnClick(){
    buttonsList.forEach(button => {
        button.addEventListener('click', () => {
            if (button == equals) {
                screen.innerText = expression
            } else {
                expression += button.innerText
                screen.innerText = expression
            }
        })
    })
}

function clearButton(){
    clear.addEventListener('click', () => {
        screen.innerText = ''
        resetCalculator()
    })
}

function equalsButton(){
    equals.addEventListener('click', () => {
        let convertedExpression = convertOperators(expression)
        let answer = eval(convertedExpression)
        screen.innerText = answer
        resetCalculator()
    })
}

function resetCalculator(){
    expression = ''
    answer = ''
}

function convertOperators(expression){
    expressionWithMultiply = expression.replace('x','*')
    expressionWithDivision = expressionWithMultiply.replace('÷','/')
    return expressionWithDivision
}
displayOnClick()
clearButton()
equalsButton()