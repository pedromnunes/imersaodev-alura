
// Variaveis Globais: Inicialização
var screen = document.getElementById("ecra"); // ecra de visualizacao do resultado
var primeiroValor = -1; // -1 é a flag indicando vazio
var segundoValor = -1; // -1 é a flag indicando vazio
var operacao = ""; // vazio indica nenhum sinal aritmetico pressiondo


// Verifica o valor numerico clicado:
function algarismoPressionado(numero) {

    if (primeiroValor == -1) {
        primeiroValor = numero;
        screen.value = "";
        screen.value += "" + numero;

    } else {
        segundoValor = numero;
        screen.value += "" + numero;
    }
}

// Operação aritmetica selecionada:
function operacaoSelecionada(operador) {
    if (operacao == "") {
        screen.value += " " + operador + " ";
        operacao = operador;
    }
}

// Tecla Enter
function primirTeclaEnter() {

    if (operacao == "+") {
        screen.value += " = " + (parseInt(primeiroValor) + parseInt(segundoValor));
    } else if (operacao == "-") {
        screen.value += " = " + (parseInt(primeiroValor) - parseInt(segundoValor));
    } else if (operacao == "*") {
        screen.value += " = " + (parseInt(primeiroValor) * parseInt(segundoValor));
    } else if (operacao == "/") {
        screen.value += " = " + (parseInt(primeiroValor) / parseInt(segundoValor));
    } else {
        screen.value = "Operação Invalida";
    }

    inicia();
}

// Tecla Delete
function primirTeclaDelete() {
    screen.value = "";
    inicia();
}

// Função de Inicialização de Variaveis Globais:
function inicia() {
    primeiroValor = -1;
    segundoValor = -1;
    operacao = "";
}
