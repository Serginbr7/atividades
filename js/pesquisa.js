function pesquisaSatisfacao() {
    let nota = 0 // variável para armazenar a nota atual inserida pelo usuário
    let conta = 0 // contador para controlar o número de notas inseridas (vai de 0 a 9)
    let totalSatisfeitos = 0 // contador de pessoas satisfeitas (notas maiores ou iguais a 8)
    let totalInsatisfeitos = 0 // contador de pessoas insatisfeitas (notas menores que 6)
    let media = 0 // variável que armazenará a média das notas
    let somaNota = 0 // acumulador da soma de todas as notas

    // Laço para coletar 10 notas dos usuários
    while (conta < 10) {
        // Solicita a nota e converte para número inteiro
            nota = parseInt(prompt(`Informe a nota ${conta + 1}`))

        // Validação da nota: só aceita valores entre 0 e 10,e usando o método isNaN ele verifica se o valor passado é realmente um número
        if (isNaN(nota) || nota < 0 || nota > 10) {
            alert('Valor inválido, por favor, insira-o novamente')
            continue; // retorna ao início do loop sem incrementar o contador
        }

        // Conta como satisfeito se a nota for 8 ou mais
        if (nota >= 8) {
            totalSatisfeitos++
        } 
        // Conta como insatisfeito se a nota for menor que 6
        else if (nota < 6) {
            totalInsatisfeitos++
        }

        // Soma a nota válida ao total para depois calcular a média
        somaNota += nota
        conta++; // avança para a próxima iteração
    }

    // Calcula a média das notas ao final das 10 inserções
    media = somaNota / 10

    // Exibe os resultados finais da pesquisa
    alert(
        `
        Resultado das pesquisas:\n
        Média das notas: ${media}\n
        Total satisfeitos: ${totalSatisfeitos}\n
        Total insatisfeito: ${totalInsatisfeitos}
        `
    )
}
