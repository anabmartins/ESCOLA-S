//1. array com 5 nomes
let nomes = ["Jõao","Paula","Cristina","Júlia","Laura"];
console.log(nomes)

//2. funcionários com salários
let funcionarios_salarios = [2.024, 1.889, 3.500, 2.350, 4.765, 1.300, 3.423, 2.454]

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
//6. Crie uma Matriz de ordem 3 e insira números aleatórios de 0 a 9. Em seguida multiplique por 2 os
//valores da diagonal principal;
