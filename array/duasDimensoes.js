// Uma lista com outras listas

const alunos = ['João', 'Lara', 'Vini', 'Andreia', 'Gilberto'];
const medias = [10, 8, 7.5, 9, 9];

const listaAlunosMedias = [alunos, medias];

console.log(listaAlunosMedias);

// Primeiro informar o índice da lista mais externa | depois mais interna
console.log(`O aluno da posição 3 da lista de alunos é ${listaAlunosMedias[0][2]},
A nota dessa aluna é ${listaAlunosMedias[1][2]}.`);