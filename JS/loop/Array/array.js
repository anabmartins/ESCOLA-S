 frutas = ['uva', 'maçã', 'pera', 'laranja', 'bergamota', 'mimosa']

 for(let i = 0; i < frutas.length; i++){
     console.log(i);
 }
 for (let i = frutas.length - 1; i >= 0; i--){
     console.log(frutas[i]);
 }

for(let i = 0; i < frutas.length; i++){
    console.log("Cálculo dos índices: " + (frutas.length-1) + " --- " + i);
    console.log(frutas[frutas.length -1 - i])
}

//expoentes em uma array
let numeros = []

let n = 3
for (let i = 0; i < n; i++){
    exponenciacao = 2**(n-i)
    numeros.push(exponenciacao);
}

console.log(numeros);

// Dobrar valor em uma array
let numeros = []

let n = 3
for (let i = 0; i < n; i++){
    exponenciacao = 2**(n-i)
    numeros.push(exponenciacao);
}

console.log("Vetor Original", numeros)
for(let i = 0; i < n; i++){
    numeros[i] *= 2
}

console.log("Vetor Dobrado", numeros);

//gerar matriz
matriz = []
for (let i = 0; i < 3; i++){
    x = Math.floor(Math.random()*10)
    y = Math.floor(Math.random()*10)
    z = Math.floor(Math.random()*10)
    // console.log("Pontos: ", x, y, z)
    matriz.push([x, y, z])
    // console.log(matriz);
}

// console.log("|", matriz[0][0], matriz[0][1], matriz[0][2] ,"|");
// console.log("|", matriz[1][0], matriz[1][1], matriz[1][2] ,"|");
// console.log("|", matriz[2][0], matriz[2][1], matriz[2][2] ,"|");

for (let i = 0; i < 3; i++){
        console.log("|",matriz[i][0],matriz[i][1],matriz[i][2],"|");
}
