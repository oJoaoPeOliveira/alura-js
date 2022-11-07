/* 
var -> primeira que surgiu

var altura = 5;
var comprimento = 7;

hoisting
Quando o js é iniciado, começa a ler todo o programa, identifica todas váriaves do tipo var e carrega elas primeiro
Mas tem o risco de usar o mesmo nome de váriaveis em duas partes ou mais.
Não é necessário declarar como var mas por boas práticas sim, o node declara como var

area = altura * comprimento;
console.log(area);
var area;
*/

// let precisa ser iniciada antes de ser feita qualquer coisa usando ela
// 

let forma = "retangulo";
let altura = 5;
let comprimento = 7;
let area;

if (forma === "testeLet") {
    // a let declarada neste bloco de código ({}) não vai alterar o valor fora deste escopo
    let area = 20;
    //area = altura * comprimento;
    console.log(area);
} else {
    area = altura * comprimento;
}

console.log("Área do retângulo => " + area);

// const === constante, nunca será trocado o valor dela assim que atribuido um
// evitando que durante a execução da aplicação alguem altere o valor da váriavel

const formato = "nada";
const lado = 5;
let areaQuadrado;

if (formato === "quadrado") {
    areaQuadrado = lado * lado;
} else {
    areaQuadrado = 0;
}

console.log("Área do quadrado => " + areaQuadrado);

// Hoje em dia var é propícia a bugs

// Os dois precisão ser declarados antes de ser usados
// let quando sabe que o resultado será mudado, reatribuído 
// O resto dos casos que será um valor fixo => const