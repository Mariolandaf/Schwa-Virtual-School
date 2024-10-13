/*class Calculator {
    constructor(operandImages) {
        this.operandImages = operandImages
        this.clear()
    }

    clear() {
        this.operandImages = ''
    }
    
    delete() {
    
    }
    
    appendImage(image) {
        this.operandImages = image
    }
    
    updateDisplay() {
        this.operandImages.innerText = this.operand
    }
}



const imageButtons = document.querySelectorAll('[data-image]')
const deleteButton = document.querySelectorAll('[data-delete]')
const clearButton = document.querySelectorAll('[data-all-clear]')
const operandImages = document.querySelectorAll('[data-operand]')

const calculator = new Calculator(operandImages)

imageButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendImage(button.innerText)
        calculator.updateDisplay()
    })
})
*/

const imageButtons = document.querySelectorAll('[data-image]')
const deleteButton = document.querySelectorAll('[data-delete]')
const clearButton = document.querySelectorAll('[data-all-clear]')
const operandImages = document.querySelectorAll('[data-operand]')



var realStyle = function(_elem, _style) {
    var computedStyle;
    if ( typeof _elem.currentStyle != 'undefined' ) {
        computedStyle = _elem.currentStyle;
    } else {
        computedStyle = document.defaultView.getComputedStyle(_elem, null);
    }

    return _style ? computedStyle[_style] : computedStyle;
};

var copyComputedStyle = function(src, dest) {
    var s = realStyle(src);
    for ( var i in s ) {
        // Do not use `hasOwnProperty`, nothing will get copied
        if ( typeof s[i] == "string" && s[i] && i != "cssText" && !/\d/.test(i) ) {
            // The try is for setter only properties
            try {
                dest.style[i] = s[i];
                // `fontSize` comes before `font` If `font` is empty, `fontSize` gets
                // overwritten.  So make sure to reset this property. (hackyhackhack)
                // Other properties may need similar treatment
                if ( i == "font" ) {
                    dest.style.fontSize = s.fontSize;
                }
            } catch (e) {}
        }
    }
};

const destination = document.getElementById('operand');



imageButtons.forEach(button => {
    button.addEventListener('click', () => {
        var i = button.getAttribute('id');
        var elements = document.getElementById(i);
        var copi = elements.cloneNode(true);
        destination.appendChild(copi);
        copyComputedStyle(elements, copi);
    })    
})

/*clearButton.addEventListener('click', () => {
    destination.replaceChildren();
})

clearButton.addEventListener('click', () => {
    while (destination.firstChild) {
        destination.removeChild(destination.firstChild);
    }
})

clearButton.onclick = () => {
    operandImages.innerHTML = '';
}

clearButton.addEventListener('click', () => {
    destination.innerHTML = '';
})

clearButton.onclick = () => {
    while (destination.lastElementChild) {
        destination.removeChild(destination.lastElementChild);
    }
}


const mementos = []
const input = document.querySelector(imageButtons)

function saveMemento() {
    mementos.push(input.lastChild)
}

function undo() {
    const lastMemento = mementos.pop()

    input.lastChild = lastMemento ? lastMemento : input.lastChild
}*/