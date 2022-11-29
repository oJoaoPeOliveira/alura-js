// Adicionando elementos

const notas = [10, 6, 8];

// push - empurrar, inserir
notas.push(7);

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);

// Mesmo o array sendo constante, consigo alterar com alguns métodos, não pode ser atribuído um valor novo em notas