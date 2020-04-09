var titulos = "evaluacion";
numero_pagina(258);
var cor = 0;
cont = 0,
    ejer = 1,
    itemsT = 10,
    inc = 0,
    calificacion = 10;

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;
var tpre6 = 0;
var tpre7 = 0;
var tpre8 = 0;
var tpre9 = 0;
var tpre10 = 0;

// #region Pregunta1

function pregunta1() {
    var cor = 0;
    var p1vec1 = ['5,10', '5,25', '5,35', '20,10', '20,25', '20,35', '30,10', '30,25', '30,35'];
    var p1res1 = [];
    for (var i = 0; i < 9; i++) {
        p1res1.push($('#p1dcon' + (i + 1)).val() +
            ',' + $('#p1dco' + (i + 1)).val());
    }
    for (var i = 0; i < 9; i++) {
        var p1cont1 = 0;
        for (var j = 0; j < 9; j++) {
            if (p1res1[i] == p1vec1[j]) {
                p1cont1++;
                p1vec1[j] == 'a';
            } else { p1cont1; }
        }
        if (p1cont1 == '1') {
            cor++;
            f_ok($('#p1dcon' + (i + 1)));
            f_ok($('#p1dco' + (i + 1)));
        } else {
            f_no($('#p1dcon' + (i + 1)));
            f_no($('#p1dco' +
                (i + 1)));
        }
    }

    var p2vec1 = ['5,10', '20,25', '30,3'];
    var p2res1 = [];
    for (var i = 0; i < 3; i++) {
        p2res1.push($('#p2dcon' + (i + 1)).val() +
            ',' + $('#p2dco' + (i + 1)).val());
    }
    for (var i = 0; i < 3; i++) {
        var p2cont1 = 0;
        for (var j = 0; j < 3; j++) {
            if (p2res1[i] == p2vec1[j]) {
                p2cont1++;
                p2vec1[j] == 'a';
            } else { p2cont1; }
        }
        if (p2cont1 == '1') {
            cor++;
            f_ok($('#p2dcon' + (i + 1)));
            f_ok($('#p2dco' + (i + 1)));
        } else {
            f_no($('#p2dcon' + (i + 1)));
            f_no($('#p2dco' +
                (i + 1)));
        }
    }
    var res = ((cor * 1) / 12);
    tpre1 = parseFloat(res);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2

p2vec1 = [
    '<li class="col-sm-3">                            147 ÷ 7<br><br>                            <div class="table-responsive">                                <table class="table-bordered">                                    <tr>                                        <td>1</td>                                        <td>4</td>                                        <td>7</td>                                        <td></td>                                        <td></td>                                        <td style="border-left: 2px solid #000000; border-bottom:2px solid #000000;">7</td>                                        <td style="border-bottom:2px solid #000000;"></td>                                        <td style="border-bottom:2px solid #000000;"></td>                                        <td style="border-bottom:2px solid #000000;"></td>                                    </tr>                                    <tr>                                        <td>  </td>                                        <td> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="0"> </td>                                        <td> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="7"></td>                                        <td> </td>                                        <td></td>                                        <td style="border-left: 2px solid #000000;"> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="2"> </td>                                        <td> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="1"> </td>                                        <td>  </td>                                        <td> </td>                                        <td></td>                                    </tr>                                    <tr>                                        <td></td>                                        <td></td>                                        <td> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="0"> </td>                                        <td> </td>                                        <td> </td>                                        <td style="border-left: 2px solid #000000;"></td>                                        <td></td>                                        <td></td>                                        <td></td>                                    </tr>                                    <tr>                                        <td></td>                                        <td> </td>                                        <td>  </td>                                        <td> </td>                                        <td> </td>                                        <td style="border-left: 2px solid #000000;"></td>                                        <td></td>                                        <td></td>                                        <td></td>                                    </tr>                                </table>                            </div>                        </li>',
    '<li class="col-sm-3">                            783 ÷ 3<br><br>                            <div class="table-responsive">                                <table class="table-bordered">                                    <tr>                                        <td>7</td>                                        <td>8</td>                                        <td>3</td>                                        <td></td>                                        <td></td>                                        <td style="border-left: 2px solid #000000; border-bottom:2px solid #000000;">3</td>                                        <td style="border-bottom:2px solid #000000;"></td>                                        <td style="border-bottom:2px solid #000000;"></td>                                        <td style="border-bottom:2px solid #000000;"></td>                                    </tr>                                    <tr>                                        <td>  <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="1"></td>                                        <td> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="8"> </td>                                        <td> </td>                                        <td> </td>                                        <td></td>                                        <td style="border-left: 2px solid #000000;"> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="2"> </td>                                        <td> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="6"> </td>                                        <td> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="1"> </td>                                        <td> </td>                                        <td></td>                                    </tr>                                    <tr>                                        <td></td>                                        <td><input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="0"></td>                                        <td> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="3"> </td>                                        <td> </td>                                        <td> </td>                                        <td style="border-left: 2px solid #000000;"></td>                                        <td></td>                                        <td></td>                                        <td></td>                                    </tr>                                    <tr>                                        <td></td>                                        <td> </td>                                        <td> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="0"> </td>                                        <td> </td>                                        <td> </td>                                        <td style="border-left: 2px solid #000000;"></td>                                        <td></td>                                        <td></td>                                        <td></td>                                    </tr>                                </table>                            </div>                        </li>',
    '<li class="col-sm-3">                            976 ÷ 4<br><br>                            <div class="table-responsive">                                <table class="table-bordered">                                    <tr>                                        <td>9</td>                                        <td>7</td>                                        <td>6</td>                                        <td></td>                                        <td></td>                                        <td style="border-left: 2px solid #000000; border-bottom:2px solid #000000;">4</td>                                        <td style="border-bottom:2px solid #000000;"></td>                                        <td style="border-bottom:2px solid #000000;"></td>                                        <td style="border-bottom:2px solid #000000;"></td>                                    </tr>                                    <tr>                                        <td>  <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="1"></td>                                        <td> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="7"> </td>                                        <td> </td>                                        <td> </td>                                        <td></td>                                        <td style="border-left: 2px solid #000000;"> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="2"> </td>                                        <td> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="4"> </td>                                        <td> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="4"> </td>                                        <td> </td>                                        <td></td>                                    </tr>                                    <tr>                                        <td></td>                                        <td><input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="1"></td>                                        <td> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="6"> </td>                                        <td> </td>                                        <td> </td>                                        <td style="border-left: 2px solid #000000;"></td>                                        <td></td>                                        <td></td>                                        <td></td>                                    </tr>                                    <tr>                                        <td></td>                                        <td> </td>                                        <td> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="0"> </td>                                        <td> </td>                                        <td> </td>                                        <td style="border-left: 2px solid #000000;"></td>                                        <td></td>                                        <td></td>                                        <td></td>                                    </tr>                                </table>                            </div>                        </li>',
    '<li class="col-sm-3">                            498 ÷ 6<br><br>                            <div class="table-responsive">                                <table class="table-bordered">                                    <tr>                                        <td>4</td>                                        <td>9</td>                                        <td>8</td>                                        <td></td>                                        <td></td>                                        <td style="border-left: 2px solid #000000; border-bottom:2px solid #000000;">6</td>                                        <td style="border-bottom:2px solid #000000;"></td>                                        <td style="border-bottom:2px solid #000000;"></td>                                        <td style="border-bottom:2px solid #000000;"></td>                                    </tr>                                    <tr>                                        <td>  </td>                                        <td> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="1"> </td>                                        <td> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="8"></td>                                        <td> </td>                                        <td></td>                                        <td style="border-left: 2px solid #000000;"> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="8"> </td>                                        <td> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="3"> </td>                                        <td>  </td>                                        <td> </td>                                        <td></td>                                    </tr>                                    <tr>                                        <td></td>                                        <td></td>                                        <td> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="0"> </td>                                        <td> </td>                                        <td> </td>                                        <td style="border-left: 2px solid #000000;"></td>                                        <td></td>                                        <td></td>                                        <td></td>                                    </tr>                                    <tr>                                        <td></td>                                        <td> </td>                                        <td>  </td>                                        <td> </td>                                        <td> </td>                                        <td style="border-left: 2px solid #000000;"></td>                                        <td></td>                                        <td></td>                                        <td></td>                                    </tr>                                </table>                            </div>                        </li>'
];
p2vec1.sort(f_randomico);
$('#li2').html(p2vec1);

function pregunta2() {
    var respuestas = document.getElementsByClassName("respuestas2");
    var soluciones = document.getElementsByClassName("solucion2");
    var valor = valor_pregunta(respuestas);
    var nota = 0;
    for (var i = 0; i < respuestas.length; i++) {
        if (
            verificar_contenido(
                respuestas[i].value.toLowerCase(),
                soluciones[i].value.toLowerCase().split("*")
            )
        ) {
            respuestas[i].classList.add("valid");
            respuestas[i].classList.remove("no-valid");
            nota += valor;
        } else {
            respuestas[i].classList.add("no-valid");
            respuestas[i].classList.remove("valid");
        }
    }
    tpre2 = ((nota / 10) * 1);
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Pregunta3
var p3vec1 = [
    ['84 × 4', 0],
    ['70 × 18', 1],
    ['90 × 30', 2],
    ['68 × 9', 3]

];
var p3vec2 = [
    ['<div style=" border: 2px solid #42BB9B; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="1 pint1">320</div>',
        '<div style=" border: 2px solid #42BB9B; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="1 pint2">336</div>',
        '<div style=" border: 2px solid #42BB9B; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="1 pint3">346</div>'

    ],
    ['<div style=" border: 2px solid #42BB9B; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="2 pint11">1100</div>',
        '<div style=" border: 2px solid #42BB9B; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="2 pint12">1200</div>',
        '<div style=" border: 2px solid #42BB9B; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="2 pint13">1260</div>'
    ],
    ['<div style=" border: 2px solid #42BB9B; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="3 pint21">270</div>',
        '<div style=" border: 2px solid #42BB9B; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="3 pint22">2700</div>',
        '<div style=" border: 2px solid #42BB9B; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="3 pint23">27</div>'
    ],
    ['<div style=" border: 2px solid #42BB9B; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="4 pint31">512</div>',
        '<div style=" border: 2px solid #42BB9B; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="4 pint32">540</div>',
        '<div style=" border: 2px solid #42BB9B; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="4 pint33">612</div>'
    ]
];

p3vec1.sort(f_randomico);
for (var i = 0; i < 4; i++) {
    $('#p3im' + (i + 1)).text(p3vec1[i][0]);
    p3vec2[i].sort(f_randomico);
}
for (var i = 0; i < 4; i++) {
    $('#p3cim' + (i + 1)).html(p3vec2[p3vec1[i][1]]);
}

$('.1').click(function() {
    switch ($(this).attr('class')) {
        case '1 pint1':
            $('.pint1').addClass('pinta');
            $('.pint2').removeClass('pinta');
            $('.pint3').removeClass('pinta');
            break;
        case '1 pint2':
            $('.pint2').addClass('pinta');
            $('.pint1').removeClass('pinta');
            $('.pint3').removeClass('pinta');
            break;
        case '1 pint3':
            $('.pint3').addClass('pinta');
            $('.pint1').removeClass('pinta');
            $('.pint2').removeClass('pinta');
            break;
    }
});
$('.2').click(function() {
    switch ($(this).attr('class')) {
        case '2 pint11':
            $('.pint11').addClass('pinta');
            $('.pint12').removeClass('pinta');
            $('.pint13').removeClass('pinta');

            break;
        case '2 pint12':
            $('.pint12').addClass('pinta');
            $('.pint11').removeClass('pinta');
            $('.pint13').removeClass('pinta');
            break;
        case '2 pint13':
            $('.pint13').addClass('pinta');
            $('.pint11').removeClass('pinta');
            $('.pint12').removeClass('pinta');
            break;
    }
});
$('.3').click(function() {
    switch ($(this).attr('class')) {
        case '3 pint21':
            $('.pint21').addClass('pinta');
            $('.pint22').removeClass('pinta');
            $('.pint23').removeClass('pinta');

            break;
        case '3 pint22':
            $('.pint22').addClass('pinta');
            $('.pint21').removeClass('pinta');
            $('.pint23').removeClass('pinta');
            break;
        case '3 pint23':
            $('.pint23').addClass('pinta');
            $('.pint21').removeClass('pinta');
            $('.pint22').removeClass('pinta');
            break;
    }
});
$('.4').click(function() {
    switch ($(this).attr('class')) {
        case '4 pint31':
            $('.pint31').addClass('pinta');
            $('.pint32').removeClass('pinta');
            $('.pint33').removeClass('pinta');
            break;
        case '4 pint32':
            $('.pint32').addClass('pinta');
            $('.pint31').removeClass('pinta');
            $('.pint33').removeClass('pinta');
            break;
        case '4 pint33':
            $('.pint33').addClass('pinta');
            $('.pint31').removeClass('pinta');
            $('.pint32').removeClass('pinta');
            break;
    }
});

function pregunta3() {
    var p3cont1 = 0;
    var p3vec3 = ['336', '1260', '2700', '612'];
    for (var i = 0; i < 4; i++) {
        var p3cim1 = $('#p3cim' + (i + 1) + ' .pinta').html();
        if (!p3cim1) {
            p3cont1;
            f_no($('.' + (p3vec1[i][1] + 1)));
        } else {
            if (p3cim1 == p3vec3[p3vec1[i][1]]) {
                p3cont1++;
                f_ok($('#p3cim' + (i + 1) + ' .pinta'));
                $('#p3cim' + (i + 1) + ' .pinta').removeClass('pinta');
            } else {
                p3cont1;
                f_no($('#p3cim' + (i + 1) + ' .pinta'));
                $('#p3cim' + (i + 1) + ' .pinta').removeClass('pinta');
            }
        }
    }
    tpre3 = ((p3cont1 * 1) / 4);
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Pregunta4
p4vec1 = [
    '<li class="col-sm-3">                            <div class="table-responsive">                                <table class="table-bordered">                                    <tr>                                        <td>7</td>                                        <td>5</td>                                        <td>3</td>                                        <td></td>                                        <td></td>                                        <td style="border-left: 2px solid #000000; border-bottom:2px solid #000000;">6</td>                                        <td style="border-bottom:2px solid #000000;"></td>                                        <td style="border-bottom:2px solid #000000;"></td>                                        <td style="border-bottom:2px solid #000000;"></td>                                    </tr>                                    <tr>                                        <td> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="1"></td>                                        <td> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="5"> </td>                                        <td> </td>                                        <td> </td>                                        <td></td>                                        <td style="border-left: 2px solid #000000;"> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="1"> </td>                                        <td> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="2"> </td>                                        <td> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="5"></td>                                        <td> </td>                                        <td></td>                                    </tr>                                    <tr>                                        <td></td>                                        <td><input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="3"></td>                                        <td> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="3"> </td>                                        <td> </td>                                        <td> </td>                                        <td style="border-left: 2px solid #000000;"></td>                                        <td></td>                                        <td></td>                                        <td></td>                                    </tr>                                    <tr>                                        <td></td>                                        <td> </td>                                        <td> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="3"></td>                                        <td> </td>                                        <td> </td>                                        <td style="border-left: 2px solid #000000;"></td>                                        <td></td>                                        <td></td>                                        <td></td>                                    </tr>                                </table><br>                            </div>                        </li>',
    '<li class="col-sm-3">                            <div class="table-responsive">                                <table class="table-bordered">                                    <tr>                                        <td>8</td>                                        <td>6</td>                                        <td>5</td>                                        <td></td>                                        <td></td>                                        <td style="border-left: 2px solid #000000; border-bottom:2px solid #000000;">5</td>                                        <td style="border-bottom:2px solid #000000;"></td>                                        <td style="border-bottom:2px solid #000000;"></td>                                        <td style="border-bottom:2px solid #000000;"></td>                                    </tr>                                    <tr>                                        <td> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="3"></td>                                        <td> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="6"> </td>                                        <td> </td>                                        <td> </td>                                        <td></td>                                        <td style="border-left: 2px solid #000000;"> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="2"> </td>                                        <td> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="1"> </td>                                        <td> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="6"></td>                                        <td> </td>                                        <td></td>                                    </tr>                                    <tr>                                        <td></td>                                        <td><input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="1"></td>                                        <td> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="5"> </td>                                        <td> </td>                                        <td> </td>                                        <td style="border-left: 2px solid #000000;"></td>                                        <td></td>                                        <td></td>                                        <td></td>                                    </tr>                                    <tr>                                        <td></td>                                        <td> </td>                                        <td> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="0"></td>                                        <td> </td>                                        <td> </td>                                        <td style="border-left: 2px solid #000000;"></td>                                        <td></td>                                        <td></td>                                        <td></td>                                    </tr>                                </table><br>                            </div>                        </li>',
    '<li class="col-sm-3">                            <div class="table-responsive">                                <table class="table-bordered">                                    <tr>                                        <td>9</td>                                        <td>7</td>                                        <td>4</td>                                        <td></td>                                        <td></td>                                        <td style="border-left: 2px solid #000000; border-bottom:2px solid #000000;">6</td>                                        <td style="border-bottom:2px solid #000000;"></td>                                        <td style="border-bottom:2px solid #000000;"></td>                                        <td style="border-bottom:2px solid #000000;"></td>                                    </tr>                                    <tr>                                        <td> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="1"></td>                                        <td> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="7"> </td>                                        <td> </td>                                        <td> </td>                                        <td></td>                                        <td style="border-left: 2px solid #000000;"> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="1"> </td>                                        <td> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="2"> </td>                                        <td> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="1"></td>                                        <td> </td>                                        <td></td>                                    </tr>                                    <tr>                                        <td></td>                                        <td><input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="1"></td>                                        <td> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="4"> </td>                                        <td> </td>                                        <td> </td>                                        <td style="border-left: 2px solid #000000;"></td>                                        <td></td>                                        <td></td>                                        <td></td>                                    </tr>                                    <tr>                                        <td></td>                                        <td> </td>                                        <td> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="6"></td>                                        <td> </td>                                        <td> </td>                                        <td style="border-left: 2px solid #000000;"></td>                                        <td></td>                                        <td></td>                                        <td></td>                                    </tr>                                </table><br>                            </div>                        </li>',
    '<li class="col-sm-3">                            <div class="table-responsive">                                <table class="table-bordered">                                    <tr>                                        <td>3</td>                                        <td>8</td>                                        <td>0</td>                                        <td></td>                                        <td></td>                                        <td style="border-left: 2px solid #000000; border-bottom:2px solid #000000;">4</td>                                        <td style="border-bottom:2px solid #000000;"></td>                                        <td style="border-bottom:2px solid #000000;"></td>                                        <td style="border-bottom:2px solid #000000;"></td>                                    </tr>                                    <tr>                                        <td> </td>                                        <td> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="2"> </td>                                        <td> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="0"></td>                                        <td> </td>                                        <td></td>                                        <td style="border-left: 2px solid #000000;"> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="9"> </td>                                        <td> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="5"> </td>                                        <td> </td>                                        <td> </td>                                        <td></td>                                    </tr>                                    <tr>                                        <td></td>                                        <td> </td>                                        <td> <input maxlength="1" type="text" size="1" style="width:25px;text-align: center;" class="soloNumeros border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="0"></td>                                        <td> </td>                                        <td> </td>                                        <td style="border-left: 2px solid #000000;"></td>                                        <td></td>                                        <td></td>                                        <td></td>                                    </tr>                                </table><br>                            </div>                        </li>'
    ];
p4vec1.sort(f_randomico);
$('#li4').html(p4vec1);
function pregunta4() {
    var respuestas = document.getElementsByClassName("respuestas4");
    var soluciones = document.getElementsByClassName("solucion4");
    var valor = valor_pregunta(respuestas);
    var nota = 0;
    for (var i = 0; i < respuestas.length; i++) {
        if (
            verificar_contenido(
                respuestas[i].value.toLowerCase(),
                soluciones[i].value.toLowerCase().split("*")
            )
        ) {
            respuestas[i].classList.add("valid");
            respuestas[i].classList.remove("no-valid");
            nota += valor;
        } else {
            respuestas[i].classList.add("no-valid");
            respuestas[i].classList.remove("valid");
        }
    }
    tpre4 = ((nota / 10) * 1);
    $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion

// #region Pregunta5
p5vec1 = [
    '<li class="col-sm-4">                            <div class="table-responsive">                                235 ÷ 5 = <input maxlength="5" type="text" size="1" style="width: 100px;text-align: center;border-radius:10px;border: solid 2px #009CDE;" class="soloNumeros border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="47"> <br><br>                            </div>                        </li>',
    '<li class="col-sm-4">                            <div class="table-responsive">                                3 × 2000 = <input maxlength="5" type="text" size="1" style="width: 100px;text-align: center;border-radius:10px;border: solid 2px #009CDE;" class="soloNumeros border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="6000"> <br><br>                            </div>                        </li>',
    '<li class="col-sm-4">                            <div class="table-responsive">                                40 × 2 = <input maxlength="5" type="text" size="1" style="width: 100px;text-align: center;border-radius:10px;border: solid 2px #009CDE;" class="soloNumeros border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="80"> <br><br>                            </div>                        </li>',
    '<li class="col-sm-4">                            <div class="table-responsive">                                810 ÷ 9 = <input maxlength="5" type="text" size="1" style="width: 100px;text-align: center;border-radius:10px;border: solid 2px #009CDE;" class="soloNumeros border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="90"> <br><br>                            </div>                        </li>',
    '<li class="col-sm-4">                            <div class="table-responsive">                                345 ÷ 5 = <input maxlength="5" type="text" size="1" style="width: 100px;text-align: center;border-radius:10px;border: solid 2px #009CDE;" class="soloNumeros border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="69"> <br><br>                            </div>                        </li>',
    '<li class="col-sm-4">                            <div class="table-responsive">                                5 × 90 = <input maxlength="5" type="text" size="1" style="width: 100px;text-align: center;border-radius:10px;border: solid 2px #009CDE;" class="soloNumeros border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="450"> <br><br>                            </div>                        </li>',
    '<li class="col-sm-4">                            <div class="table-responsive">                                360 ÷ 6 = <input maxlength="5" type="text" size="1" style="width: 100px;text-align: center;border-radius:10px;border: solid 2px #009CDE;" class="soloNumeros border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="60"> <br><br>                            </div>                        </li>',
    '<li class="col-sm-4">                            <div class="table-responsive">                                4 × 400 = <input maxlength="5" type="text" size="1" style="width: 100px;text-align: center;border-radius:10px;border: solid 2px #009CDE;" class="soloNumeros border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="1600"> <br><br>                            </div>                        </li>',
    '<li class="col-sm-4">                            <div class="table-responsive">                                300 ÷ 5 = <input maxlength="5" type="text" size="1" style="width: 100px;text-align: center;border-radius:10px;border: solid 2px #009CDE;" class="soloNumeros border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="60"> <br><br>                            </div>                        </li>'
    ];
p5vec1.sort(f_randomico);
$('#li5').html(p5vec1);

function pregunta5() {
    var respuestas = document.getElementsByClassName("respuestas5");
    var soluciones = document.getElementsByClassName("solucion5");
    var valor = valor_pregunta(respuestas);
    var nota = 0;
    for (var i = 0; i < respuestas.length; i++) {
        if (
            verificar_contenido(
                respuestas[i].value.toLowerCase(),
                soluciones[i].value.toLowerCase().split("*")
            )
        ) {
            respuestas[i].classList.add("valid");
            respuestas[i].classList.remove("no-valid");
            nota += valor;
        } else {
            respuestas[i].classList.add("no-valid");
            respuestas[i].classList.remove("valid");
        }
    }
    tpre5 = ((nota / 10) * 1);
    $("#pre5a").val(parseFloat(tpre5).toFixed(2));
}
// #endregion

// #region Pregunta6


function pregunta6() {
    var respuestas = document.getElementsByClassName("respuestas6");
    var soluciones = document.getElementsByClassName("solucion6");
    var valor = valor_pregunta(respuestas);
    var nota = 0;
    for (var i = 0; i < respuestas.length; i++) {
        if (
            verificar_contenido(
                respuestas[i].value.toLowerCase(),
                soluciones[i].value.toLowerCase().split("*")
            )
        ) {
            respuestas[i].classList.add("valid");
            respuestas[i].classList.remove("no-valid");
            nota += valor;
        } else {
            respuestas[i].classList.add("no-valid");
            respuestas[i].classList.remove("valid");
        }
    }
    tpre6 = ((nota / 10) * 1);
    $("#pre6a").val(parseFloat(tpre6).toFixed(2));
}
// #endregion

// #region Pregunta7

p7vec1 = [
    '<div class="col-sm-3 table-responsive">                        <center><img src="img/i1_p258_act7.jpg"><br><br><input maxlength="2" type="text" size="1" style="width:50px;text-align: center;border: solid 2px #0067B4;border-radius: 10px;"  class="soloNumeros border-blue respuestas7"><input type="hidden" style="color:blue" class="solucion7" value="03*3"> : <input maxlength="5" type="text" size="1" style="width:50px;text-align: center;border: solid 2px #0067B4;border-radius: 10px;" class="soloNumeros border-blue respuestas7"><input type="hidden" style="color:blue" class="solucion7" value="30"></center><br><br>                    </div>',
    '<div class="col-sm-3 table-responsive">                        <center><img src="img/i2_p258_act7.jpg"><br><br><input maxlength="2" type="text" size="1" style="width:50px;text-align: center;border: solid 2px #0067B4;border-radius: 10px;" class="soloNumeros border-blue respuestas7"><input type="hidden" style="color:blue" class="solucion7" value="06*6"> : <input maxlength="5" type="text" size="1" style="width:50px;text-align: center;border: solid 2px #0067B4;border-radius: 10px;" class="soloNumeros border-blue respuestas7"><input type="hidden" style="color:blue" class="solucion7" value="0*00"></center><br><br>                    </div>',
    '<div class="col-sm-3 table-responsive">                        <center><img src="img/i3_p258_act7.jpg"><br><br><input maxlength="2" type="text" size="1" style="width:50px;text-align: center;border: solid 2px #0067B4;border-radius: 10px;" class="soloNumeros border-blue respuestas7"><input type="hidden" style="color:blue" class="solucion7" value="11"> : <input maxlength="5" type="text" size="1" style="width:50px;text-align: center;border: solid 2px #0067B4;border-radius: 10px;" class="soloNumeros border-blue respuestas7"><input type="hidden" style="color:blue" class="solucion7" value="15"></center><br><br>                    </div>',
    '<div class="col-sm-3 table-responsive">                        <center><img src="img/i4_p258_act7.jpg"><br><br><input maxlength="2" type="text" size="1" style="width:50px;text-align: center;border: solid 2px #0067B4;border-radius: 10px;" class="soloNumeros border-blue respuestas7"><input type="hidden" style="color:blue" class="solucion7" value="02*2"> : <input maxlength="5" type="text" size="1" style="width:50px;text-align: center;border: solid 2px #0067B4;border-radius: 10px;" class="soloNumeros border-blue respuestas7"><input type="hidden" style="color:blue" class="solucion7" value="20"></center><br><br>                    </div>'
    ];
p7vec1.sort(f_randomico);
$('#li7').html(p7vec1);
function pregunta7() {
    var respuestas = document.getElementsByClassName("respuestas7");
    var soluciones = document.getElementsByClassName("solucion7");
    var valor = valor_pregunta(respuestas);
    var nota = 0;
    for (var i = 0; i < respuestas.length; i++) {
        if (
            verificar_contenido(
                respuestas[i].value.toLowerCase(),
                soluciones[i].value.toLowerCase().split("*")
            )
        ) {
            respuestas[i].classList.add("valid");
            respuestas[i].classList.remove("no-valid");
            nota += valor;
        } else {
            respuestas[i].classList.add("no-valid");
            respuestas[i].classList.remove("valid");
        }
    }
    tpre7 = ((nota / 10) * 1);
    $("#pre7a").val(parseFloat(tpre7).toFixed(2))
}
// #endregion

// #region Pregunta8
var random3 = [
    [
        '<span class="enc5" id="1">10 minutos antes de las 6</span>'
    ],
    [
        '<span class="enc5" id="2">06:50</span>'
    ],
    [
        '<span class="enc5" id="3">10 minutos antes de las 7</span>'
    ],
    [
        '<span class="enc5" id="4">50 minutos después de las 6</span>'
    ]
];

var rantres = document.getElementsByClassName("imagen3");
random3.sort(f_randomico);
for (i = 0; i < rantres.length; i++) {
    $("#" + rantres[i].id).html(
        '<span width="50px">' + random3[i][0] + "</span> "
    );
}
$(".enc5").click(function() {
    if ($(this).hasClass("subrayar")) {
        $(this).removeClass("subrayar");
    } else {
        $(this).addClass("subrayar");
    }
});
function pregunta8() {
    var respr1 = 0,
        respr2 = 0;
    var caja = $("#respuesta1 .subrayar").text();
    if (caja == "10 minutos antes de las 6") {
        respr1++;

        f_ok($("#respuesta1 .subrayar"));
        $("#respuesta1 .subrayar").removeClass("subrayar");
    } else {
        respr2++;

        f_no($("#respuesta1 .subrayar"))
        $("#respuesta1 .subrayar").removeClass("subrayar");
    }

    var total = ((respr1) * 1) / 1;
    if (total < 0) {
        total = 0;
        tpre8 = total;
    } else {
        tpre8 = total;
    }

    tpre8 = total.toFixed(2);
    $("#pre8a").val(parseFloat(tpre8).toFixed(2));
}
// #endregion


// #region Pregunta9

function pregunta9() {
    var respuestas = document.getElementsByClassName("respuestas9");
    var soluciones = document.getElementsByClassName("solucion9");
    var valor = valor_pregunta(respuestas);
    var nota = 0;
    for (var i = 0; i < respuestas.length; i++) {
        if (
            verificar_contenido(
                respuestas[i].value.toLowerCase(),
                soluciones[i].value.toLowerCase().split("*")
            )
        ) {
            respuestas[i].classList.add("valid");
            respuestas[i].classList.remove("no-valid");
            nota += valor;
        } else {
            respuestas[i].classList.add("no-valid");
            respuestas[i].classList.remove("valid");
        }
    }
    tpre9 = ((nota / 10) * 1);
    $("#pre9a").val(parseFloat(tpre9).toFixed(2))
}
// #endregion

// #region Pregunta10

function pregunta10() {
    var cor = 0;
    var p10vec1 = ['humita,leche', 'humita,café', 'humita,jugo', 'quimbolito,leche', 'quimbolito,café', 'quimbolito,jugo', 'empanada,leche', 'empanada,café', 'empanada,jugo'];
    var p10res1 = [];
    for (var i = 0; i < 9; i++) {
        p10res1.push($('#p10dcon' + (i + 1)).val() +
            ',' + $('#p10dco' + (i + 1)).val());
    }
    for (var i = 0; i < 9; i++) {
        var p10cont1 = 0;
        for (var j = 0; j < 9; j++) {
            if (p10res1[i] == p10vec1[j]) {
                p10cont1++;
                p10vec1[j] == 'a';
            } else { p10cont1; }
        }
        if (p10cont1 == '1') {
            cor++;
            f_ok($('#p10dcon' + (i + 1)));
            f_ok($('#p10dco' + (i + 1)));
        } else {
            f_no($('#p10dcon' + (i + 1)));
            f_no($('#p10dco' +
                (i + 1)));
        }
    }
    var res = ((cor * 1) / 9);
    tpre10 =
        parseFloat(res);
    $("#pre10a").val(parseFloat(tpre10).toFixed(2));
}
// #endregion



// #region Calculo Nota Final
function NotaFinal() {

    pregunta1();
    pregunta2();
    pregunta3();
    pregunta4();
    pregunta5();
    pregunta6();
    pregunta7();
    pregunta8();
    pregunta9();
    pregunta10();
    cor =
        parseFloat(tpre1) +
        parseFloat(tpre2) +
        parseFloat(tpre3) +
        parseFloat(tpre4) +
        parseFloat(tpre5) +
        parseFloat(tpre6) +
        parseFloat(tpre7) +
        parseFloat(tpre8) +
        parseFloat(tpre9) +
        parseFloat(tpre10);
    Calculo_nota();
}

// #endregion