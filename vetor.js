function vetor(){
    let vet = []

    for(let i=0; i<10; i++){
        vet.push(number(prompt(`Informe o ${i+1} elemento`)))
    }
    let soma = 0
    for( let i=0; i<10; i++){
        soma = soma + vet
    }
    alert(`A media dos eleentos é $(soma/vet.lenght)`)
}

//programa em js que solicite 6 números
//calcular e exibir:
//os numeros oares e a qtd de pares
//os numeros impares e a qtde de impares

//faça um porograma em JS eque solicite 10 numeros
//calcule e mostre o betor alterado da seguinte forma:
//nas posições pares, comar 10 no elemento
//nas posições ímpares, multiplicar por 3 o elemento

function programa6numeros() {
    let vet = []
    let contpar = 0, contimpar
    for(let i=0; i<6; i++){
        vet.push(number(prompt(`Informe o ${i + 1} elemento`)))
    }
    
    let pares = []
    let impares = []

    for(let i=0; i<6; i++){
        if(vet[i] %2 == 0){
        pares.push(vet[i])
        contpar ++
        }
    
        else{ impares.push(vet[i])
            contimpar ++
        }    
    }
    alert(`Existem ${impares} números ímpares: ${}`)
}

function parimpar(){
    let vet = []
    for(let i=0; i<10; i++){
        vet.push(Number(prompt(`Informe o ${i+1} número`)))
    }
    
    for(let i=0; i<10; i++){
        if (vet[i] %2 == 0){
            vet[i] += 10
        }
        else{
            vet[i] *= 3
        }
        
    }
    alert(`Novo vetor alterado ${vet}`)
}