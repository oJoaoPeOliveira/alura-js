// Array ou lista -> estrutura de dados

const nota1 = 10;
const nota2 = 6.5;
const nota3 = 8;
const nota4 = 7.5;

const media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log(`Média das notas utilizando a forma básica de váriaveis: ${media}`);

// Um array é composto por elementos e cada elemento tem um índice (posição) começando pelo 0
const notas = [10, 6.5, 8, 7.5];

const mediaArray = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

// Media utilizando array e a propriedade length
console.log(`Média das notas utilizando array: ${mediaArray}`);
