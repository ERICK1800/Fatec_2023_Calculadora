function somar(){
    var num1, num2, resp1;

    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);

    resp1 = num1 + num2;

    document.getElementById("resp1").value = resp1;
}

function subtrair(){
    var num3, num4, resp2;

    num3 = parseFloat(document.getElementById("num3").value);
    num4 = parseFloat(document.getElementById("num4").value);

    resp2 = num3 - num4;

    document.getElementById("resp2").value = resp2;
}

function dividir(){
    var num5, num6, resp3;

    num5 = parseFloat(document.getElementById("num5").value);
    num6 = parseFloat(document.getElementById("num6").value);

    resp3 = num5 / num6;

    document.getElementById("resp3").value = resp3;
}

function multiplicar(){
    var num7, num8, resp4;

    num7 = parseFloat(document.getElementById("num7").value);
    num8 = parseFloat(document.getElementById("num8").value);

    resp4 = num7 * num8;

    document.getElementById("resp4").value = resp4;
}
