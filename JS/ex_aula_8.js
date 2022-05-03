//Conte de 1 a 100 usando FOR, mostre ao usuário os números
//sendo incrementados.
 let n = 100
 for (let i = 0; i <= n; i++){
 console.log("Valor de i: ", i);
 }

//Conte de 1 a 100 usando FOR, mas mostre ao usuário
//apenas os pares.
let num = 100
for (let i = 0; i <= num; i++){ 
    if(i%2==0){
        console.log("Números pares: ", i) 
    } 
}

//Leia 5 salários e informe a média;
qtdeSalarios = 5
totalMedia = 0
for (i = 0; i < qtdeSalarios; i++){
    let pessoa1 = Math.random() * 3000
    media += pessoa1
    console.log("Salários [",
            pessoa1.toFixed(2),
            "], média: [",
            media.toFixed(2),"]"
            ) 
}
totalMedia = totalMedia / qtdeSalarios
console.log("Média de salários", totalMedia.toFixed(2));



