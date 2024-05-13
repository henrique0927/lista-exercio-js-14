document.addEventListener("DOMContentLoaded", function() {
    // Declaração das variáveis
    let a = 2;
    let b = 5;
  
    // Calculando e mostrando os resultados
    const diferenca = a - b;
    const resultado1 = (2 * a) + (3 * b);
    const multiplicacao = a * b;

    // Pega a DIV onde vai ficar os Resultados 
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<p>Diferença entre as variáveis: " + diferenca + "</p>" +
                          "<p>Dobro da primeira mais o triplo da segunda variável: " + resultado1 + "</p>" +
                          "<p>Multiplicação das variáveis: " + multiplicacao + "</p>";
  
    // Mostrando as variáveis do maior para o menor
    const maior = Math.max(a, b);
    const menor = Math.min(a, b);
  
    outputDiv.innerHTML += "<p>Variáveis do maior para o menor: " + maior + ", " + menor + "</p>";
  });
  