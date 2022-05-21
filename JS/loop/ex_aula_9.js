//1. array com 5 nomes
let nomes = ["Jõao","Paula","Cristina","Júlia","Laura"];
console.log(nomes)

//2. 8 funcionários com salários
let s = []
for (let i = 0; i <= 2; i++){
    a = Math.floor(Math.random()*(1000,3000))
s.push(a)
console.log(s);
}

//3. array de valores booleanos
isFinite = [verdadeiro, verdadeiro, falso]

//4. array de salários valor da hora, total: 
let salarios = [2.593, 1.301, 2.350, 4.765, 1.300]

//5. array que em cada linha possua valor de um produto e ao lado possua o valor do produto com
//desconto de 5%;
let frutas = ['uva', 'maca', 'banana', 'abacaxi', 'melancia'] 
n = 5
for (let i = 0; i < n; i++){
    valor = Math.floor(Math.random()*10)
    desconto = (valor / 100) * 5
    console.log(frutas, valor)
}
/*6. Matriz de ordem 3 e insira números aleatórios de 0 a 9. Em seguida multiplique por 2 os
valores da diagonal principal;*/
matriz = []
console.log('Original');
for (let i = 0; i < 3; i++) {
    x = Math.floor(Math.random() * 9)
    y = Math.floor(Math.random() * 9)
    z = Math.floor(Math.random() * 9)
    console.log(x, y, z);
    matriz.push([x, y, z])
}
console.log('Diagonal principal dobrada')
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i == j) {
            matriz[i][j] *= 2
        }
    }
    console.log("|", matriz[i][0], matriz[i][1], matriz[i][2], "|");
}
/* 7. Crie uma matriz de ordem 2 e calcule o determinante. A cada execução do script os valores da matriz
devem ser gerados aleatoriamente. */

matriz = []
console.log('Matriz');
for (let i = 0; i < 2; i++){
    a = Math.floor(Math.random()*10)
    b = Math.floor(Math.random()*10)
    console.log(a, b);
    matriz.push([a, b])
}
console.log('Determinante')
for (let i = 0; i < 2; i++) {
    console.log("|",matriz[i][0],matriz[i][1],"|");
}
