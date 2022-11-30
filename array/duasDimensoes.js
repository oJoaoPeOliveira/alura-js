// Uma lista com outras listas

const alunos = ['João', 'Lara', 'Vini', 'Andreia', 'Gilberto'];
const medias = [10, 8, 7.5, 9, 9];

const listaAlunosMedias = [alunos, medias];

console.log(listaAlunosMedias);

// Primeiro informar o índice da lista mais externa | depois mais interna
console.log(`O aluno da posição 3 da lista de alunos é ${listaAlunosMedias[0][2]},
A nota dessa aluna é ${listaAlunosMedias[1][2]}.`);

/*
    - Outra forma de chamar array com várias dimensões -> Matriz
    - Matrizes podem ser visualizadas como uma tabela do Excel, tendo colunas e linhas
    - Arrays têm seu principal uso quando temos uma grande quantidade de informações
    com propósitos similares -> notas
    - Matrizes, por sua vez, são utilizadas quando precisamos de vários arrays similares
    ou com informações ligadas às outras -> sala de aula, alunos, notas, idades etc...
    - As matrizes não são limitadas a 2 dimensões!
*/