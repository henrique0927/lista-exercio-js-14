function calcular() {
    const nome = document.getElementById('nome').value;
    const salario = parseFloat(document.getElementById('salario')).value;
    const inss = document.getElementById('inss').value;
    const liquido = document.getElementById('liquido').value;

    if (salario <= 1412) {
       inss = salario * (75/100);
       liquido = (salario - inss);
       inss.innerHTML = salario;
    } else if (salario > 1412 && salario <= 2666.68) {
        inss = salario * (90/100);
        liquido = (salario - inss);
        inss.innerHTML = salario;
    } else if (salario > 2666.68 && salario <= 4000) {
        inss = salario * (120/100);
        liquido = (salario - inss);
        inss.innerHTML = salario;
    } else {
        inss = salario * (140/100);
        liquido = (salario - inss);
        inss.innerHTML = inss;
        liquido.innerHTML = liquido;
    }
}
