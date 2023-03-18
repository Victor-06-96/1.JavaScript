var valores = [3,5,6,8,4,7,2,1,9]

console.log(valores)

/*for(var pos=0; pos < valores.length; pos++)
console.log(`A posição ${pos} tem o valor ${valores[pos]}`)*/

/*abaixo tem uma uma forma de simplificar ainda mais*/

for (var pos in valores) {
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}

/*os dois codigos tem exatamente a mesma funcionalidade, a unica difereça é a so a simplificação*/
 
var num = 4
var posi = valores.indexOf(num)

if (posi == -1) {
    console.log(`Valor não encontrado`)
} else {
    console.log(`O valor ${num} está na posição ${posi}`)
}

/* indexOf(valor) vai procurar  o valor que vc olocou entre parenteses, 
se ele achar, vai mostrar em qual posição o valor se encontra, se nao achar, 
vai trazer a resposta (-1)*/