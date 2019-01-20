function multiplyBy() {
    let a = document.getElementById('firstNumber').value;
    let b = document.getElementById('secondNumber').value;
        document.getElementById("result").innerHTML = a * b;
}

function divideBy() {
    let a = document.getElementById('firstNumber').value;
    let b = document.getElementById('secondNumber').value;

    document.getElementById("result").innerHTML = a / b;

}