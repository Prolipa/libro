$("#n_pagina").html("254"); //impresion de pagina
var titulos = "exploro";
var cor = 0;
cont = 1,
    ejer = 1,
    itemsT = 10,
    inc = 0,
    calificacion = 10;


var tpre2 = 0;
var tpre3 = 0;
var tpre5 = 0;


p2vec1 = [
    '<div class="col-sm-3">                        p<input type="text" maxlength="1" size="1" style="width:30px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="l">umero<br><br>                    </div>',
    '<div class="col-sm-3">                        p<input type="text" maxlength="1" size="1" style="width:30px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="r">imero<br><br>                    </div>',
    '<div class="col-sm-3">                        p<input type="text" maxlength="1" size="1" style="width:30px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="r">isa<br><br>                    </div>',
    '<div class="col-sm-3">                        p<input type="text" maxlength="1" size="1" style="width:30px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="r">emio<br><br>                    </div>',
    '<div class="col-sm-3">                        comp<input type="text" maxlength="1" size="1" style="width:30px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="r">a<br><br>                    </div>',
    '<div class="col-sm-3">                        p<input type="text" maxlength="1" size="1" style="width:30px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="r">ofesor<br><br>                    </div>',
    '<div class="col-sm-3">                        p<input type="text" maxlength="1" size="1" style="width:30px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="l">anta<br><br>                    </div>',
    '<div class="col-sm-3">                        p<input type="text" maxlength="1" size="1" style="width:30px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="r">ecioso<br><br>                    </div>',
    '<div class="col-sm-3">                        p<input type="text" maxlength="1" size="1" style="width:30px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="l">aticar<br><br>                    </div>',
    '<div class="col-sm-3">                        p<input type="text" maxlength="1" size="1" style="width:30px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="r">acticar<br><br>                    </div>',
    '<div class="col-sm-3">                        p<input type="text" maxlength="1" size="1" style="width:30px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="r">imo<br><br>                    </div>',
    '<div class="col-sm-3">                        ap<input type="text" maxlength="1" size="1" style="width:30px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="r">ender<br><br>                    </div>',
    '<div class="col-sm-3">                        p<input type="text" maxlength="1" size="1" style="width:30px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="l">anchar<br><br>                    </div>',
    '<div class="col-sm-3">                        p<input type="text" maxlength="1" size="1" style="width:30px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="l">omo<br><br>                    </div>',
    '<div class="col-sm-3">                        sop<input type="text" maxlength="1" size="1" style="width:30px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="l">ar<br><br>                    </div>'
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
    tpre2 = ((nota / 10) * 4);
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}


function pregunta3() {
    var respuestas = document.getElementsByClassName("respuestas3");
    var soluciones = document.getElementsByClassName("solucion3");
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
    tpre3 = ((nota / 10) * 4);
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}

var p4vec1 = [
    ['Una tarde .......... el viento.', 0],
    ['Mi .......... se quedó dormida.', 1],
    ['Soñó con una bella ............', 2],
    ['La princesa era ............', 3]

];
var p4vec2 = [
    ['<div style=" border: 2px solid #CE56A7; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="1 pint1">volaba</div>',
        '<div style=" border: 2px solid #CE56A7; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="1 pint2">soplaba</div>',
        '<div style=" border: 2px solid #CE56A7; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="1 pint3">silbaba</div>'

    ],
    ['<div style=" border: 2px solid #CE56A7; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="2 pint11">vecina</div>',
        '<div style=" border: 2px solid #CE56A7; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="2 pint12">primo</div>',
        '<div style=" border: 2px solid #CE56A7; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="2 pint13">prima</div>'
    ],
    ['<div style=" border: 2px solid #CE56A7; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="3 pint21">príncipe</div>',
        '<div style=" border: 2px solid #CE56A7; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="3 pint22">princesa</div>',
        '<div style=" border: 2px solid #CE56A7; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="3 pint23">estrella</div>'
    ],
    ['<div style=" border: 2px solid #CE56A7; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="4 pint31">preciosa</div>',
        '<div style=" border: 2px solid #CE56A7; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="4 pint32">alta</div>',
        '<div style=" border: 2px solid #CE56A7; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="4 pint33">princesa</div>'
    ]
];

