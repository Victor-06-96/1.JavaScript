var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
console.log(`Agora são ${hora}:${minuto}`)
if (hora < 12) {
    console.log('bom dia!')
} else if (hora <= 18) {
    console.log('boa tarde!')
} else {
    console.log('boa noite!')
}