function gerar() {
    var num =parseInt(window.document.querySelector(`#numero`).value)
    var tab = window.document.querySelector(`#seltab`)
    if (!num) {
        alert(`Por favor digite um número`)
    } else {
        var n = parseInt(1) 
        tab.innerHTML = ``
        for (var n ; n <= 10 ; n++) {
            var item = document.createElement(`option`)
            item.text = `${num} x ${n} = ${num*n}`
            tab.appendChild(item)
        }
    }
}

function limpar() {
    var tab = window.document.querySelector(`#seltab`)
    tab.innerHTML = ``
    var item = document.createElement(`option`)
            item.text = `Digite um número acima`
            tab.appendChild(item)
}