const display = document.getElementById("display")

function toDisplay(input) {
    display.value += input;

}

function calculateResult() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Error"
    }
}

function toClear() {
    display.value = "";
}