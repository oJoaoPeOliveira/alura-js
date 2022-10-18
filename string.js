// String == tipos texto
// Caracteres, pontuação, números etc..

// aspas duplas ou simples são strings
const texto1 = "Olá, mundo :D";
const texto2 = 'Olá, mundo :D';
const senha = "@Minhasenha123"
const stringDeNumeros = "1234";

// Dentro da cadeia de caracteres, usei aspas duplas para citação
// Pode ser ao inverso também
const citacao = 'João Pedro disse "oi"';
console.log(citacao);
console.log("**************************");

// Template string ou template literal
console.log(`Primeiro várivel criada no código: ${texto1}`);
console.log("**************************");

// Concatenação (+)
const nome = "João Pedro";
const sobrenome = " de Oliveira";
console.log("Meu nome completo é: " + nome + sobrenome)
console.log("**************************");

// Padrão UTF (de Unicode Transformation Format)
// ou “formato de conversão de unicode”
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)
console.log("**************************");

// Métodos que estão contidos na biblioteca-base do js

const cidade = "Porto Alegre";
const input = "porto alegre";
console.log( cidade === input);

//javaScript diferencia minúsculas de maiúsculas == Case-sensitive
//toLowerCase é um método
const minuscula = cidade.toLowerCase();
console.log(minuscula === input);
console.log("**************************");

//length é uma propriedade
console.log(senha.length);

//Lista completa de métodos de String do MDN
//https://bityli.com/fqzXoQtH