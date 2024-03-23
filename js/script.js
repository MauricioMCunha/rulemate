function calcularRegraDeTres() {
    
    // Obter os valores dos campos de entrada
    const valeProva = document.getElementById("valeProva").value;
    const questoesTem = document.getElementById("questoesTem").value;
    const acertosProva = document.getElementById("acertosProva").value;

    // Verificar se os valores são válidos
    if (isNaN(valeProva) || isNaN(questoesTem) || isNaN(acertosProva)) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    // Calcular o valor desconhecido
    const resultado = ( acertosProva * valeProva) / questoesTem;

    // Exibir o resultado na página
    document.getElementById("resultado").innerText = "Sua nota é: " + resultado;
}