const pesquisarPreco = function(opcao){
switch(opcao){
    case 'uva':
        console.log('Preço da uva: R$1,70')
        alert('Preço da uva: R$1,70')
        break
    case 'laranja':
        console.log('Preço da laranja: R$2,50')
        alert('Preço da laranja: R$2,50')
        break
    case 'maça':
        console.log('Preço da maçã: R$3,09')
        alert('Preço da maçã: R$3,09')
        break
    default:
        console.log('Produto não existe')
        break
    }
}