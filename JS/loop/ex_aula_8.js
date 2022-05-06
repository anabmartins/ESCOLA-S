// 1. Conte de 1 a 100 usando FOR, mostre ao usuário os números
//sendo incrementados.
 let n = 100
 for (let i = 0; i <= n; i++){
 console.log("Valor de i: ", i);
 }

// 2. Conte de 1 a 100 usando FOR, mas mostre ao usuário
//apenas os pares.
let num = 100
for (let i = 0; i <= num; i++){ 
    if(i%2==0){
        console.log("Números pares: ", i) 
    } 
}

// 3. Leia 5 salários e informe a média;
totalSalario = 0
n = 5
for (i = 0; i < n; i++){
    let salario = Math.random()*3000
    totalSalario += salario
    console.log("I:", i+1, "salário: ", salario.toFixed(2));
}
media = totalSalario / n
console.log("Média de salários: ", media.toFixed(2));
//No console:
// I: 1 salário:  1024.71
// I: 2 salário:  1889.99
// I: 3 salário:  2593.05
// I: 4 salário:  685.07
// I: 5 salário:  1301.40
// Média de salários:  1498.85

// 4. Leia um número maior que 10.000 e divida ele 5 vezes.
//Mostre ao usuário o resultado da divisão.
numero = 15000.00
n = 5
for (i=0; i < n; i++){
console.log(numero);
numero /= 2
}
//No console:
// 15000
// 7500
// 3750
// 1875
// 937.5

// 5. Leia 10 nomes e mostre ao usuário a quantidade de letras.
let nomes = ["Jõao","Paula","Cristina","Júlia","Laura","Emilly","Caio","Bianca","Wagner","Luana"];
for(let i = 0; i < 10; i++){
    console.log(`${nomes[i]}, ${nomes[i].length}`)
}
//No console:
// Jõao, 4
// Paula, 5
// Cristina, 8
// Júlia, 5
// Laura, 5
// Emilly, 6
// Caio, 4
// Bianca, 6
// Wagner, 6
// Luana, 5
