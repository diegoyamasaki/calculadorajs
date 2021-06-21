describe('Suite de testes de multiplicação', () => {
    var Calculadora = require("../../src/calculadora")

    it('deve retornar 6 para 2 e 3', () => {
        expect(Calculadora.multiplicar(2, 3)).toEqual(6);
    });

    it('deve retornar 6 para 2 e 3 em formato texto', () => {
        expect(Calculadora.multiplicar("2", "3")).toEqual(6);
    });

    it('deve retornar 4.5 para 1.5 e 3 em formato texto', () => {
        expect(Calculadora.multiplicar(1.5, 3)).toEqual(4.5);
    });

    it('deve retornar 0 para 1 inválido', () => {
        expect(Calculadora.multiplicar(undefined, 4)).toEqual(0);
    });

    it('deve retornar 0 para 2 inválido', () => {
        expect(Calculadora.multiplicar(4, undefined)).toEqual(0);
    });
    
});