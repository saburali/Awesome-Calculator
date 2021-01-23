// Click Audio Play
function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

//Input Value
function number(value) {
    document.calculatorForm.result.value += value;
}

// Clean Value
function cle(value) {
    document.calculatorForm.result.value = value;
    document.calculatorForm.totalResult.value = value;
}

// Clean Last Value
function lastClean(){
    var inputResult = document.getElementById('blink').value;
    var removeValue = inputResult.slice(0, inputResult.length - 1);
    document.getElementById('blink').value = removeValue;
}

// Calculation
function evalua() {
    document.calculatorForm.totalResult.value = eval(document.calculatorForm.result.value);
}