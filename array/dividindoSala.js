const alunos = ['Pedro', 'João', 'Gabriel', 'Paulo', 'Antônio',
                'Julio', 'Cesar', 'Moises', 'Jean', 'Lucas',
                'Maria', 'Helena', 'Lara', 'Thaina', 'Roberta',
                'Lourdes', 'Andreia', 'Luisa', 'Carla', 'Rosane'];

console.log(alunos.length);

// No slice o número final onde terminar a divisão não é incluído, vai do 0 ao 9 nesse caso
// Slice não altera o array original, ele retorna um novo array

//const sala1 = alunos.slice(0, 10);
const sala1 = alunos.slice(0, alunos.length / 2); // Deixando a lista mais dinâmica

// Ao colocar um único argumento ele entende que quer iniciar no índice 10 e pegar até o final
//const sala2 = alunos.slice(10);
sala2 = alunos.slice(alunos.length / 2);

console.log(sala1);
console.log(sala2);

// Documentação oficial da MDN -> https://developer.mozilla.org/pt-BR/
