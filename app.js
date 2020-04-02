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
        evaluateExpression(expression)
        resetCalculator()
    })
}

function resetCalculator(){
    expression = ''
    answer = ''
}

function evaluateExpression(expression){
    let convertedExpression = convertOperators(expression)
    if (isValidExpression(convertedExpression) == false){
        screen.innerText = 'Error'
    } else {
        let answer = eval(convertedExpression)
        screen.innerText = answer
    }
}

function convertOperators(expression){
    expressionWithMultiply = expression.replace(/x/g,'*')
    expressionWithDivision = expressionWithMultiply.replace(/÷/g,'/')
    return expressionWithDivision
}

function isValidExpression(expression){
    const badOperators = ['/*','*/','*+','/+','+/','+*','-+','-*','-/','/0']
    let checkedExpression = expression
    badOperators.forEach(operator => {
        if (expression.includes(operator) == true){
            checkedExpression = false
        }
    })
    return checkedExpression
}

displayOnClick()
clearButton()
equalsButton()