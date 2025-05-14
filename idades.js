function faixaetaria() {
    let f1 = 0, f2 = 0, f3 = 0, f4 = 0, f5 = 0;
    let cont = 1; // Inicializei a variável cont
    let idade;
    let porc1, porc5;

    while (cont <= 8) {
        idade = Number(prompt(`Informe a idade ${cont}:`)); // Corrigi a template string

        if (idade >= 0 && idade <= 15) { // Corrigi a condição
            f1++;
        }
        else if (idade <= 30) { // Simplifiquei as condições
            f2++;
        }
        else if (idade <= 45) {
            f3++;
        }
        else if (idade <= 60) {
            f4++;
        }
        else if (idade <= 120) {
            f5++;
        }
        else {
            alert('Idade inválida! Digite um valor entre 0 e 120.');
            continue;
        }
        cont++; // Corrigi o incremento
    }

    porc1 = (f1/8)*100;
    porc5 = (f5/8)*100;

    // Mostrando os resultados na página
    document.getElementById('resultados').innerHTML = `
        <h3>Resultados:</h3>
        <p>0-15 anos: ${f1} pessoas (${porc1.toFixed(1)}%)</p>
        <p>16-30 anos: ${f2} pessoas</p>
        <p>31-45 anos: ${f3} pessoas</p>
        <p>46-60 anos: ${f4} pessoas</p>
        <p>61+ anos: ${f5} pessoas (${porc5.toFixed(1)}%)</p>
    `;
}