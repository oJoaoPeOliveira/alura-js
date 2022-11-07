// Característica do js -> == e === -> operadores de comparação
// == Conversão implícita e depois a comparação é feita | Comparação implícita
// === Compara o valor e o tipo 

const numero = 17;
const texto = "17";
console.log(numero == texto);

// JavaScript fez a conversão do texto para número

// Explícita

// Não faz a conversão automaticamente
console.log(numero === texto);

// typeof para saber qual o tipo de dado armazenado na váriavel

console.log(typeof numero);
console.log(typeof texto);

// Boas práticas: === e conversão explícita - Number(), String()

// Operadores lógicos
// AND &&, OR ||, != e !== | != não igual e !== estritamente não igual
