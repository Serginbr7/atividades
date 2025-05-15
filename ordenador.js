function exe1() {
    let a, b, c, d, aux
    let grupo = 1
    a = Number(prompt('informe o número de a'))
    b = Number(prompt('informe o número de b'))
    c = Number(prompt('informe o número de c'))
    d = Number(prompt('informe o número de d'))


    let conta = 0
    while (conta < 3) {
        if (a > b) {
            aux = a; a = b; b = aux;
        }
        if (b > c) {
            aux = b; b = c; c = aux;
        }
        if (c > d) {
            aux = c; c = d; d = aux;
        }
        conta++
    }

    alert(`A ordem crescente correta é:${a}, ${b}, ${c}, ${d}`)
    grupo++
}