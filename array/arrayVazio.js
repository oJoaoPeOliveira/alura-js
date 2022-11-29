/*
    const arrayVazia = [];

    console.log(arrayVazia);
    console.log(arrayVazia.length);
*/

// Não existe o índice 0, não foi definido nenhum valor
// console.log(arrayVazia[0]);

const arrayVazia = [,,,];
console.log(arrayVazia.length);
console.log(arrayVazia[0]);
console.log(arrayVazia[1]);
console.log(arrayVazia[2]);

// Este array pode ser comparado com um gaveteiro com 3 gavetas vazias

console.log(arrayVazia.length);
arrayVazia.push(50);
console.log(arrayVazia);
console.log(arrayVazia.length);

// Este tipo de estrutura encontrado após o push se chama: array esparso

/*
    - Um array é uma lista ordenada de dados.
    - Elementos são os valores que um array guarda.
    - Índice é o identificador único e numérico de cada elemento do array.
    - Todos os arrays do JavaScript possuem a propriedade length.
    - Se adiciona elemento com push e remove elemento com pop.
*/