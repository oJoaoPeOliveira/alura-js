// Template String - String modelo

const nome = "João Pedro";
const idade = 2022 - 1999;
const cidadeNascimento = "Sapucaia do Sul";
const apresentacao = "Meu nome é: " + nome + ", tenho " + idade + " anos e nasci em " + cidadeNascimento;

console.log(apresentacao);

// Surgiu para facilitar a concatenação

const apresentacaoTemplate = `Meu nome é: ${nome}, tenho ${2022 - 1999} anos e nasci em ${cidadeNascimento}`;

console.log(apresentacaoTemplate);

// Mais fácil de escrever, entender e realizar a manutenção (principalmente de textos)

const nomeAlternativo = "Leo";
const idadeAlternativa = 23;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nomeAlternativo} diz: "por favor, quero beber ${idadeAlternativa >= 18 ? bebidaMaior : bebidaMenor}"`;
console.log(pedido);
