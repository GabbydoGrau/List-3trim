//algoritmo que lê 3 números...
let n1= parseInt(prompt("Digite o 1° número:")); 
let n2= parseInt(prompt("Digite o 2° número:")); 
let n3= parseInt(prompt("Digite o 3° número:")); 

if (n1>=n2 && n1>=n3){
  console.log("O maior é:", n1)
} if (n2>=n1 && n2>=n3){
  console.log("O maior é:", n2)
} else {
console.log("O maior é:", n3);
}
