// O que é o console? -> Ferramenta que tem no node e no navegador, usado para colocar
// dados para fora da aplicação, não diretamente para o user, mas se precisar sim

// Log é um registro, aceita qualquer informação

let resposta = true;
console.log(170799);
console.log("João Pedro");
console.log(resposta);

// console.erro -> quando eu quiser descrever algum erro, um erro pré definido no código
// TRATAMENTO DE ERRO

console.error("Infelizmente deu erro!");

// Pode ser estilizada a forma de como o erro vai aparecer, e trabalhar com stacktrace
// stacktrace, também chamado de pilha.

// É uma boa prática usar os dois para sempre saber oque está saindo da aplicação
// Feedback da aplicação, tanto em módulos ou bibliotecas para saber oque está acontecendo
// console.error e console.log

/*
    No navegador os consoles warn, error e log são identificados com as cores, amarelo, vermelho
    e emojis mas no node a saída padrão é o terminal
*/

console.log("deu erro");
console.error("deu erro");

/*
    Como em qualquer linguagem de programação, é normal que alguns métodos 
    só funcionem da forma que esperamos se fornecermos os dados necessários 
    da forma correta.
*/

console.log("deu erro");
console.error(new Error("deu erro"));