function contagem() {
    let txtinicio = document.getElementById('txtinicio')
    let txtfim = document.getElementById('txtfim')
    let txtpasso = document.getElementById('txtpasso')
    let result = document.getElementById('resultado')
    var seq = document.getElementById('sequencia')

    if (txtinicio.value.length == 0 || txtfim.value.length == 0 || txtpasso.value.length == 0) {
        result.innerHTML = 'Impossível contar!'
    } else {
        result.innerHTML = 'Contando: <br>'
        var inicio = Number(txtinicio.value)
        var fim = Number(txtfim.value)
        var passo = Number(txtpasso.value)
        if (passo == 0) {
            alert('Passo inválido! Considerando PASSO 1')
            passo = 1 
        }
        if (inicio < fim) {
            for(let c = inicio; c < fim; c += passo) {
                result.innerHTML += `${c} 👉 ` // tecla windows + . (ponto) para utilizar emojis
            
            }   
        } else {
        for(let c = inicio; c >= fim; c -= passo) {
            result.innerHTML += `${c} → `
        }
           }
        result.innerHTML += 'FIM!'
    }
}