const nomes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

// Método para remover elementos específicos e ainda posso adicionar algum elemento

nomes.splice(1, 2, "Rodrigo");

// Posso adicionar mais um elemento com push nomes.push('nome')

console.log(nomes);

const animais = ['macaco', 'jacaré', 'Leão', 'cobra'];

// O Primeiro argumento server para indicar o índice, segundo quantos elementos quer
// Apagar a partir dele, e o terceiro que será inserido, se o segundo for 0 ele vai
// inserir antes do elemento indicado

animais.splice(1,0,'Cachorro')


console.log(animais);

// Aqui elimina dois elementos junto com o número 3 e inseri o Gato
animais.splice(3,2,'Gato')

console.log(animais);