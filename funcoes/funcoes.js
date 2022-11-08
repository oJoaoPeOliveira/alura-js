// Maioria das linguagens utilizam

let x = "";
console.log(x);
x = "Good morning"

// Funcionamento do código: executa cada linha de código uma após a outra 
// Como vamos avisar a linguagem que horas queremos que determinado código seja executado?

// Função permite isolar um bloco de código para ser executado a qualquer momento
// Primeiro passo -> declarar função

// Existe 3 formas de escrever funções

// PRIMEIRA FORMA - DECLARAÇÃO DE FUNÇÃO - FORMA MAIS CLÁSSICA
// Declaração - nome(parâmetro) { bloco de código }
function imprimeTexto(texto) {
    console.log(texto);
}

// Para rodar a função ela necessita do texto para rodar
// Segundo passo -> executar ela uma ou mais vezes

imprimeTexto(x);

// Reaproveitando ao colocar outro texto

imprimeTexto("Good night");

// Palavra-chave return -> definimos oque a função vai retornar de resultado
function soma() {
    const resultado = 2 + 2;
    return resultado;
}

// A cláusula return necessita estar na últina linha do bloco pois finaliza a função
function subtracao() {
    return 20 - 3;
}

//console.log(soma());
//console.log(subtracao());

// Passando uma função como parâmetro
imprimeTexto(soma());

// Cada função pode fazer uma pequena tarefa e depois podem se tornar uma tarefa grande
// fácil para ler, reaproveitar e manutenção