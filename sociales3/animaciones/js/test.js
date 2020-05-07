


window.onload = function (e) {
    var fr1 = new fraccion();
    fr1.Random(1, 15);
//    console.log(fr1);
//    console.log(fr1.entero);
//    console.log(fr1.numerador);
//    console.log(fr1.denominador);
    fr1.Show('1');
    fr1.ShowSimple('2')
    console.log(fr1.toDecimal())


}

