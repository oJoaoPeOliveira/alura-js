// Forma clássica -> expressão de função

function minhaFuncao(param) {
    // bloco de código
}

minhaFuncao("argumento");

// Expressão de função

const soma = function(numero1, numero2) { return numero1 + numero2};

console.log(soma(5, 2));

// Diferenças:

/*
    - Sem nome, criada com const e foi atribuída uma função a váriavel
    - importante ser constante para não ter chance de ser trocado o valor dela
    - nome é opcional mas geralmente não é colocado
    - Forma mais curta de escrever
    - Recomendado sem quebrar linha
*/

console.log(apresentar());

function apresentar() {
    return "Olá";
}

console.log(multiplicacao(1, 2));
const multiplicacao = function(numero1, numero2) { return numero1 * numero2};

/*
    - Principal diferença:
        - O interpretador do js vai passar por todo código e puxar as declarações e var para o topo
        e depois executar o código -> HOISTING (levantar).
        - Dai sim é possível chamar alguma função ou variável antes dela ser declarada na ordem do código
*/