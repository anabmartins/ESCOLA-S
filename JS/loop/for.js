 let n = 10

for (i = 0; i < n; i++){
console.log("i: ", i+1);
}

 for (i=n; i>0; i--){
     console.log("i: ", i);
 }

//potenciação
 base = 2
 expo = 1
 for (i=0; i<n; i++){
    expo *=base
    expo = expo * base
 }

 console.log(expo);
 console.log(2**5);
 console.log(Math.pow(2,5));

//fatorial
n=5
fat = 1
for(i=5; i>0; i--){
fat *= i
}
console.log(fat);

//cálculo média
qtdeAlunos = 3
totalMedia = 0
for (i = 0; i < qtdeAlunos; i++){
    let nota1 = Math.random() * 10
    let nota2 = Math.random() * 10
    let nota3 = Math.random() * 10
    let media = (nota1 + nota2 + nota3) / 3
    totalMedia += media
    console.log("Notas [",
            nota1.toFixed(2),
            nota2.toFixed(2),
            nota3.toFixed(2),
            "], média: [",
            media.toFixed(2),"]"
            ) 
}
totalMedia = totalMedia / qtdeAlunos
console.log("Média de notas", totalMedia.toFixed(2));
