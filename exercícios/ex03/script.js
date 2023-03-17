function contar() {
   var ini = parseInt(window.document.querySelector(`#inicio`).value)
   var fim = parseInt(window.document.querySelector(`#fim`).value)
   var passo = parseInt(window.document.querySelector(`#passo`).value) 
   var comando = window.document.querySelector(`#comando`)
   if (!inicio || !fim || !passo) {
    comando.innerHTML = `Impossivel Contar`
    comando.style.color = `red`
   } else if(ini < fim) { 
    comando.innerHTML = `Contando: </br>`
    for(var i = ini ; i <= fim ; i += passo) {
        comando.innerHTML += ` ${i} \u{1F449}`
        }
        comando.innerHTML += `\u{1F3C1}`
        comando.style.color = `black`
   } else {
    comando.innerHTML = `Contando: </br>`
    for(var i = ini ; i >= fim ; i -= passo) {
        comando.innerHTML += ` ${i} \u{1F449}`
        }
        comando.innerHTML += `\u{1F3C1}`
        comando.style.color = `black`
   }
}


/*for( i ; i < fim ; i = i + passo) {
    console.log(`${i}`)
    comando.textContent = i
}*/