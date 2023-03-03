function somar(){
    var num1, num2, resp1;

    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);

    resp1 = num1 + num2;

    document.getElementById("resp1").value = resp1;
}

function subtrair(){
    var num1, num2, resp1;

    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);

    resp1 = num1 - num2;

    document.getElementById("resp1").value = resp1;
}

function dividir(){
    var num1, num2, resp1;

    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);

    resp1 = num1 / num2;

    document.getElementById("resp1").value = resp1;
}

function multiplicar(){
    var num1, num2, resp1;

    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);

    resp1 = num1 * num2;

    document.getElementById("resp1").value = resp1;
}

function calcularPorcentagem() {
    var num1, num2, resp1;

    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);

    resp1 = (num1 * num2) / 100;

    document.getElementById("resp1").value = resp1;
}

function limparCampos() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("resp1").value = "";
}

function calcularRaiz() {
    var num1, resp1;

    num1 = parseFloat(document.getElementById("num1").value);

    resp1 = Math.sqrt(num1);

    document.getElementById("resp1").value = resp1.toFixed(2);
}
