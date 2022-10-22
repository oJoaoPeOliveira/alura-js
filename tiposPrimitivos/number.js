// Estudo sobre tipos primitivos: number
// Principais tipos: String, number e boolean

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoSoma = primeiroNumero + segundoNumero;
console.log("Soma:")
console.log(operacaoSoma);

const operacaoMulti = primeiroNumero * segundoNumero;
console.log("Multiplicação:")
console.log(operacaoMulti);

// Divisão == / | Resto == % | Subtração == - 

// Número com casas decimais == com ponto flutuante == float
const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;

const novaOperacao = primeiroNumero / numeroPontoFlutuante;
console.log("Divisão:")
console.log(novaOperacao);

//NaN == Not A Number (Não é um número), não reconhece alguma parte da operação como número

const alura = "Curso";
console.log("Not a Number:");
console.log(alura * primeiroNumero);

var a = 10
var b = 0
console.log("Exemplos de divisões com 0:")
console.log(a / b) // Infinity
console.log(b / b) // Não tem um valor definido