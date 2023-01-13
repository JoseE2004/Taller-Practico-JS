/* Cuadrado */
console.group('Cuadrado')
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;
function calcularCuadrado(lado){
    return{
        perimetro: lado * 4,
        area: lado * lado,
    }
}
console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado,
});
console.groupEnd('Cuadrado')


/* Triangulo */
console.group('Triangulo')
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularTriangulo(lado1, lado2, base, altura){
    return{
        perimetro: (lado1 + lado2 + base),
        area: (base * altura) / 2,
    }
}

//Forma para calcular la formula de un triagulo Isoseles
function calcularAlturaTriangulo(lado1, base){
    if (lado1 == base){
        console.warn("Este no es un triangulo isoseles")
    } else{
        // h = raizcuadrada (lado**2 - (b**2)/4)
        return Math.sqrt( (lado1 ** 2) - ( (base**2) ) /4);
    }
}

console.log({
    ladoTriangulo1,
    ladoTriangulo1,
    ladoTrianguloBase,
    alturaTriangulo,
    areaTriangulo,
});
console.groupEnd('Triangulo')


/* Circulo */
console.group('Circle')
const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1415;

const circunferencia = diametroCirculo * PI;
const areaCirculo = (radioCirculo ** 2) * PI;

console.log([
    radioCirculo,
    diametroCirculo,
    PI,
    circunferencia,
    areaCirculo,
]);
function calcularCirculo(radio){
    const diametro = radio * 2;
    const radioAlCuadrado = Math.pow(radio, 2); //Formas de hacer esto (radio * radio) (radio ** 2) (Math.pow(radio, 2))

    return{
        circunferencia: diametro * Math.PI,
        area: radioAlCuadrado * Math.PI.toFixed(4),
    }
}
console.groupEnd('Circle')