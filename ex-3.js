function calcular() {
    const salario = parseFloat(document.getElementById('salario').value); //feito
    const taxaDesconto = document.getElementById('taxa-desconto'); // feito
    const valorDescontado = document.getElementById('valor-descontado');
    const liquidoInput = document.getElementById('liquido'); // certo

    let valorDescontoSalario = 0;
    let desconto = 0;
    if (salario <= 1000) {
        taxaDesconto.value = '8%';
        valorDescontoSalario = salario * 0.08;
    } else if (salario > 1000 && salario <= 1500) {
        taxaDesconto.value = '8.5%';
        valorDescontoSalario = salario * 0.085; 
    } else {
        taxaDesconto.value = '9%';
        valorDescontoSalario = salario * 0.09;
    }

    desconto = salario - valorDescontoSalario;

    valorDescontado.value = valorDescontoSalario.toFixed(2);
    liquidoInput.value = desconto.toFixed(2); //certo
}

