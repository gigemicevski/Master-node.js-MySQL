const { emailValidator,absolute ,greet,getCurrencies} = require('../../helper');

describe ("absolute",() => {

    it('Should return pos if number is pos', () => {
        var result = absolute(1);
        expect(result).toBe(1);
    });
    
    it('Should return pos if number is neg', () => {
        var result = absolute(-1);
        expect(result).toBe(1);
    });
    
    it('*', () => {
        var result = absolute(0);
        expect(result).toBe(0);
    });
} )

describe("greet",() => {

    it('Should return greeting msg', () => {
        var result = greet("Gligor");
        expect(result).toBe("Welcome Gligor");
        expect(result).toContain("Gligor");

    });
    
} )

describe("getCurrencies",() => {
    it('Should return supported currencies', () => {
        var result = getCurrencies();
        expect(result).toEqual(expect.arrayContaining(["USD","EUR","AUD"]))
    });
})


