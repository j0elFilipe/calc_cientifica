var valor, cont = 0, mostrar, calc;

function insert(num) {
    var number = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = number + num;

    /*if ((number >= 0) && (number < 10))
        document.getElementById("resultado").innerHTML = number + num;*/

    /*if (number == ['+', '-', '*', '/'])
        replace();*/
    //document.getElementById("resultado1").innerHTML = number + num;

    /*if (number == "x") {
        number = '*';
    }*/

    //var dado = document.getElementById("resultado1").innerHTML;

}

function limpa() {
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("resultado1").innerHTML = "";
}

function back() {
    var resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular() {
    var resposta = document.getElementById("resultado").innerHTML;
    if (resposta) {
        document.getElementById("resultado1").innerHTML = eval(resposta);
    }
    else
        document.getElementById("resultado").innerHTML = "Nenhum valor";
}

function sin(valor) {
    mostrar = document.getElementById("resultado").innerHTML;
    calc = Math.sin(mostrar);
    document.getElementById("resultado1").innerHTML = calc;
}

function cos(valor) {
    mostrar = document.getElementById("resultado").innerHTML;
    calc = Math.cos(mostrar);
    document.getElementById("resultado1").innerHTML = calc;
}

function tang(valor) {
    mostrar = document.getElementById("resultado").innerHTML;
    calc = Math.tan(mostrar);
    document.getElementById("resultado1").innerHTML = calc;
}

function sin_1(valor) {
    mostrar = document.getElementById("resultado").innerHTML;
    calc = Math.asin(mostrar);
    document.getElementById("resultado1").innerHTML = calc;
}

function cos_1(valor) {
    mostrar = document.getElementById("resultado").innerHTML;
    calc = Math.acos(mostrar);
    document.getElementById("resultado1").innerHTML = calc;
}

function cotg(valor) {
    mostrar = document.getElementById("resultado").innerHTML;
    calc = Math.atan(mostrar);
    document.getElementById("resultado1").innerHTML = calc;
}

function euler(valor) {
    mostrar = document.getElementById("resultado").innerHTML;
    calc = Math.E;
    document.getElementById("resultado").innerHTML = calc;
}

/*function raizq(valor) {
    mostrar = document.getElementById("resultado").innerHTML;
    calc = Math.sqrt(mostrar);
    document.getElementById("resultado1").innerHTML = calc;
}*/

function x2(valor) {
    mostrar = document.getElementById("resultado").innerHTML;
    calc = Math.pow(mostrar, 2);
    document.getElementById("resultado1").innerHTML = calc;
    document.getElementById("resultado").innerHTML = mostrar + "^2";
}

function x3(valor) {
    mostrar = document.getElementById("resultado").innerHTML;
    calc = Math.pow(mostrar, 3);
    document.getElementById("resultado1").innerHTML = calc;
    document.getElementById("resultado").innerHTML = mostrar + "^3";
}

function modulo(valor) {
    mostrar = document.getElementById("resultado").innerHTML;
    calc = Math.abs(mostrar);
    document.getElementById("resultado1").innerHTML = calc;
    document.getElementById("resultado").innerHTML = "abs(" + mostrar + ")";
}

function loN(valor) {
    mostrar = document.getElementById("resultado").innerHTML;
    calc = Math.log(mostrar);
    document.getElementById("resultado").innerHTML = calc;
    document.getElementById("resultado").innerHTML = "ln(" + mostrar + ")";
}

function valpi() {
    calc = Math.PI;
    document.getElementById("resultado").innerHTML = calc;
}

function ele_10(valor) {
    mostrar = document.getElementById("resultado").innerHTML;
    calc = Math.pow(10, mostrar);
    document.getElementById("resultado1").innerHTML = calc;
    document.getElementById("resultado").innerHTML = "10^(" + mostrar + ")";
}

function factorial(valor) {
    mostrar = document.getElementById("resultado").innerHTML;
    let resultado = 1;

    for (let i = 2; i <= mostrar; i++) {
        resultado *= i;
    }

    document.getElementById("resultado1").innerHTML = resultado;
    document.getElementById("resultado").innerHTML = "fact(" + mostrar + ")";
}

function euler_ele(valor) {
    mostrar = document.getElementById("resultado").innerHTML;
    calc = Math.pow(Math.E, mostrar);
    document.getElementById("resultado1").innerHTML = calc;
    document.getElementById("resultado").innerHTML = "e^(" + mostrar + ")";
}

function um_sobrex(valor) {
    mostrar = document.getElementById("resultado").innerHTML;
    calc = 1 / mostrar;
    document.getElementById("resultado1").innerHTML = calc;
    document.getElementById("resultado").innerHTML = "1/(" + mostrar + ")";
}

function resto_div(valor) {
    mostrar = document.getElementById("resultado").innerHTML;
    calc = mostrar % (document.getElementById("resultado").innerHTML = mostrar + valor);
    document.getElementById("resultado1").innerHTML = calc;
    document.getElementById("resultado").innerHTML = mostrar + "mod(" + valor + ")";
}


