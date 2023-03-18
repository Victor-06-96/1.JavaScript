let valores = [1,4,5,2]
valores.push(7) // coloca o número 7 na ultima posição
valores.sort() // ordena as posições em ordem crescente
console.log(valores)
console.log(`o vetor tem ${valores.length} posições`)
console.log(`o primeiro valor do vetor é ${valores[0]}`)

var pos = valores.indexOf(5)

if (pos == -1) {
    console.log('valor, nao encontrado')
} else {
    console.log(`o valor 5 está na posição ${pos}`)
}

var pos2 = valores.indexOf(3) /* indexOf(valor) vai procurar  o valor que vc olocou entre parenteses, 
se ele achar, vai mostrar em qual posição o valor se encontra, se nao achar, 
vai trazer a resposta (-1)*/

if (pos2 == -1) {
    console.log(`valor não encontrado`)
} else {
    console.log(`o valor 5 está na posição ${pos2}`)
}


