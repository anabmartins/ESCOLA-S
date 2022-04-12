const pesquisarPreco = function(opcao){
    let resultado = document.getElementById('resultado')
switch(opcao){
    case 'uva':
        resultado.innerHTML = "Preço da uva é R$1,70"
        break
    case 'laranja':
        resultado.innerHTML = "Preço da laranja é R$2,50"
        break
    case 'maça':
        resultado.innerHTML = "Preço da maçã é R$3,09"
        break
        case 'pera':
            resultado.innerHTML = "Preço da pera é R$4,05"
            break
    default:
        resultado.innerHTML = "Resultado não existe"
            break
    }
}
