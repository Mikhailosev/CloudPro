function multiplyBy() {
    let a = document.getElementById('firstNumber').value;
    let b = document.getElementById('secondNumber').value;
    if (a !== 0 && b !== 0 && a > 0 && b > 0 && ) {
        document.getElementById("result").innerHTML = a * b;
    } else {
        document.getElementById("result").innerHTML = "You must ahve divided by zero or entered a fromg number"
    }
}

function divideBy() {
    let a = document.getElementById('firstNumber').value;
    let b = document.getElementById('secondNumber').value;
    if (a !== 0 && b !== 0 && a > 0 && b > 0) {
        document.getElementById("result").innerHTML = a / b;
    }
}