p4vec1.sort(f_randomico);
for (var i = 0; i < 4; i++) {
    $('#p4im' + (i + 1)).text(p4vec1[i][0]);
    p4vec2[i].sort(f_randomico);
}
for (var i = 0; i < 4; i++) {
    $('#p4cim' + (i + 1)).html(p4vec2[p4vec1[i][1]]);
}

$('.1').click(function() {
    switch ($(this).attr('class')) {
        case '1 pint1':
            $('.pint1').addClass('pintar');
            $('.pint2').removeClass('pintar');
            $('.pint3').removeClass('pintar');
            break;
        case '1 pint2':
            $('.pint2').addClass('pintar');
            $('.pint1').removeClass('pintar');
            $('.pint3').removeClass('pintar');
            break;
        case '1 pint3':
            $('.pint3').addClass('pintar');
            $('.pint1').removeClass('pintar');
            $('.pint2').removeClass('pintar');
            break;
    }
});
$('.2').click(function() {
    switch ($(this).attr('class')) {
        case '2 pint11':
            $('.pint11').addClass('pintar');
            $('.pint12').removeClass('pintar');
            $('.pint13').removeClass('pintar');

            break;
        case '2 pint12':
            $('.pint12').addClass('pintar');
            $('.pint11').removeClass('pintar');
            $('.pint13').removeClass('pintar');
            break;
        case '2 pint13':
            $('.pint13').addClass('pintar');
            $('.pint11').removeClass('pintar');
            $('.pint12').removeClass('pintar');
            break;
    }
});
$('.3').click(function() {
    switch ($(this).attr('class')) {
        case '3 pint21':
            $('.pint21').addClass('pintar');
            $('.pint22').removeClass('pintar');
            $('.pint23').removeClass('pintar');

            break;
        case '3 pint22':
            $('.pint22').addClass('pintar');
            $('.pint21').removeClass('pintar');
            $('.pint23').removeClass('pintar');
            break;
        case '3 pint23':
            $('.pint23').addClass('pintar');
            $('.pint21').removeClass('pintar');
            $('.pint22').removeClass('pintar');
            break;
    }
});
$('.4').click(function() {
    switch ($(this).attr('class')) {
        case '4 pint31':
            $('.pint31').addClass('pintar');
            $('.pint32').removeClass('pintar');
            $('.pint33').removeClass('pintar');
            break;
        case '4 pint32':
            $('.pint32').addClass('pintar');
            $('.pint31').removeClass('pintar');
            $('.pint33').removeClass('pintar');
            break;
        case '4 pint33':
            $('.pint33').addClass('pintar');
            $('.pint31').removeClass('pintar');
            $('.pint32').removeClass('pintar');
            break;
    }
});

function pregunta5() {
    var p4cont1 = 0;
    var p4vec3 = ['soplaba', 'prima', 'princesa', 'preciosa'];
    for (var i = 0; i < 4; i++) {
        var p4cim1 = $('#p4cim' + (i + 1) + ' .pintar').html();
        if (!p4cim1) {
            p4cont1;
            f_no($('.' + (p4vec1[i][1] + 1)));
        } else {
            if (p4cim1 == p4vec3[p4vec1[i][1]]) {
                p4cont1++;
                f_ok($('#p4cim' + (i + 1) + ' .pintar'));
                $('#p4cim' + (i + 1) + ' .pintar').removeClass('pintar');
            } else {
                p4cont1;
                f_no($('#p4cim' + (i + 1) + ' .pintar'));
                $('#p4cim' + (i + 1) + ' .pintar').removeClass('pintar');
            }
        }
    }
    tpre5 = ((p4cont1 * 2) / 4);
    $("#pre5a").val(parseFloat(tpre5).toFixed(2));
}




// #region Calculo Nota Final
function NotaFinal() {

    pregunta2();
    pregunta3();
    pregunta5();
    cor =
        parseFloat(tpre2) +
        parseFloat(tpre3) +
        parseFloat(tpre5);
    Calculo_nota();
}




// #endregion