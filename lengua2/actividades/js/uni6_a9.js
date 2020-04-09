$("#n_pagina").html("249"); //impresion de pagina
var titulos = "evaluacion";
var cor = 0;
cont = 1,
    ejer = 1,
    itemsT = 10,
    inc = 0,
    calificacion = 10;

var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;


// #region Pregunta1

var vec2 = [
    ["1", "img/i1_p249_act2.jpg"],
    ["2", "img/i2_p249_act2.jpg"],
    ["3", "img/i3_p249_act2.jpg"],
    ["4", "img/i4_p249_act2.jpg"],
    ["5", "img/i5_p249_act2.jpg"],
    ["6", "img/i6_p249_act2.jpg"],
    ["7", "img/i7_p249_act2.jpg"]
]

var res1 = [
    ["img/i1_p249_act2.jpg"],
    ["img/i3_p249_act2.jpg"],
    ["img/i5_p249_act2.jpg"],
    ["img/i6_p249_act2.jpg"]
]
var random3 = document.getElementsByClassName('imagen');

vec2.sort(f_randomico);
for (i = 0; i < random3.length; i++) {
    $('#' + random3[i].id).html('<img id=' + vec2[i][1] + ' style="mix-blend-mode: multiply;" class=" imgAcom" src="' + vec2[i][1] + '">');
}

$('.enc').click(function() {

    if ($(this).hasClass('seleccionCaja')) {
        $(this).removeClass('seleccionCaja')
    } else {
        $(this).addClass('seleccionCaja')

    }

});

