//objeto que representa una fraccion

function aleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + parseInt(min));
}


function fraccion() {
    this.numerador = 0;
    this.denominador = 0;
    this.signo = '+';
    this.entero = 0;
}

fraccion.prototype.Init = function (entero, numerador, denominador, signo) {
    this.numerador = numerador;
    this.denominador = denominador;
    this.entero = entero;
    this.signo = signo;
}
fraccion.prototype.Random = function (min, max) {
    this.RandomPropia(min, max);
    this.entero = Math.abs(aleatorio(min, max));
    this.signo = (Math.abs(aleatorio(0, 1)) == 0) ? '-' : '+';
}
fraccion.prototype.RandomPropia = function (min, max) {

    denom = Math.abs(aleatorio(min, max));
    if (denom == 1) {
        denom++;
    }
    this.denominador = denom;
    var value = Math.abs(aleatorio(min, max));
    if (value > this.denominador) {
        value = value - this.denominador;
    }
    if (value == this.denominador) {
        value = value - 1;
    }
    this.numerador = value;
    this.signo = (Math.abs(aleatorio(0, 1)) == 0) ? '-' : '+';
}
fraccion.prototype.RandomImpropia = function (min, max) {

    //modificar inpropia

    this.numerador = Math.abs(aleatorio(min, max));
    var value = aleatorio(min, max);

    if (Math.abs(value) < Math.abs(this.numerador)) {
        value = value + this.denominador;
    }
    if (Math.abs(value) == 1 || value == 0 || value == this.numerador) {
        value++;
    }

    this.denominador = value;
    this.signo = (Math.abs(aleatorio(0, 1)) == 0) ? '-' : '+';
}

fraccion.prototype.Show = function (elementID) {
    var content = '';
    if (this.entero != 0) {
        content = '<span class="entero">' + this.entero + '</span>';
    }
    content += '<Sup class="top">' + this.numerador + '</sup>';
    content += ' <span class="barra">/</span>';
    content += ' <sub class="fondo">' + this.denominador + '</sub>';
    $("#" + elementID).html(content);
}
fraccion.prototype.ShowDecimal = function (elementID) {
    var content = '';
    var decimal = this.toDecimal().toFixed(2);
    $("#" + elementID).html(decimal);
}


fraccion.prototype.ShowSimple = function (elementID) {

    var simple = this.toSimple();
    var content = '';
    content += '<sup class="top">' + simple.numerador + '</sup>';
    content += ' <span class="barra">/</span>';
    content += ' <sub class="fondo">' + simple.denominador + '</sub>';
    $("#" + elementID).html(content);
}
fraccion.prototype.ShowSimpleSigno = function (elementID) {

    var simple = this.toSimple();
    var content = '';
    var signo = (simple.signo == '-') ? '-' : '';
    content += '<sup class="top">' + signo + simple.numerador + '</sup>';
    content += ' <span class="barra">/</span>';
    content += ' <sub class="fondo">' + simple.denominador + '</sub>';
    $("#" + elementID).html(content);
}

fraccion.prototype.toSimple = function () {
    frac = new Object();
    var cant = this.numerador;
    if (this.entero != 0) {
        cant = (this.entero * this.denominador) + this.numerador;
    }
    frac.numerador = cant;
    frac.denominador = this.denominador;
    frac.signo = this.signo;
    return frac;
}
fraccion.prototype.toDecimal = function () {
    var simple = this.toSimple();
    var decimal = simple.numerador / simple.denominador;
    return decimal;
}
fraccion.prototype.Multiplica = function (value) {
    this.numerador = this.numerador * value;
    this.denominador = this.denominador * value;
    this.entero = this.entero * value;
}
fraccion.prototype.Asigna = function (frac) {
    this.entero = frac.entero;
    this.numerador = frac.numerador;
    this.denominador = frac.denominador;
    this.signo = frac.signo;
}


