var titulos = "aplico";
$("#txtNota").html("0/10");
$("#n_pagina").html("145");

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;
var tpre6 = 0;

function validar(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    return tecla != 32;
}

document.getElementById("pre6a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre6a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre6a"), 1);
});


ramdon1 = [
    '<table bordercolor="purple" border="1" class="table">                            <tr>                                <td width="50%" bgcolor="#FFE293">bueno</td>                                <td width="25%" class="enc1 " id="1"><input type="text" size="1" maxlength="6" style="width:70px;text-align: center;" class="border-blue respuestas1 cajas1"><input type="hidden"  class="solucion1" value="bue"></td>                                <td width="25%" class="enc1 " id="2"><input type="text" size="1" maxlength="6" style="width:70px;text-align: center;" class="border-blue respuestas1 cajas1"><input type="hidden"  class="solucion1" value="no"></td>                            </tr>                            <tr>                                <td width="50%" bgcolor="#D1E8BF">gloria</td>                                <td width="25%" class="enc1 " id="3"><input type="text" size="1" maxlength="6" style="width:70px;text-align: center;" class="border-blue respuestas1 cajas1"><input type="hidden"  class="solucion1" value="glo"></td>                                <td width="25%" class="enc1 " id="4"><input type="text" size="1" maxlength="6" style="width:70px;text-align: center;" class="border-blue respuestas1 cajas1"><input type="hidden"  class="solucion1" value="ria"></td>                            </tr></table>',
    '<table bordercolor="purple" border="1" class="table">                            <tr>                                <td width="50%" bgcolor="#FFE293">Zoila</td>                                <td width="25%" class="enc1 " id="5"><input type="text" size="1" maxlength="6" style="width:70px;text-align: center;" class="border-blue respuestas1 cajas1"><input type="hidden"  class="solucion1" value="Zoi"></td>                                <td width="25%" class="enc1 " id="6"><input type="text" size="1" maxlength="6" style="width:70px;text-align: center;" class="border-blue respuestas1 cajas1"><input type="hidden"  class="solucion1" value="la"></td>                            </tr>                            <tr>                                <td width="50%" bgcolor="#D1E8BF">radio</td>                                <td width="25%" class="enc1 " id="7"><input type="text" size="1" maxlength="6" style="width:70px;text-align: center;" class="border-blue respuestas1 cajas1"><input type="hidden"  class="solucion1" value="ra"></td>                                <td width="25%" class="enc1 " id="8"><input type="text" size="1" maxlength="6" style="width:70px;text-align: center;" class="border-blue respuestas1 cajas1"><input type="hidden"  class="solucion1" value="dio"></td>                            </tr>                        </table>',
    '<table bordercolor="purple" border="1" class="table">                            <tr>                                <td width="50%" bgcolor="#FFE293">causa</td>                                <td width="25%" class="enc1 " id="9"><input type="text" size="1" maxlength="6" style="width:70px;text-align: center;" class="border-blue respuestas1 cajas1"><input type="hidden"  class="solucion1" value="cau"></td>                                <td width="25%" class="enc1 " id="10"><input type="text" size="1" maxlength="6" style="width:70px;text-align: center;" class="border-blue respuestas1 cajas1"><input type="hidden"  class="solucion1" value="sa"></td>                            </tr>                            <tr>                                <td width="50%" bgcolor="#D1E8BF">deuda</td>                                <td width="25%" class="enc1 " id="11"><input type="text" size="1" maxlength="6" style="width:70px;text-align: center;" class="border-blue respuestas1 cajas1"><input type="hidden"  class="solucion1" value="deu"></td>                                <td width="25%" class="enc1 " id="12"><input type="text" size="1" maxlength="6" style="width:70px;text-align: center;" class="border-blue respuestas1 cajas1"><input type="hidden"  class="solucion1" value="da"></td>                            </tr>                        </table>'
];
ramdon1.sort(f_randomico);
for (var i = 1; i < 4; i++) {
    $('#tab' + [i] + '').html(ramdon1[i - 1]);
}
// #region Pregunta1
$(".enc1").click(function() {
    if ($(this).hasClass('vacio')) {
        $(this).removeClass('vacio')
        $(this).addClass('pintar')
    } else if ($(this).hasClass('pintar')) {
        $(this).removeClass('pintar')
    } else {
        $(this).addClass('vacio')
    }
});

