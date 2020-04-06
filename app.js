const numbers = document.querySelectorAll('span:not(.operator)')
const screen = document.querySelector('#screen')
const clear = document.querySelector('#clear')
const equals = document.querySelector('#equals')
const operators = document.querySelectorAll('.operator')
let expression = ''

numbers.forEach(addNumberListener)

function addNumberListener(number){
    number.addEventListener('click', appendNumber)
}

function appendNumber(){
    screen.innerText += event.target.innerText
}

operators.forEach(addOperatorListener)

function addOperatorListener(operator){
    operator.addEventListener('click', performOperation)
}

function performOperation(){
    const operations = {
        "C"(){screen.innerText = ""},
        "="(){screen.innerText = eval(screen.innerText)},
        "x"(){screen.innerText += "*"},
        "÷"(){screen.innerText += "/"},
        "default"(character){screen.innerText += character}
    }
    const screenCharacters = screen.innerText.split("")
    const lastCharacter = screenCharacters[screenCharacters.length-1]
    if (/[0-9]/.test(lastCharacter)) {
        const operation = operations[event.target.innerText] || operations["default"]
        operation(event.target.innerText)
    }
}

// buttonsList.forEach(button => {
//     button.addEventListener('click', displayOnClick(button))
// })
// document.addEventListener('keydown', displayOnPress)

// clear.addEventListener('click', clearScreen)
// document.addEventListener('keydown', pressEscape)

// equals.addEventListener('click', equalsButton)
// document.addEventListener('keydown', pressEnter)

// function displayOnClick(button){
//     return function(){
//         if (button == equals) {
//             screen.innerText = expression
//         } else {
//             expression += button.innerText
//             screen.innerText = expression
//         }
//     }
// }

// function displayOnPress(){
//     switch (event.key) {
//         case '1':
//             expression += '1'
//             return screen.innerText = expression;
//         case '2':
//             expression += '2'
//             return screen.innerText = expression;
//         case '3':
//             expression += '3'
//             return screen.innerText = expression;
//         case '4':
//             expression += '4'
//             return screen.innerText = expression;
//         case '5':
//             expression += '5'
//             return screen.innerText = expression;
//         case '6':
//             expression += '6'
//             return screen.innerText = expression;
//         case '7':
//             expression += '7'
//             return screen.innerText = expression;
//         case '8':
//             expression += '8'
//             return screen.innerText = expression;
//         case '9':
//             expression += '9'
//             return screen.innerText = expression;
//         case '0':
//             expression += '0'
//             return screen.innerText = expression;
//         case '+':
//             expression += '+'
//             return screen.innerText = expression;
//         case '-':
//             expression += '-'
//             return screen.innerText = expression;
//         case '*':
//             expression += 'x'
//             return screen.innerText = expression;
//         case '/':
//             expression += '÷'
//             return screen.innerText = expression;
//     }
// }

// function clearScreen(){
//     screen.innerText = ''
//     resetCalculator()
// }

// function equalsButton(){
//     evaluateExpression(expression)
//     resetCalculator()
// }

// function resetCalculator(){
//     expression = ''
//     answer = ''
// }

// function evaluateExpression(expression){
//     let convertedExpression = convertOperators(expression)
//     if (isValidExpression(convertedExpression) == false){
//         screen.innerText = 'Error'
//     } else {
//         let answer = eval(convertedExpression)
//         screen.innerText = answer
//     }
// }

// function convertOperators(expression){
//     expressionWithMultiply = expression.replace(/x/g,'*')
//     expressionWithDivision = expressionWithMultiply.replace(/÷/g,'/')
//     return expressionWithDivision
// }

// function isValidExpression(expression){
//     const badOperators = ['/*','*/','*+','/+','+/','+*','-+','-*','-/','/0']
//     let checkedExpression = expression
//     badOperators.forEach(operator => {
//         if (expression.includes(operator) == true){
//             checkedExpression = false
//         }
//     })
//     return checkedExpression
// }

// function pressEscape(){
//     if (event.key == 'Escape') {
//         clearScreen()
//     }
// }

// function pressEnter(){
//     if (event.key == 'Enter') {
//         equalsButton()
//     }  
// }