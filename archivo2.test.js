// Alejandro Montero Blas
const {
    tienenMismaLongitud,
            sonIguales,
            menosQueNoventa,
            mayorQueCincuenta,
            divide,
            multiplica,
            obtenerResto,
            esPar,
            esImpar,
            elevar,
            redondearNumero,
            redondearHaciaArriba,
            numeroRandom,
            esPositivo,
            combinarNombres,
            obtenerSaludo,
            obtenerAreaRectangulo,
            retornarPerimetro,
            deEuroAdolar,
}=  require("./index2.js")

describe('multiplica(x,y)', function(){
    it("Deberia devolver la multiplicacion de x*y", function(){
        expect(multiplica(5, 8)).toBe(40);
        expect(multiplica(2, 3)).toBe(6);
    });
});
describe('divide(x,y)', function(){
    it("Deberia devolver la multiplicacion de x/y", function(){
        expect(divide(10,2 )).toBe(5);
        expect(divide(240,2 )).toBe(120);
    });
});
describe('sonIguales(x,y)', function(){
    it("Deberia devolver la sonIguales de x==y", function(){
        expect(sonIguales(4, 8)).toBe(false);
        expect(sonIguales(3, 3)).toBe(true);
    });
});
describe('tienenMismaLongitud(str1,str2)', function(){
    it("Deberia devolver la misma longitud de str1==str2", function(){
        expect(tienenMismaLongitud("alejandro","dominike")).toBe(false);
        expect(tienenMismaLongitud("hola","cual")).toBe(true);
    });
});
describe('menosQueNoventa(num)', function(){
    it("Deberia devolver que num < 90", function(){
        expect(menosQueNoventa(100)).toBe(false);
        expect(menosQueNoventa(55)).toBe(true);
    });
});
describe('mayorQueCincuenta(num)', function(){
    it("Deberia devolver que num > 50", function(){
        expect(mayorQueCincuenta(40)).toBe(false);
        expect(mayorQueCincuenta(55)).toBe(true);
    });
});
describe('obtenerResto(x,y)', function(){
    it("Deberia devolver el resto de x % y", function(){
        expect(obtenerResto(15,3)).toBe(0);
        expect(obtenerResto(21,5)).toBe(1);
    });
});
describe('esPar(num)', function(){
    it("Deberia devolver que num % 2 == 0  es par", function(){
        expect(esPar(100)).toBe(true);
        expect(esPar(55)).toBe(false);
    });
});
describe('esImpar(num)', function(){
    it("Deberia devolver que num % 2 == 1  es impar", function(){
        expect(esImpar(100)).toBe(false);
        expect(esImpar(55)).toBe(true);
    });
});
describe('elevar(num,exponent)', function(){
    it("Devuelve el valor de num elevado al exponente dado en exponent", function(){
        expect(elevar(2,5)).toBe(32);
        expect(elevar(8,3)).toBe(512);
    });
});
describe('redondearNumero(num)', function(){
    it("Devuelve el valor de num redodndeado", function(){
        expect(redondearNumero(20.49)).toBe(20);
        expect(redondearNumero(20.5)).toBe(21);
    });
});
describe('redondearHaciaArriba(num)', function(){
    it("Devuelve el valor de num redondeado hacia arriba", function(){
        expect(redondearHaciaArriba(.95)).toBe(1);
        expect(redondearHaciaArriba(4)).toBe(4);
    });
});
describe('numeroRandom()', function(){
    it("Devuelve el valor de num sea random entre 0 y 1", function(){
        expect(typeof numeroRandom()).toBe('number');
        expect(numeroRandom()).toBeGreaterThanOrEqual(0);
        expect(numeroRandom()).toBeLessThan(1);
    });
});
describe('esPositivo(numero)', function(){
    it("Devuelve el valor de numero sea positivo", function(){
        expect(esPositivo(20)).toBe(1);
        expect(esPositivo(-5)).toBe(-1);
        expect(esPositivo(0)).toBe(0);
    });
});
describe('combinarNombres(nombre,apellido)', function(){
    it("Devuelve el nombre y apellido combinados", function(){
        expect(combinarNombres("Soy", "Monfortiano")).toBe("SoyMonfortiano");
    });
});
describe('obtenerSaludo(nombre)', function(){
    it("Devuelve el Saludo ", function(){
        expect(obtenerSaludo("Alejandro")).toBe("HolaAlejandro!");
    });
});
describe('obtenerAreaRectangulo(alto,ancho)', function(){
    it("Devuelve el valor del area del rectangulo", function(){
        expect(obtenerAreaRectangulo(4,12)).toBe(48);
    });
});
describe('retornarPerimetro(lado)', function(){
    it("Devuelve el valor del perimetro del cuadrado", function(){
        expect(retornarPerimetro(8)).toBe(32);
    });
});
describe('deEuroAdolar(euro)', function(){
    it("Devuelve el valor del euro a dolar", function(){
        expect(deEuroAdolar(50)).toBe(60);
    });
});