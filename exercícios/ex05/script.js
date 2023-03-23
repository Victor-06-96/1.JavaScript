let valores = []


function adicionar() {
    let num = parseInt(window.document.querySelector(`#num`).value)
    let sel = window.document.querySelector(`#lista`)
    if (!num || num > 100 || num < 1) {
        alert(`[ERRO] Adicione um número entre de 1 a 100`)
    } else if (valores.includes(num)) {
        alert('Este número já foi adicionado!')
      } else {
        valores.push(num)
        let item = document.createElement(`option`)
            item.text = `O valor ${num} foi adicionado.`
            sel.appendChild(item)
    }

    let numero = window.document.querySelector(`#num`)
    numero.value = ``
    numero.focus()
}

function finalizar() {
    let resp1 = window.document.querySelector(`#resp1`)
    let resp2 = window.document.querySelector(`#resp2`)
    let resp3 = window.document.querySelector(`#resp3`)
    let resp4 = window.document.querySelector(`#resp4`)
    let resp5 = window.document.querySelector(`#resp5`)
    let soma = 0

    for (let s = 0 ; s < valores.length ; s++) {
        soma += valores[s]
    }

    let media = soma / valores.length

    let mediafixed = media.toFixed(2) // limita o número de casas decimais exibido
    
resp1.innerHTML = `Ao todo, temos ${valores.length} números cadastrados `
let maior = Math.max.apply(null, valores)
resp2.innerHTML = `Ò maior valor informado foi o ${maior}`
let menor = Math.min.apply(null, valores)
resp3.innerHTML = `O menor valor informado foi ${menor}`
resp4.innerHTML = `A soma de todos os valores é ${soma}`
resp5.innerHTML = `A média dos valores digitados é ${mediafixed}`
}


function limpar() {
    let sel = window.document.querySelector(`#lista`)
    let resp1 = window.document.querySelector(`#resp1`)
    let resp2 = window.document.querySelector(`#resp2`)
    let resp3 = window.document.querySelector(`#resp3`)
    let resp4 = window.document.querySelector(`#resp4`)
    let resp5 = window.document.querySelector(`#resp5`)
    sel.innerHTML = ``
    resp1.innerHTML = ``
    resp2.innerHTML = ``
    resp3.innerHTML = ``
    resp4.innerHTML = ``
    resp5.innerHTML = ``
}

