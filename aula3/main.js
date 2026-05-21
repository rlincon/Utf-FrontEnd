// ==========================
// Aula 2 - Arrays, Laços de Repetição e Funções
// ==========================

// --------------------------
// ARRAYS
// --------------------------

// Um array (ou vetor) serve para armazenar vários valores em uma única variável.
// Vantagem: organiza dados relacionados, facilita percorrer com laços.
// Desvantagem: índices fixos (0, 1, 2...) podem ser confusos para iniciantes.

let numeros = [10, 20, 30, 40, 50]; // array com 5 elementos

console.log("Primeiro elemento:", numeros[0]); // índice 0
console.log("Último elemento:", numeros[numeros.length - 1]); // length retorna o tamanho

console.log("Tamanho do array:", numeros.length); // útil em loops

// --------------------------
// FOR
// --------------------------

// O for é uma estrutura de repetição que executa um bloco de código
// enquanto a condição for verdadeira.
// Vantagem: controle total da iteração (início, fim, incremento).
// Desvantagem: se esquecer de atualizar o contador, pode gerar laço infinito.

console.log("Percorrendo array com for:");
for (let i = 0; i < numeros.length; i++) {
  console.log("Índice", i, "=>", numeros[i]);
}

// Exemplo de contagem simples com for
console.log("Contando de 0 a 9 com for:");
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// --------------------------
// WHILE
// --------------------------

// While executa enquanto a condição for verdadeira.
// Vantagem: ideal quando não sabemos quantas repetições serão feitas.
// Desvantagem: pode gerar laços infinitos mais facilmente que o for.

console.log("Contagem regressiva com while:");
let contador = 5;
while (contador > 0) {
  console.log(contador);
  contador--; // reduzindo o valor até chegar a 0
}

// --------------------------
// FUNÇÕES
// --------------------------

// Uma função é um bloco de código reutilizável, que executa uma tarefa específica.
// Vantagem: evita repetição de código, facilita manutenção e legibilidade.
// Desvantagem: se usada de forma exagerada ou mal organizada, pode complicar.

// Declaração de uma função simples (sem parâmetros)
function saudacao() {
  console.log("Olá! Seja bem-vindo à Aula 2 de JavaScript!");
}

// Chamando (invocando) a função
saudacao();

// Função com parâmetros
function soma(numero1, numero2) {
  // soma dois números e retorna o resultado
  return numero1 + numero2;
}

let resultado = soma(5, 7);
console.log("Resultado da soma:", resultado);

//////////////////////////////////////////////////////////////////////////////////////////////////

// Função prática: calcular média de notas
function calcularMedia(listaNotas) {
  let soma = 0;
  for (let i = 0; i < listaNotas.length; i++) {
    soma += listaNotas[i];
  }
  return soma / listaNotas.length;
}

// Exemplo com entrada do usuário
let quantidadeNotas = parseInt(prompt("Quantas notas deseja inserir?"));
let notas = [];

for (let i = 0; i < quantidadeNotas; i++) {
  let nota = parseFloat(prompt("Digite a nota " + (i + 1)));
  notas.push(nota);
}

console.log("Notas digitadas:", notas);

let media = calcularMedia(notas);
console.log("A média é:", media);

if (media >= 6) {
  console.log("Aprovado!");
} else {
  console.log("Reprovado!");
}
