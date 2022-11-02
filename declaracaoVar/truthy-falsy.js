const usuarioLogado = true;
const contaPaga = false;

//Truthy e falsy
//Palavras, números que não são booleanos mas podem assumir valores booleanos

// 0 => false
// 1 => true

console.log(0 == false);
console.log("" == false);
console.log(1 == false);

//null => vazio ou nada

let minhaVar;
let varNull = null;

console.log(minhaVar);
console.log(varNull);

let numero = 3;
let texto = "Alura";

console.log(typeof numero);
console.log(typeof texto);

console.log(typeof minhaVar);
console.log(typeof varNull);

//Quando null foi criado, foi criado como objeto, devia ser como null, mas é um bug que ocorre, e não vai ser corrigido e então foi deixado dessa maneira.