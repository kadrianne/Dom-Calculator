const buttons = document.querySelectorAll('span')
const buttonsList = Array.from(buttons)
const screen = document.querySelector('#screen')
const clear = document.querySelector('#clear')
const equals = document.querySelector('#equals')
let expression = ''

function displayOnClick(){
    buttonsList.forEach(button => {
        button.addEventListener('click', () => {
            expression += button.innerText
            screen.innerText = expression
            if (button == clear) {
                expression = ''
                screen.innerText = expression
            } else if (button == equals) {
                
            }
        })
    })
}

displayOnClick()