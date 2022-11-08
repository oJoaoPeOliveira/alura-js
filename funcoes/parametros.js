// Função sem parâmetros

function soma() {
    return 1 + 1
}

// PROBLEMA -> SÓ FUNCIONA SE A SOMA FOR 1 + 1
console.log(soma());

// Criando a função de uma forma onde ela pode ser reaproveitada


// Parâmetros de função -> Serve para a função receber os dados que ela precisa para executar corretamente
function somaCorreta(num1, num2) {
    return num1 + num2;
}

// A chamada da função somaCorreta precisa que seja passado os dois argynebtis
console.log(somaCorreta(10, 10));

// Parâmetros == Argumentos

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}

// CUIDAR COM A ORDEM DOS ARGUMENTOS!
console.log(nomeIdade(23, "João Pedro"));

// Atribuindo um valor padrão para não dar erro caso não seja colocado um argumento
function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}

console.log(multiplica(2 + 3, 4 + 5));
console.log(multiplica(somaCorreta(3, 3), somaCorreta(4, 5)));

// Se não tiver console.log(), ela será executada corretamente só não será mostrado o resultado

console.log(multiplica(somaCorreta(3, 3)));

// Os nomes dos parâmetros podem ser os mesmos, pois eles só serão válidos dentro do escopo da função(na execução)

// Boa prática -> ter poucos parâmetros pois se tiver muitos significa que pode ser fragmentada em várias funcões

/*
Parâmetros x argumentos: Na prática se referem ao mesmo tipo de dado; algumas documentações se referem a parâmetros no momento em que a função é definida (no caso, numero1, numero2, etc) e argumentos como os dados que utilizamos para executar a função (ou seja, 30, 45, etc).
*/