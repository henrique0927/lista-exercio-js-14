function calcular() {
    const salario = parseFloat(document.getElementById('salario').value);
    const inssInput = document.getElementById('inss');
    const liquidoInput = document.getElementById('liquido');

    let inss = 0;
    let liquido = 0;

    if (salario <= 1412) {
        inss = salario * 0.075;
    } else if (salario > 1412 && salario <= 2666.68) {
        inss = salario * 0.09; 
    } else if (salario > 2666.68 && salario <= 4000) {
        inss = salario * 0.12;
    } else {
        inss = salario * 0.14;  
    }

    liquido = salario - inss;

    inssInput.value = inss.toFixed(2);
    liquidoInput.value = liquido.toFixed(2);
}

