// Audio Player
function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

// Input Value
function number(value) {
    document.calculatorForm.result.value += value;
}

// Clean Value
function cle(value) {
    document.calculatorForm.result.value = value;
    document.calculatorForm.totalResult.value = value;
}

// Calculation
function evalua() {
//  var evalu = eval(document.calculatorForm.result.value);
    document.calculatorForm.totalResult.value = eval(document.calculatorForm.result.value);
}