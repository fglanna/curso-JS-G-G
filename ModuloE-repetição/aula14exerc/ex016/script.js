function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Contagem Impossível'       
        
    } else {
        res.innerHTML = 'Contando: <br> '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo Inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // Contagem Crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}` // Unicode arrow right
            }
            
        } else {
            // Contagem Decrescente
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}` // Unicode arrow right
            }
            
        }
        res.innerHTML += `\u{1F3C1}` // Unicode white square
    }
}