function pregunta2() {
    var corr = 0;
    var inco = 0;
    for (var i = 1; i < 8; i++) {
        var acu = 0;
        if ($("#caja_img" + [i] + "").hasClass("seleccionCaja")) {
            var caja = $("div[id=caja_img" + [i] + "").find('img')[0].id;

            for (var j = 0; j < 4; j++) {
                if (caja == res1[j]) {
                    acu++;
                } else {
                    acu;
                }
            }
            if (acu == 1) {
                corr++;
                $("#caja_img" + [i] + "").addClass('correctoi')
            } else {
                inco++;
                $("#caja_img" + [i] + "").removeClass('correctoi')
                $("#caja_img" + [i] + "").addClass('incorrectoi')
            }
        }
    }
    if (corr < inco) {
        var total = 0;
    } else {
        var total = ((corr - inco) * 4) / 4;
    }
    tpre2 = total.toFixed(2);
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Pregunta3
var res3 = ['pre3aux3', 'pre3aux6', 'pre3aux11', 'pre3aux20', 'pre3aux27', 'pre3aux35'];
p3vec = [
    '<div class="col-sm-4 table-responsive" style="text-align: center">                        <center><img src="img/i1_p249_act3.jpg">                            <table>                                <tr>                                    <td>                                        <div id="pre3aux1" class="cuadros enc3"></div>                                    </td>                                    <td>                                        <div id="pre3aux2" class="cuadros enc3"></div>                                    </td>                                    <td>                                        <div id="pre3aux3" class="cuadros enc3"></div>                                    </td>                                    <td>                                        <div id="pre3aux4" class="cuadros enc3"></div>                                    </td>                                </tr>                            </table>                        </center>                    </div>',
    '<div class="col-sm-4 table-responsive" style="text-align: center">                        <center><img src="img/i2_p249_act3.jpg">                            <table>                                <tr>                                    <td>                                        <div id="pre3aux5" class="cuadros enc3"></div>                                    </td>                                    <td>                                        <div id="pre3aux6" class="cuadros enc3"></div>                                    </td>                                    <td>                                        <div id="pre3aux7" class="cuadros enc3"></div>                                    </td>                                    <td>                                        <div id="pre3aux8" class="cuadros enc3"></div>                                    </td>                                    <td>                                        <div id="pre3aux9" class="cuadros enc3"></div>                                    </td>                                </tr>                            </table>                        </center>                    </div>',
    '<div class="col-sm-4 table-responsive" style="text-align: center">                        <center><img src="img/i3_p249_act3.jpg">                            <table>                                <tr>                                    <td>                                        <div id="pre3aux10" class="cuadros enc3"></div>                                    </td>                                    <td>                                        <div id="pre3aux11" class="cuadros enc3"></div>                                    </td>                                    <td>                                        <div id="pre3aux12" class="cuadros enc3"></div>                                    </td>                                    <td>                                        <div id="pre3aux13" class="cuadros enc3"></div>                                    </td>                                    <td>                                        <div id="pre3aux14" class="cuadros enc3"></div>                                    </td>                                    <td>                                        <div id="pre3aux15" class="cuadros enc3"></div>                                    </td>                                    <td>                                        <div id="pre3aux16" class="cuadros enc3"></div>                                    </td>                                    <td>                                        <div id="pre3aux17" class="cuadros enc3"></div>                                    </td>                                </tr>                            </table>                        </center>                    </div>',
    '<div class="col-sm-4 table-responsive" style="text-align: center">                        <center><img src="img/i4_p249_act3.jpg">                            <table>                                <tr>                                    <td>                                        <div id="pre3aux18" class="cuadros enc3"></div>                                    </td>                                    <td>                                        <div id="pre3aux19" class="cuadros enc3"></div>                                    </td>                                    <td>                                        <div id="pre3aux20" class="cuadros enc3"></div>                                    </td>                                    <td>                                        <div id="pre3aux21" class="cuadros enc3"></div>                                    </td>                                    <td>                                        <div id="pre3aux22" class="cuadros enc3"></div>                                    </td>                                    <td>                                        <div id="pre3aux23" class="cuadros enc3"></div>                                    </td>                                    <td>                                        <div id="pre3aux24" class="cuadros enc3"></div>                                    </td>                                </tr>                            </table>                        </center>                    </div>',
    '<div class="col-sm-4 table-responsive" style="text-align: center">                        <center><img src="img/i5_p249_act3.jpg">                            <table>                                <tr>                                    <td>                                        <div id="pre3aux25" class="cuadros enc3"></div>                                    </td>                                    <td>                                        <div id="pre3aux26" class="cuadros enc3"></div>                                    </td>                                    <td>                                        <div id="pre3aux27" class="cuadros enc3"></div>                                    </td>                                    <td>                                        <div id="pre3aux28" class="cuadros enc3"></div>                                    </td>                                </tr>                            </table>                        </center>                    </div>',
    '<div class="col-sm-4 table-responsive" style="text-align: center">                        <center><img src="img/i6_p249_act3.jpg">                            <table>                                <tr>                                    <td>                                        <div id="pre3aux29" class="cuadros enc3"></div>                                    </td>                                    <td>                                        <div id="pre3aux30" class="cuadros enc3"></div>                                    </td>                                    <td>                                        <div id="pre3aux31" class="cuadros enc3"></div>                                    </td>                                    <td>                                        <div id="pre3aux32" class="cuadros enc3"></div>                                    </td>                                    <td>                                        <div id="pre3aux33" class="cuadros enc3"></div>                                    </td>                                    <td>                                        <div id="pre3aux34" class="cuadros enc3"></div>                                    </td>                                    <td>                                        <div id="pre3aux35" class="cuadros enc3"></div>                                    </td>                                    <td>                                        <div id="pre3aux36" class="cuadros enc3"></div>                                    </td>                                </tr>                            </table>                        </center>                    </div>'
    ];
p3vec.sort(f_randomico);
$('#li3').html(p3vec);

$('.enc3').click(function() {

    if ($(this).hasClass('pintar')) {
        $(this).removeClass('pintar')
    } else {
        $(this).addClass('pintar')

    }

});
function pregunta3() {
    var corr = 0;
    var inco = 0;
    for (var i = 0; i < 37; i++) {
        var acu = 0;
        if ($("#pre3aux" + [i] + "").hasClass("pintar")) {
            var caja = $("div[id=pre3aux" + [i] + "").attr("id");

            for (var j = 0; j < 6; j++) {
                if (caja == res3[j]) {
                    acu++;
                } else {
                    acu;
                }
            }
            if (acu == 1) {
                f_ok($("#pre3aux" + [i] + ""));
                ($("#pre3aux" + [i] + "")).removeClass('pintar');
                corr++;
            } else {
                inco++;
                f_no($("#pre3aux" + [i] + ""));
                ($("#pre3aux" + [i] + "")).removeClass('pintar');
            }
        }
    }
    if (corr < inco) {
        var total = 0;
    } else {
        var total = ((corr - inco) * 4) / 6;
    }
    tpre3 = total.toFixed(2);
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Pregunta4
var vec4 = [
    ["1", "img/i1_p249_act4.jpg"],
    ["2", "img/i2_p249_act4.jpg"],
    ["3", "img/i3_p249_act4.jpg"],
    ["4", "img/i4_p249_act4.jpg"]
]

var res4 = [
    ["img/i1_p249_act4.jpg"]
]
var random4 = document.getElementsByClassName('imagen4');

vec4.sort(f_randomico);
for (i = 0; i < random4.length; i++) {
    $('#' + random4[i].id).html('<img id=' + vec4[i][1] + ' style="mix-blend-mode: multiply;" class=" imgAcom" src="' + vec4[i][1] + '">');
}

$('.enc4').click(function() {

    if ($(this).hasClass('seleccionCaja')) {
        $(this).removeClass('seleccionCaja')
    } else {
        $(this).addClass('seleccionCaja')

    }

});
function pregunta4() {
    var corr = 0;
    var inco = 0;
    for (var i = 1; i < 5; i++) {
        var acu = 0;
        if ($("#caja_img1" + [i] + "").hasClass("seleccionCaja")) {
            var caja = $("div[id=caja_img1" + [i] + "").find('img')[0].id;

            for (var j = 0; j < 1; j++) {
                if (caja == res4[j]) {
                    acu++;
                } else {
                    acu;
                }
            }
            if (acu == 1) {
                corr++;
                $("#caja_img1" + [i] + "").addClass('correctoi')
            } else {
                inco++;
                $("#caja_img1" + [i] + "").removeClass('correctoi')
                $("#caja_img1" + [i] + "").addClass('incorrectoi')
            }
        }
    }
    if (corr < inco) {
        var total = 0;
    } else {
        var total = ((corr - inco) * 2) / 1;
    }
    tpre4 = total.toFixed(2);
    $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion


// #region Calculo Nota Final
function NotaFinal() {


    pregunta2();
    pregunta3();
    pregunta4();
    cor =
        parseFloat(tpre2) +
        parseFloat(tpre3) +
        parseFloat(tpre4);
    Calculo_nota();
}


// #endregion