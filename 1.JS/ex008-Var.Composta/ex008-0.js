/*var ou let, tanto faz */
let num = [ 5, 8, 2, 9, 3]
num[10] = 6 // colocando o número 6 na posição 10
num.push(7) //num.push(valor) coloca o valor desejados na ultima posição

console.log(`Nosso vetor é o ${num}`)
console.log(`o vertor tem ${num.length} posições`) // num.length mostra exatamente quantas posições tem no vetor