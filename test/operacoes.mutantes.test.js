const {
  divisao, raizQuadrada, fatorial, mediaArray, maximoArray, minimoArray,
  isPar, isImpar, isPrimo, clamp, isDivisivel, celsiusParaFahrenheit,
  fahrenheitParaCelsius, inverso, isMaiorQue, isMenorQue, isEqual,
  medianaArray, produtoArray,
} = require('../src/operacoes');

describe('Testes adicionados para matar mutantes sobreviventes', () => {
  describe('mensagens de erro e valores de fronteira', () => {
    test('divisao deve informar a mensagem de divisão por zero', () => {
      expect(() => divisao(5, 0)).toThrow('Divisão por zero');
    });

    test('raizQuadrada deve lançar erro para número negativo', () => {
      expect(() => raizQuadrada(-1)).toThrow('raiz quadrada de um número negativo');
    });

    test('raizQuadrada de zero deve ser zero e não lançar erro', () => {
      expect(raizQuadrada(0)).toBe(0);
    });

    test('fatorial deve lançar erro para número negativo', () => {
      expect(() => fatorial(-1)).toThrow('Fatorial não é definido');
    });

    test('fatorial de zero deve ser 1 e não lançar erro', () => {
      expect(fatorial(0)).toBe(1);
    });

    test('fatorial de 1 deve ser 1', () => {
      expect(fatorial(1)).toBe(1);
    });

    test('maximoArray deve lançar erro para array vazio', () => {
      expect(() => maximoArray([])).toThrow('possui valor máximo');
    });

    test('minimoArray deve lançar erro para array vazio', () => {
      expect(() => minimoArray([])).toThrow('possui valor mínimo');
    });

    test('inverso de zero deve lançar erro', () => {
      expect(() => inverso(0)).toThrow('inverter o número zero');
    });

    test('medianaArray deve lançar erro para array vazio', () => {
      expect(() => medianaArray([])).toThrow('possui mediana');
    });
  });

  describe('arrays vazios', () => {
    test('mediaArray de array vazio deve ser 0', () => {
      expect(mediaArray([])).toBe(0);
    });

    test('produtoArray de array vazio deve ser 1', () => {
      expect(produtoArray([])).toBe(1);
    });
  });

  describe('paridade', () => {
    test('isPar deve retornar false para número ímpar', () => {
      expect(isPar(7)).toBe(false);
    });

    test('isImpar deve retornar false para número par', () => {
      expect(isImpar(8)).toBe(false);
    });
  });

  describe('isPrimo', () => {
    test('1 não é primo', () => {
      expect(isPrimo(1)).toBe(false);
    });

    test('2 é primo', () => {
      expect(isPrimo(2)).toBe(true);
    });

    test('4 não é primo', () => {
      expect(isPrimo(4)).toBe(false);
    });

    test('9 não é primo', () => {
      expect(isPrimo(9)).toBe(false);
    });
  });

  describe('clamp', () => {
    test('deve devolver o mínimo quando o valor está abaixo', () => {
      expect(clamp(-5, 0, 10)).toBe(0);
    });

    test('deve devolver o máximo quando o valor está acima', () => {
      expect(clamp(15, 0, 10)).toBe(10);
    });
  });

  describe('divisibilidade, conversões e comparações', () => {
    test('isDivisivel deve retornar false quando há resto', () => {
      expect(isDivisivel(10, 3)).toBe(false);
    });

    test('celsiusParaFahrenheit de 100 deve ser 212', () => {
      expect(celsiusParaFahrenheit(100)).toBe(212);
    });

    test('fahrenheitParaCelsius de 212 deve ser 100', () => {
      expect(fahrenheitParaCelsius(212)).toBe(100);
    });

    test('isMaiorQue deve retornar false quando o primeiro é menor', () => {
      expect(isMaiorQue(5, 10)).toBe(false);
    });

    test('isMaiorQue deve retornar false para valores iguais', () => {
      expect(isMaiorQue(5, 5)).toBe(false);
    });

    test('isMenorQue deve retornar false quando o primeiro é maior', () => {
      expect(isMenorQue(10, 5)).toBe(false);
    });

    test('isMenorQue deve retornar false para valores iguais', () => {
      expect(isMenorQue(5, 5)).toBe(false);
    });

    test('isEqual deve retornar false para valores diferentes', () => {
      expect(isEqual(7, 8)).toBe(false);
    });
  });

  describe('medianaArray', () => {
    test('deve ordenar o array antes de achar a mediana (ímpar desordenado)', () => {
      expect(medianaArray([3, 1, 2])).toBe(2);
    });

    test('deve ordenar números de forma numérica e não alfabética', () => {
      expect(medianaArray([10, 9, 1])).toBe(9);
    });

    test('deve calcular a média dos dois centrais em array par', () => {
      expect(medianaArray([4, 1, 3, 2])).toBe(2.5);
    });
  });
});
