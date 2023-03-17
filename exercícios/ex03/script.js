function contar() {
   var ini = parseInt(window.document.querySelector(`#inicio`).value)
   var fim = parseInt(window.document.querySelector(`#fim`).value) + 1 
   var passo = parseInt(window.document.querySelector(`#passo`).value) 
   var comando = window.document.querySelector(`#comando`)
   if (!inicio || !fim || !passo) {
    window.alert(`[ERRO] Digite um Número nos campos abaixo`)
   } else {
    comando.innerHTML = `Contando: </br>`
    for(var i = ini ; i <= fim ; i += passo) {
        comando.innerHTML += ` > ${i}`
    }
   }
}


/*for( i ; i < fim ; i = i + passo) {
    console.log(`${i}`)
    comando.textContent = i
}*/