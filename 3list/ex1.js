// calcular a média e bla bla 
    const not1 = parseFloat(prompt("Primeira nota:"));
    const not2 = parseFloat(prompt("Segunda nota:"));
    const not3 = parseFloat(prompt("Terceira nota:"));

    const media = (not1 + not2 + not3) / 3; //ou pela nota máxima 6
    console.log("A média é: " media);

    if (media >= 6) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
