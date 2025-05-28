function lucro(){
<<<<<<< HEAD
    let preco = 5
=======
    let preco = 5.0
>>>>>>> 34629a45a5086c6d5395193851d98153e18cfec6
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

function exe7(){
    let idade, altura, peso
    let idadesup = 0, mediaaltura = 0, pesomenor40 = 0
    let idademaior50, somaaltura, dezevinte

    for(i=0; i<=5; i++){
    idade = number(prompt('Informe o nome'))
    altura = number(prompt('Informe a altura'))
    peso = number(prompt('informe o peso'))
        if(idade > 50){
            idademaior50 ++
        }
        if(idade >=10 && idade<=20){
            dezevinte++
            mediaaltura = (somaaltura + altura) / dezevinte
        }
        
}
}