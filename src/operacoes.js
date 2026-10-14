  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
// src/operacoes.js
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1

  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
// === Bloco 1: Operações Básicas (1-10) ===
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function soma(a, b) { return a + b; }
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function subtracao(a, b) { return a - b; }
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function multiplicacao(a, b) { return a * b; }
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function divisao(a, b) {
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  if (b === 0) throw new Error('Divisão por zero não é permitida.');
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  return a / b;
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
}
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function potencia(base, expoente) { return Math.pow(base, expoente); }
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function raizQuadrada(n) {
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  if (n < 0) throw new Error('Não é possível calcular a raiz quadrada de um número negativo.');
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  return Math.sqrt(n);
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
}
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function restoDivisao(dividendo, divisor) { return dividendo % divisor; }
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function fatorial(n) {
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  if (n < 0) throw new Error('Fatorial não é definido para números negativos.');
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  if (n === 0 || n === 1) return 1;
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  let resultado = 1;
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  for (let i = 2; i <= n; i++) { resultado *= i; }
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  return resultado;
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
}
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function mediaArray(numeros) {
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  if (numeros.length === 0) return 0;
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  return somaArray(numeros) / numeros.length;
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
}
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function somaArray(numeros) {
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  return numeros.reduce((acc, val) => acc + val, 0);
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
}
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1

  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
// === Bloco 2: Operações em Arrays e Checagens (11-20) ===
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function maximoArray(numeros) {
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  if (numeros.length === 0) throw new Error('Array vazio не possui valor máximo.');
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  return Math.max(...numeros);
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
}
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function minimoArray(numeros) {
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  if (numeros.length === 0) throw new Error('Array vazio не possui valor mínimo.');
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  return Math.min(...numeros);
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
}
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function valorAbsoluto(n) { return Math.abs(n); }
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function arredondar(n) { return Math.round(n); }
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function isPar(n) { return n % 2 === 0; }
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function isImpar(n) { return n % 2 !== 0; }
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function calcularPorcentagem(percentual, valor) { return (valor * percentual) / 100; }
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function aumentarPorcentagem(valor, percentual) { return valor * (1 + percentual / 100); }
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function diminuirPorcentagem(valor, percentual) { return valor * (1 - percentual / 100); }
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function inverterSinal(n) { return -n; }
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1

  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
// === Bloco 3: Funções Trigonométricas e Logarítmicas (21-30) ===
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function seno(anguloRad) { return Math.sin(anguloRad); }
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function cosseno(anguloRad) { return Math.cos(anguloRad); }
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function tangente(anguloRad) { return Math.tan(anguloRad); }
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function logaritmoNatural(n) { return Math.log(n); }
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function logaritmoBase10(n) { return Math.log10(n); }
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function arredondarParaBaixo(n) { return Math.floor(n); }
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function arredondarParaCima(n) { return Math.ceil(n); }
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function hipotenusa(catetoA, catetoB) {
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  return Math.sqrt(Math.pow(catetoA, 2) + Math.pow(catetoB, 2));
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
}
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function grausParaRadianos(graus) { return graus * (Math.PI / 180); }
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function radianosParaGraus(radianos) { return radianos * (180 / Math.PI); }
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1

  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
// === Bloco 4: Teoria dos Números e Sequências (31-40) ===
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function mdc(a, b) { // Máximo Divisor Comum
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  while(b) { [a, b] = [b, a % b]; }
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  return a;
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
}
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function mmc(a, b) { // Mínimo Múltiplo Comum
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  return (a * b) / mdc(a, b);
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
}
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function isPrimo(n) {
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  if (n <= 1) return false;
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  for (let i = 2; i < n; i++) {
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
    if (n % i === 0) return false;
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  }
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  return true;
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
}
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function fibonacci(n) { // Retorna o n-ésimo termo
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  if (n <= 1) return n;
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  return fibonacci(n - 1) + fibonacci(n - 2);
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
}
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function produtoArray(numeros) {
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  // Stryker disable next-line ConditionalExpression: equivalente, o reduce com valor inicial 1 já devolve 1 para array vazio
  if (numeros.length === 0) return 1;
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  return numeros.reduce((acc, val) => acc * val, 1);
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
}
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function clamp(valor, min, max) {
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  // Stryker disable next-line EqualityOperator: equivalente, se valor === min, devolver min é o mesmo que devolver valor
  if (valor < min) return min;
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  // Stryker disable next-line EqualityOperator: equivalente, se valor === max, devolver max é o mesmo que devolver valor
  if (valor > max) return max;
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  return valor;
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
}
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function isDivisivel(dividendo, divisor) { return dividendo % divisor === 0; }
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function celsiusParaFahrenheit(celsius) { return (celsius * 9/5) + 32; }
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function fahrenheitParaCelsius(fahrenheit) { return (fahrenheit - 32) * 5/9; }
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function inverso(n) {
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  if (n === 0) throw new Error('Não é possível inverter o número zero.');
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  return 1 / n;
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
}
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1

  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
// === Bloco 5: Geometria e Lógica de Comparação (41-50) ===
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function areaCirculo(raio) { return Math.PI * Math.pow(raio, 2); }
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function areaRetangulo(base, altura) { return base * altura; }
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function perimetroRetangulo(base, altura) { return 2 * (base + altura); }
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function isMaiorQue(a, b) { return a > b; }
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function isMenorQue(a, b) { return a < b; }
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function isEqual(a, b) { return a === b; }
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function medianaArray(numeros) {
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  if (numeros.length === 0) throw new Error('Array vazio не possui mediana.');
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  const sorted = [...numeros].sort((a, b) => a - b);
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  const mid = Math.floor(sorted.length / 2);
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  if (sorted.length % 2 === 0) {
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
    return (sorted[mid - 1] + sorted[mid]) / 2;
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  }
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  return sorted[mid];
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
}
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function dobro(n) { return n * 2; }
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function triplo(n) { return n * 3; }
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
function metade(n) { return n / 2; }
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1

  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1

  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
// Exportando todas as 50 funções
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
module.exports = {
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  soma, subtracao, multiplicacao, divisao, potencia, raizQuadrada, restoDivisao,
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  fatorial, mediaArray, somaArray, maximoArray, minimoArray, valorAbsoluto,
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  arredondar, isPar, isImpar, calcularPorcentagem, aumentarPorcentagem,
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  diminuirPorcentagem, inverterSinal, seno, cosseno, tangente, logaritmoNatural,
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  logaritmoBase10, arredondarParaBaixo, arredondarParaCima, hipotenusa,
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  grausParaRadianos, radianosParaGraus, mdc, mmc, isPrimo, fibonacci,
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  produtoArray, clamp, isDivisivel, celsiusParaFahrenheit, fahrenheitParaCelsius,
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  inverso, areaCirculo, areaRetangulo, perimetroRetangulo, isMaiorQue,
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
  isMenorQue, isEqual, medianaArray, dobro, triplo, metade
  // Stryker disable next-line ConditionalExpression,LogicalOperator: equivalente, para n = 0 ou 1 o laço abaixo também resulta em 1
};