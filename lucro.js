function lucro(){
    let preco = 5.0
    let qtd = 120
    const despesa = 200
    let lucro
    aux = ""
    while (preco >=1){
        lucro = (preco*qtd) - despesa
        alert(`${preco} - ${qtd} - ${despesa} - ${lucro}`)
        qtd = qtd + 26
        preco = preco * 0.5

    }

alert(aux)

}

// calcular maior lucro maior despezqa e maior preço