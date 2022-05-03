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

// 4. Leia um número maior que 10.000 e divida ele 5 vezes.
//Mostre ao usuário o resultado da divisão.
numero = 15000.00
n = 5
for (i=0; i < n; i++){
console.log(numero);
numero /= 2
}

// 5. Leia 10 nomes e mostre ao usuário a quantidade de letras.
