function verificar() {
    var data = new Date
    var hoje = data.getFullYear()
    var nasc = window.document.querySelector(`#ano`)
    var resp = window.document.querySelector(`#resp`)
    if (nasc.value.length == 0 || Number(nasc.value) > hoje) {
        alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else {
        var sexo = window.document.getElementsByName(`sexo`)
        var idade = hoje - Number(nasc.value)
        var img = document.createElement(`img`)
        img.setAttribute(`ìd`, `foto`) //criando uma area para imagem sem precisar criar em HTML
        var genero = ``
        if (sexo[0].checked) {
            if (idade < 10) {
                genero = `menino`
                img.setAttribute(`src`, `imagens/menino.jpg`)
                //criança
            } else if (idade < 20) {
                genero = `garoto`
                img.setAttribute(`src`, `imagens/garoto.jpg`)
                //adolescente
            } else if (idade < 50) {
                genero = `Homem`
                img.setAttribute(`src`, `imagens/homem.jpg`)
                //adulto
            } else if (idade < 75) {
                genero = `Velho`
                img.setAttribute(`src`, `imagens/velho.jpg`)
                //velho
            } else {
                genero = `Idoso`
                img.setAttribute(`src`, `imagens/idoso.jpg`)
                //idoso
            }
        } else if (sexo[1].checked) {
            if (idade < 10) {
                genero = `menina`
                img.setAttribute(`src`, `imagens/menina.jpg`)
                //criança
            } else if (idade < 20) {
                genero = `garota`
                img.setAttribute(`src`, `imagens/garota.jpg`)
                //adolescente
            } else if (idade < 50) {
                genero = `Mulher`
                img.setAttribute(`src`, `imagens/mulher.jpg`)
                //adulto
            } else if (idade < 75) {
                genero = `Velha`
                img.setAttribute(`src`, `imagens/velha.jpg`)
                //velho
            } else {
                genero = `Idosa`
                img.setAttribute(`src`, `imagens/idosa.jpg`)
                //idoso
            }
        }
        resp.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resp.appendChild(img)
        resp.style.textAlign = `center`
        img.style.width = `300px`
        img.style.borderRadius = `100%`
    }
}