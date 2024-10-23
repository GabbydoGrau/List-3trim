// calcular a média e bla bla 
    const nota1 = parseFloat(prompt("Digite a primeira nota:"));
    const nota2 = parseFloat(prompt("Digite a segunda nota:"));
    const nota3 = parseFloat(prompt("Digite a terceira nota:"));

    const media = (nota1 + nota2 + nota3) / 3; //ou pela nota máxima 6?
    console.log("A média é: " media);

    if (media >= 6) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}
