var btnClear = document.querySelector(".btn-clear");
var result = document.querySelector(".result");

//function that display values of the numbers pressed
function dis(val) {
    result.value += val
}

//function that evaluates the digit and return result
function solve() {
    var resultValue = result.value;
    var evalResult = eval(resultValue)
    result.value = evalResult;
}

//function that clear the display
btnClear.addEventListener("click", clear => {
    result.value = "";
})
