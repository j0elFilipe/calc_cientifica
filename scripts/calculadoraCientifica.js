var valor, cont;

function insert(num) {
    var number = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = number + num;
}

function limpa() {
    document.getElementById("resultado").innerHTML = "";
}

function back() {
    var resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length - 1)
}

function calcular() {
    var resposta = document.getElementById("resultado").innerHTML;
    if (resposta) {
        document.getElementById("resultado").innerHTML = eval(resposta);
    }
    else
        document.getElementById("resultado").innerHTML = "Nenhum valor";
}

$(document).on('click', '#resultado', function () {
    valor = document.getElementById("resultado").innerHTML;
    var resp = Math.pow(parseFloat(valor), 2);
    $('#resultado').html(valor.toString().replace('.', ','));
});