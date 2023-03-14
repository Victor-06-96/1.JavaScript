function carregar() {
var msg = window.document.querySelector(`#msg`)
var img = window.document.querySelector(`#imagem`)
var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()
var dia = window.document.querySelector(`#dia`)
msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`

if (hora < 12 && hora >= 0) {
    img.src = `imagens/manha.jpg`
    document.body.style.background = `rgb(252, 250, 194)`
//BOM DIA
} else if (hora >= 12 && hora < 19) {
    img.src = `imagens/tarde.jpg`
    document.body.style.background = `rgb(159, 193, 245)`
//BOA TARDE
} else {
    img.src = `imagens/noite.jpg`
    document.body.style.background = `rgb(109, 53, 109)`
//BOA NOITE
}
}