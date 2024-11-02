
function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()
msg.innerHTML = `Agora são ${hora}:${min} hrs.`
if (hora >= 0 && hora < 12) {
    img.src = 'manha.png'
    msg.innerHTML += ' Bom dia!'
    document.body.style.background = '#e2cd9f'
} else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png'
        msg.innerHTML += ' Boa tarde!'
        document.body.style.background = '#b9846f'
} else  {
        img.src = 'noite.png'
        msg.innerHTML += ' Boa noite!'
        document.body.style.background = '#515154'
    }
 
}

