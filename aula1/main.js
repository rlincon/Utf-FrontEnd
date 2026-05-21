// Exibe um alerta na tela ao carregar a pagina
alert("Esta funcionando");

// Declaracao de variaveis
let nome = "diogo"; // variavel que pode ser alterada
const nome1 = "matheus"; // constante, valor nao pode ser alterado

// Alterando o valor de uma variavel (permitido porque foi declarada com let)
nome = "joao";

// Coletando informacoes do usuario
let nomeUsuario = prompt("Qual o seu nome?"); // Entrada de texto (string)
let idade = prompt("Qual a sua idade?"); // Entrada de texto, mas retornara como string
let altura = 1.7; // Numero decimal (float)

// Exibindo informacoes no console
console.log("Ola, eu sou o " + nomeUsuario + " e tenho " + idade);

// Template string (interpolacao de variaveis com crase `)
let texto = `Ola, eu sou ${nomeUsuario} e tenho ${idade} anos`;
console.log(texto);

// Exibindo a variavel altura
console.log(altura);

// Variaveis booleanas (verdadeiro/falso)
let verdadeiro = true;
let falso = false;

// Operadores aritmeticos basicos em JavaScript
/*
> Soma (+)
> Subtracao (-)
> Multiplicacao (*)
> Divisao (/)
> Resto da divisao (%)
*/

// Solicitando dois numeros ao usuario e convertendo para inteiro
let numero1 = parseInt(prompt("Digite um numero"));
let numero2 = parseInt(prompt("Digite outro numero"));

// Operacoes matematicas
let soma = numero1 + numero2;
console.log("A soma e: " + soma);

let subtracao = numero1 - numero2;
console.log("A subtracao e: " + subtracao);

let divisao = numero1 / numero2;
console.log("A divisao e: " + divisao);

// Resto da divisao (para verificar se e par ou impar)
let resto = numero1 % 2;

if (resto == 0) {
  console.log("O numero1 e par");
} else {
  console.log("O numero1 e impar");
}

// Estrutura condicional para verificar faixa etaria
if (idade >= 0 && idade < 18) {
  console.log("Voce e crianca/adolescente");
} else {
  if (idade >= 18 && idade < 60) {
    console.log("Voce e um adulto");
  } else {
    console.log("Voce e idoso");
  }
}

// Operador logico NOT (!) inverte o valor booleano
console.log(!verdadeiro); // Se verdadeiro = true, entao !verdadeiro = false
