describe('Suite~de testes de subtração', () => {
    var Calculadora = require("../../src/calculadora")
    it('deve retornar 5 para 8 e 3', () => {
        expect(Calculadora.subtrair(8, 3)).toEqual(5);
    });

    it('deve retornar 5 para 8 e 3', () => {
        expect(Calculadora.subtrair("8", "3")).toEqual(5);
    });

    it('deve retornar 4 para 5.5 e 1.5', () => {
        expect(Calculadora.subtrair(5.5, 1.5)).toEqual(4);
        expect(Calculadora.subtrair("5.5", "1.5")).toEqual(4);
    });

    it('deve retornar 0 para 1 inválido', () => {
        expect(Calculadora.subtrair(undefined, 5)).toEqual(0);
    });

    it('deve retornar 0 para 1 inválido', () => {
        expect(Calculadora.subtrair(5, undefined)).toEqual(0);
    });

    it('deve retornar 11 para 8 e -3', () => {
        expect(Calculadora.subtrair("8", "-3")).toEqual(11);
    });
});