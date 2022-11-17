// Arrow function => - novidade do ES6

function apresentar(nome) {
    return `Meu nome é ${nome}`;
}

// Arrow function clássica
// sem () para o parâmetro e {} para o bloco de código
// Sem return foi estou passando a instrução de uma linha

const apresentarArrow = nome => `Meu nome é ${nome}`;

const soma = (numero1, numero2) => numero1 + numero2;
console.log(soma(1, 1));

/*
    Características:
        - Veio com o ES6 de 2015
        - Código bem menor, sem chaves, sem parênteses e sem return
        - Não pode ser nomeada
        - Sempre com uma const e o identificador
        - É usada com objetos
*/

// Arrow function com mais de uma linha de instrução

// Uso da estrutura condicional if para definir fluxo da função consequentemente do programa
const somaPequenos = (numero1, numero2) => {
    if (numero1 > 10 || numero2 > 10) {
        return "Somente números de 1 a 10";
    } else {
        return numero1 + numero2;
    }
}

console.log(somaPequenos(10, 10));

/*
    Quando utilizar cada tipo?
        - Arrow de function:
            - Rápido e curto de escrever
            - Código mais curto
            - Vantagens com objetos
            - HOISTING igual com expressão de função - então somente chamar depois da declaração
*/