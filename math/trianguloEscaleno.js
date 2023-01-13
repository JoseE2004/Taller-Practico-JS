const calcularAlturaTrianguloEscaleno = (ladoBase, lado2, lado3) => {
    const semiperimetro = (ladoBase + lado2 + lado3) / 2;
    return {
      altura: (2 / ladoBase) * Math.sqrt(semiperimetro *
            (semiperimetro - ladoBase) *
            (semiperimetro - lado2) *
            (semiperimetro - lado3)
        ),
    };
  };

  //otra forma

  console.group('TrianguloEscaleno');

function calcularTrianguloEscaleno(a, b, c) {
    const Semiperimetro = (a + b + c ) /2 ;

    if (a == b && a == c ) {
        console.warn('Este no es un triangulo escaleno.')
    }
    else {
        H = ((2/a) * (Math.sqrt(Semiperimetro * (Semiperimetro - a) *(Semiperimetro - b) * (Semiperimetro - c))));
        console.log('La altura "H" = ' + H) ;
    }
}


console.groupEnd('TrianguloEscaleno');