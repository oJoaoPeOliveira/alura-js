// Tipos: undefined e null

// null === tipo especial
//  Ausência de valor e pode ser atribuído como valor

let input = null;

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}

// undefined também significa a mesma coisa mas
// ele é atribuído a uma váriavel que não foi inicializada
// ou seja não foi atribuído nenhum valor a ela

let input2;

console.log(input); // null
console.log(input2); // undefined

// Também pode aparecer em uma função que não
// tenha a cláusula return

console.log(null == undefined); // true
console.log(null === undefined); // false

// null === ausência de valor esperada pois
// pode ser atribuído para algum campo que não seja obrigatório

// undefined === ausência de valor inesperada
// bug ou erro no código