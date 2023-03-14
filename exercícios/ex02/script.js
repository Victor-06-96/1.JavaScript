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
        var genero = ``
        if (sexo[0].checked) {
            if (idade < 10) {
                genero = `menino`
                //criança
            } else if (idade < 20) {
                genero = `garoto`
                //adolescente
            } else if (idade < 50) {
                genero = `Homem`
                //adulto
            } else if (idade < 75) {
                genero = `Velho`
                //velho
            } else {
                genero = `Idoso`
                //idoso
            }
        } else if (sexo[1].checked) {
            if (idade < 10) {
                genero = `menina`
                //criança
            } else if (idade < 20) {
                genero = `garota`
                //adolescente
            } else if (idade < 50) {
                genero = `Mulher`
                //adulto
            } else if (idade < 75) {
                genero = `Velha`
                //velho
            } else {
                genero = `Idosa`
                //idoso
            }
        }
        resp.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}