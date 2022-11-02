//Tipo de dado
// booleanos

//Conversão implícita
const numero = 1;
const numeroString = "1";

console.log(numero === numeroString);

// Implícita
console.log(numero == numeroString);
console.log(numero + numeroString)

//Conversão explícita
//Number() e String()

console.log(numero + Number(numeroString));
console.log(numero +  +numeroString);

//String que tenha algo sem ser número resultará em NaN.

console.log(Number("3a"));
let valorConvertido = numeroString.toString();

console.log(typeof numeroString);

//Booleano convertido em String
//false == false | true == true

//Uma forma de converter para number é 
//Colocar + antes.

//boolean para number
//false == 0 | true == 1
//Boas práticas
//Converter de forma explícita
//Não usar operador de soma para converter
//Não converter números booleanos

//Isso acontece porque var, if e const são palavras reservadas do JavaScript. Ou seja, não podemos usá-las para dar nomes (identificar) variáveis, funções ou outros blocos de código que precisem de identificadores.

var respostaDeTudo = 42
let idade = 29
const pi = 3.14

{
    var respostaDeTudo = 3.14
    let idade = 42
    const pi = 29
    console.log(respostaDeTudo, idade, pi)

}
console.log(respostaDeTudo, idade, pi)