// Erros -> escritos por quem desenvolveu a ferramenta, linguagem etc.. pessoas

// A constante não foi inicializada | Erro de sintaxe se não for atríbuido um valor
const numero = 5;

// Faltando fechar os parênteses após o argumento | Caso esqueça de fechar ()
let meuNumero = 1;
console.log(meuNumero);

// Erro de referência | Não foi declarada nenhuma váriavel com este nome
console.log(inexistente);

/* 
    Sem ser a primeira linha que já fala o motivo do erro, vou falar sobre as outras
    Importante para quando ser trabalho com bibliotecas e módulos e o código faz parte
    de + de um arquivo, conseguimos ver em qual parte do outro arquivo da o erro
    Mostra o caminho, linha e caracter.
    Essa lista é chamada de stacktrace.
*/

/*
    RangeError -> O código recebe um inteiro como é para receber mas teria que ser
    Maior ou igual que 0 e acaba recebendo -1
*/

// TypeError -> Esperava receber um tipo de dado específico