function pregunta1() {
    var respuestas = document.getElementsByClassName("respuestas1");
    var soluciones = document.getElementsByClassName("solucion1");
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

    var not1 = 0;
    var not2 = 0;
    not1 = nota / 10;


    var respr1 = 0,
        respr2 = 0;
    for (var i = 1; i <= 12; i++) {
        var caja = $("td[id=" + [i] + "] input").val();
        if ($("#" + [i] + "").hasClass("pintar")) {
            if (caja == "bue" || caja == "ria" || caja == "Zoi" || caja == "dio" || caja == "cau" || caja == "deu") {
                respr1 = respr1 + 1;
                $("#" + [i] + "").removeClass("pintar");
                $("#" + [i] + "").addClass("correcto");
            } else {
                respr2 = respr2 + 1;
                $("#" + [i] + "").removeClass("pintar");
                $("#" + [i] + "").addClass("incorrecto");
            }
        } else {}
    }

    var total = ((respr1 - respr2) * 1) / 6;
    if (total < 0) {
        total = 0;
        not2 = total;
    } else {
        not2 = total;
    }
    tpre1 = not1 + not2;
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2

ramdon2 = [
    '<span id="13" style="border: 3px dotted #00AEEF;padding:10px" class="enc2">amortigüéis</span>',
    '<span id="14" style="border: 3px dotted #00AEEF;padding:10px" class="enc2">ciudad</span>',
    '<span id="15" style="border: 3px dotted #00AEEF;padding:10px" class="enc2">despreciáis</span>',
    '<span id="16" style="border: 3px dotted #00AEEF;padding:10px" class="enc2">fuimos</span>',
    '<span id="17" style="border: 3px dotted #00AEEF;padding:10px" class="enc2">limpiáis</span>',
    '<span id="18" style="border: 3px dotted #00AEEF;padding:10px" class="enc2">oigo</span>'
];
ramdon2.sort(f_randomico);
for (var i = 1; i < 7; i++) {
    $('#pre2id' + [i] + '').html(ramdon2[i - 1]);
}

$(".enc2").click(function() {
    if ($(this).hasClass("subrayar")) {
        $(this).removeClass("subrayar");
    } else {
        $(this).addClass("subrayar");
    }
});

function pregunta2() {
    var respr1 = 0,
        respr2 = 0;
    for (var i = 13; i <= 18; i++) {
        var caja = $("span[id=" + [i] + "]").text();
        if ($("#" + [i] + "").hasClass("subrayar")) {
            if (caja == "amortigüéis" || caja == "despreciáis" || caja == "limpiáis") {
                respr1 = respr1 + 1;
                $("#" + [i] + "").removeClass("subrayar");
                $("#" + [i] + "").addClass("correcto");
            } else {
                respr2 = respr2 + 1;
                $("#" + [i] + "").removeClass("subrayar");
                $("#" + [i] + "").addClass("incorrecto");
            }
        } else {}
    }

    var total = ((respr1 - respr2) * 2) / 3;
    if (total < 0) {
        total = 0;
        tpre2 = total;
    } else {
        tpre2 = total;
    }

    tpre2 = total.toFixed(2);
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion



ramdon3 = [
    '<center>                            <img src="img/i4_p145_act3.jpg" class="img-responsive"><br>                           <input type="text" size="1"  style="width:170px;text-align: center;" class="border-blue respuestas3 cajas1"><br><input type="hidden"  class="solucion3" value="triptongo">                        </center>',
    '<center>                            <img src="img/i3_p145_act3.jpg" class="img-responsive"><br>                            <input type="text" size="1"  style="width:170px;text-align: center;" class="border-blue respuestas3 cajas1"><br><input type="hidden"  class="solucion3" value="diptongo">                        </center>',
    '<center>                            <img src="img/i1_p145_act3.jpg" class="img-responsive"><br>                            <input type="text" size="1"  style="width:170px;text-align: center;" class="border-blue respuestas3 cajas1"><br><input type="hidden"  class="solucion3" value="triptongo">                        </center>',
    '<center>                            <img src="img/i2_p145_act3.jpg" class="img-responsive"><br>                            <input type="text" size="1"  style="width:170px;text-align: center;" class="border-blue respuestas3 cajas1"><br><input type="hidden"  class="solucion3" value="diptongo">                        </center>'
];
ramdon3.sort(f_randomico);
for (var i = 1; i < 7; i++) {
    $('#pre3id' + [i] + '').html(ramdon3[i - 1]);
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
    tpre3 = nota / 5;
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion



// #region Pregunta2

var resul = [],
    tmp, cor = 0,
    inc = 0,
    cont = 0,
    calificacion = 1,
    itemsT = 6,
    ejer = 1;
var totalC = 0,
    totalFinal = 0,
    total = 0;


var words = ['ruiseñor', 'acción', 'camión', 'ruina', 'peine', 'auto'];
var gamePuzzle = wordfindgame.create(words, '#puzzle', '#words');
$('#solve').click(function() { wordfindgame.solve(gamePuzzle, words); });
var puzzle = wordfind.newPuzzle(words, { height: 20, width: 20, fillBlanks: false });
wordfind.print(puzzle);


function pregunta4() {
    var corr = 0;
    totalC = (cor * (calificacion / itemsT)).toFixed(2); //suma de calificacion cerrada

    pre4vec1 = ['ruiseñor', 'acción', 'camión'];
    pre4vec2 = ['ruina', 'peine', 'auto'];

    pre4res1 = [];
    pre4res2 = [];

    for (var i = 0; i < 3; i++) {
        var res = ($("#p4cj" + [i] + "").val());
        pre4res1.push(res);
    }

    for (var i = 0; i < 3; i++) {
        var res = ($("#p4cja" + [i] + "").val());
        pre4res2.push(res);
    }

    var j = 0;
    for (var i = 0; i < 3; i++) {
        var p1cont1 = 0;
        for (j = 0; j < 3; j++) {
            if (pre4res1[i] == pre4vec1[j]) {
                p1cont1++;
                pre4vec1[j] = 'a';
            } else {
                p1cont1;
            }
        }
        if (p1cont1 == '1') {
            corr++;
            f_ok($('#p4cj' + (i)));
        } else {
            f_no($('#p4cj' + (i)));
        }
    }

    for (var i = 0; i < 3; i++) {
        var p1cont1 = 0;
        for (var j = 0; j < 3; j++) {
            if (pre4res2[i] == pre4vec2[j]) {
                p1cont1++;
                pre4vec2[j] = 'a';
            } else {
                p1cont1;
            }
        }
        if (p1cont1 == '1') {
            corr++;
            f_ok($('#p4cja' + (i)));
        } else {
            f_no($('#p4cja' + (i)));
        }
    }




    tpre4 = parseFloat(totalC) + parseFloat((corr * 1) / 6);
    $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion
$('.enc5').click(function() {
    if ($(this).hasClass('vacio')) {
        $(this).removeClass('vacio')
        $(this).addClass('encierra')
    } else if ($(this).hasClass('encierra')) {
        $(this).removeClass('encierra')
        $(this).addClass('subrayar')
    } else {
        $(this).removeClass('subrayar')
        $(this).addClass('vacio')
    }
});

function pregunta5() {

    var respr1 = 0;
    var respr2 = 0;
    for (var i = 50; i <= 108; i++) {
        var caja = $('span[id=' + [i] + ']').text();
        if (($('#' + [i] + '').hasClass("subrayar") == true)) {

            if ((caja == "confiéis") || (caja == "despreciéis")) {
                respr1++;
                
                
                $('#' + [i] + '').removeClass('subrayar');
                f_ok($('#' + [i] + ''));
            } else {
                respr2++;

                
                f_no($('#' + [i] + ''));
                $('#' + [i] + '').removeClass('subrayar');
            }

        }

        if (($('#' + [i] + '').hasClass("encierra") == true)) {

            if ((caja == "Florencio") || (caja == "Polonia") || (caja == "fiesta") || (caja == "escuela") || (caja == "suele") || (caja == "juego") || (caja == "ingenioso") || (caja == "diciendo")) {
                respr1++;

                $('#' + [i] + '').removeClass('encierra');
                f_ok($('#' + [i] + ''));
            } else {
                respr2++;

                f_no($('#' + [i] + ''));
                $('#' + [i] + '').removeClass('encierra');
            }

        }


    }
        var total = ((respr1 - respr2) * 1) / 11;
    if (total < 0) {
        total = 0;
        tpre5 = total;
    } else {
        tpre5 = total;
    }

    tpre5 = total.toFixed(2);
    $("#pre5a").val(parseFloat(tpre5).toFixed(2));
}


// #endregion

function pregunta6() {
    var pre6a = document.getElementById("pre6a").value;
    tpre6 = pre6a;
    $("#pre6a").val(parseFloat(tpre6).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
    var pre6a = document.getElementById("pre6a").value;
    if (pre6a == "") {
        alert("Pregunta 6: Califiqué la pregunta");
    } else {
    pregunta1();
    pregunta2();
    pregunta3();
    pregunta4();
    pregunta5();
    pregunta6();
    var Nf = parseFloat(tpre1) + parseFloat(tpre2) + parseFloat(tpre3) + parseFloat(tpre4) + parseFloat(tpre5) + parseFloat(tpre6);
    var Vtotal = Nf.toFixed(2);
    $("#txtNota").html(Vtotal + "/10");
    document.getElementById("bt_comprobar").disabled = true;
    $("input").attr('disabled', 'disabled');
}
}

// #endregion