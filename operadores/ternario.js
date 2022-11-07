// Operador ternário -> É basicamente um if - else, comparação em uma única linha

const numero = 17;
// console.log((numero == 17) ? "Dezessete" : "Não é dezessete");

const idadeMinima = 18;
const idadeCliente = 25;

/*
    Clássico

    if (idadeCliente >= idadeMinima) {
        console.log("Maior de idade, pode beber!");
    } else {
        console.log("Só água pra você");
    }
*/

// Ternário -> É chamado pois tem 3 operados em uma linha - operador de relacional
// ? separa comparação das saídas e : para separar if e else | true ou false

console.log(idadeCliente >= idadeMinima ? "Maior de idade, pode beber!" : "Só água pra você");

// Não é recomendado usar ternários dentro de ternários | Não é boa prática
// (condição) ? if : else -> saídas se for true ou false