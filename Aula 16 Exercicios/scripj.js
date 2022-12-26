let num = document.querySelector('input#fnum')
let list = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function IsNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista (n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }

}


function adicionar() {
    if(IsNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text= `Valor ${num.value} adicionado.`
        list.appendChild(item)
        res.innerHTML = ''
       
    } else {
        window.alert('Valor invalido ou ja encontrado na lista')
 
    } 
    
    
    num.value = '' // este comando apaga a lista
    num.focus()  // focus serve para automaticamente selecionar o campo e inserir novo dado


}

function finalizar () {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} Numeros cadastrados</p>`
        res.innerHTML += `<p> O Maior valor Informado Foi ${maior} </p>`
        res.innerHTML += `<p> O Menor valor Informado Foi ${menor} </p>`
        res.innerHTML += `<p> Somando todos os valores temos ${soma} </p>`
        res.innerHTML += `<p> A Média dos valores digitados é ${media} </p>`
    }
}
