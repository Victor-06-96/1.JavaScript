var agora = new Date()
var diasem = agora.getDay()
/*
0 - domingo 
1 - segunda
2 - terça
3 - quarta
4 - quinta
5 - sexta
6 - sabado
*/

switch(diasem) {
    case 0:
        console.log('domingo')
        break
    case 1:
        console.log("segunta")
        break
    case 2:
        console.log('terça')
        break
    case 3:
        console.log('quarta')
        break
    case 4:
        console.log('quinta')
        break
    case 5:
        console.log('sexta')
        break
    case 6:
        console.log('sabado')
        break
    default:
        console.log('[ERRO] dia inválido')
        break // nao é necessário
}