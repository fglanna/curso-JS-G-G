function verificar() {    
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
         //res.innerHTML = `Idade calculada: ${idade}` = esta tag é apenas para fazer teste antes 
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 4) { 
                genero = 'Bebê'
                img.setAttribute('src', 'imagens/foto-recen-m.png')
            } else if (idade < 12) { 
                genero = 'Criança'
                img.setAttribute('src', 'imagens/foto-bebe-m.png')
            } else if (idade < 18) { 
                genero = 'Adolescente'
                img.setAttribute('src', 'imagens/foto-jovem-m.png')
            } else if (idade < 50) {
                genero = 'Adulto' 
                img.setAttribute('src', 'imagens/foto-adulto-m.png')
            } else {
                genero = 'Idoso'  
                img.setAttribute('src', 'imagens/foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
             genero = 'Mulher'
             if (idade >= 0 && idade <= 4) {
                genero = 'Bebê'
                img.setAttribute('src', 'imagens/foto-recen-f.png')
            } else if (idade < 12) { 
                genero = 'Criança'
                img.setAttribute('src', 'imagens/foto-bebe-f.png')
            } else if (idade < 18) { 
                genero = 'Adolescente'
                img.setAttribute('src', 'imagens/foto-jovem-f.png')
            } else if (idade < 50) {
                genero = 'Adulto' 
                img.setAttribute('src', 'imagens/foto-adulto-f.png')
            } else {
                genero = 'Idoso'
                img.setAttribute('src', 'imagens/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
      

    }
}