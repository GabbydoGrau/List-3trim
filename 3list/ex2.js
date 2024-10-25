// elaborar um algoritimo que lê 3 valores...
let a = prompt("Digite o valor de a:"); //prompt pra ler os valores 
let b = prompt("Digite o valor de b:");
let c = prompt("Digite o valor de c:");

let maior3 = Math.max(a, b, c); //pra encontrar o maior dos 3 sem usar repetição

let diferenca = Math.abs(a - b); //pra achar a diferença entre a e b

let maiordeAB = Math.max(a, b); //pra achar o maior entre os 2

console.log(maior " É o maior dos 3");
console.log("O maior de a e b é:" maiordeAB);
console.log("a + b + |a - b| =" a + b + diferenca);
