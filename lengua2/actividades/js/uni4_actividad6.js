$("#n_pagina").html("172"); //impresion de pagina

var tpre1 = 0;
var tpre2 = 0;



// #region Pregunta1


var res2 = ['pre4aux0', 'pre4aux12', 'pre4aux16', 'pre4aux18', 'pre4aux26', 'pre4aux28'];
p4vec = [
    '<div class="col-sm-4 table-responsive text-question" style="text-align: center">                        <center><img  src="img/i1_p172_act8.jpg"  >                            <table>                                <tr>                                    <td>                                        <div id="pre4aux0" class="cuadros enc1">s</div>                                    </td>                                    <td>                                        <div id="pre4aux1" class="cuadros enc1">a</div>                                    </td>                                    <td>                                        <div id="pre4aux2" class="cuadros enc1">l</div>                                    </td>                                    <td>                                        <div id="pre4aux3" class="cuadros enc1">e</div>                                    </td>                                    <td>                                        <div id="pre4aux4" class="cuadros enc1">r</div>                                    </td>                                    <td>                                        <div id="pre4aux5" class="cuadros enc1">o</div>                                    </td>                                </tr>                            </table>                        </center>                    </div>',
    '<div class="col-sm-4 table-responsive text-question" style="text-align: center">                        <center><img  src="img/i2_p172_act8.jpg"  >                            <table>                                <tr>                                    <td>                                        <div id="pre4aux6" class="cuadros enc1">m</div>                                    </td>                                    <td>                                        <div id="pre4aux7" class="cuadros enc1">a</div>                                    </td>                                    <td>                                        <div id="pre4aux8" class="cuadros enc1">r</div>                                    </td>                                    <td>                                        <div id="pre4aux9" class="cuadros enc1">i</div>                                    </td>                                    <td>                                        <div id="pre4aux10" class="cuadros enc1">p</div>                                    </td>                                    <td>                                        <div id="pre4aux11" class="cuadros enc1">o</div>                                    </td>                                    <td>                                        <div id="pre4aux12" class="cuadros enc1">s</div>                                    </td>                                    <td>                                        <div id="pre4aux13" class="cuadros enc1">a</div>                                    </td>                                </tr>                            </table>                        </center>                    </div>',
    '<div class="col-sm-4 table-responsive text-question" style="text-align: center">                        <center><img  src="img/i3_p172_act8.jpg"  >                            <table>                                <tr>                                    <td>                                        <div id="pre4aux14" class="cuadros enc1">c</div>                                    </td>                                    <td>                                        <div id="pre4aux15" class="cuadros enc1">a</div>                                    </td>                                    <td>                                        <div id="pre4aux16" class="cuadros enc1">s</div>                                    </td>                                    <td>                                        <div id="pre4aux17" class="cuadros enc1">a</div>                                    </td>                                </tr>                            </table>                        </center>                    </div>',
    '<div class="col-sm-4 table-responsive text-question" style="text-align: center">                        <center><img  src="img/i4_p172_act8.jpg"  >                            <table>                                <tr>                                    <td>                                        <div id="pre4aux18" class="cuadros enc1">s</div>                                    </td>                                    <td>                                        <div id="pre4aux19" class="cuadros enc1">a</div>                                    </td>                                    <td>                                        <div id="pre4aux20" class="cuadros enc1">n</div>                                    </td>                                    <td>                                        <div id="pre4aux21" class="cuadros enc1">d</div>                                    </td>                                    <td>                                        <div id="pre4aux22" class="cuadros enc1">í</div>                                    </td>                                    <td>                                        <div id="pre4aux23" class="cuadros enc1">a</div>                                    </td>                                </tr>                            </table>                        </center>                    </div>',
    '<div class="col-sm-4 table-responsive text-question" style="text-align: center">                        <center><img  src="img/i5_p172_act8.jpg"  >                            <table>                                <tr>                                    <td>                                        <div id="pre4aux24" class="cuadros enc1">m</div>                                    </td>                                    <td>                                        <div id="pre4aux25" class="cuadros enc1">e</div>                                    </td>                                    <td>                                        <div id="pre4aux26" class="cuadros enc1">s</div>                                    </td>                                    <td>                                        <div id="pre4aux27" class="cuadros enc1">a</div>                                    </td>                                </tr>                            </table>                        </center>                    </div>',
    '<div class="col-sm-4 table-responsive text-question" style="text-align: center">                        <center><img  src="img/i6_p172_act8.jpg"  >                            <table>                                <tr>                                    <td>                                        <div id="pre4aux28" class="cuadros enc1">s</div>                                    </td>                                    <td>                                        <div id="pre4aux29" class="cuadros enc1">e</div>                                    </td>                                    <td>                                        <div id="pre4aux30" class="cuadros enc1">m</div>                                    </td>                                    <td>                                        <div id="pre4aux31" class="cuadros enc1">á</div>                                    </td>                                    <td>                                        <div id="pre4aux32" class="cuadros enc1">f</div>                                    </td>                                    <td>                                        <div id="pre4aux33" class="cuadros enc1">o</div>                                    </td>                                    <td>                                        <div id="pre4aux34" class="cuadros enc1">r</div>                                    </td>                                    <td>                                        <div id="pre4aux35" class="cuadros enc1">o</div>                                    </td>                                </tr>                            </table>                        </center>                    </div>'
    ];
p4vec.sort(f_randomico);
$('#pre4aux1').html(p4vec);

$('.enc1').click(function() {

    if ($(this).hasClass('pintar')) {
        $(this).removeClass('pintar')
    } else {
        $(this).addClass('pintar')

    }

});

function pregunta1() {
    var corr = 0;
    var inco = 0;
    for (var i = 0; i < 36; i++) {
        var acu = 0;
        if ($("#pre4aux" + [i] + "").hasClass("pintar")) {
            var caja = $("div[id=pre4aux" + [i] + "").attr("id");

            for (var j = 0; j < 7; j++) {
                if (caja == res2[j]) {
                    acu++;
                } else {
                    acu;
                }
            }
            if (acu == 1) {
                f_ok($("#pre4aux" + [i] + ""));
                ($("#pre4aux" + [i] + "")).removeClass('pintar');
                corr++;
            } else {
                inco++;
                f_no($("#pre4aux" + [i] + ""));
                ($("#pre4aux" + [i] + "")).removeClass('pintar');
            }
        }
    }
    if (corr < inco) {
        var total = 0;
    } else {
        var total = ((corr - inco) * 5) / 6;
    }
    tpre1 = total.toFixed(2);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2
var resul = [],
    tmp, cor = 0,
    inc = 0,
    cont = 0,
    calificacion = 5,
    itemsT = 8,
    ejer = 1;
var totalC = 0,
    totalFinal = 0,
    total = 0;


var words = ['sopa', 'sirena', 'isla', 'mariposa', 'suma', 'semáforo', 'rosa', 'camisa'];
var gamePuzzle = wordfindgame.create(words, '#puzzle', '#words');
$('#solve').click(function() { wordfindgame.solve(gamePuzzle, words); });
var puzzle = wordfind.newPuzzle(words, { height: 20, width: 20, fillBlanks: false });
wordfind.print(puzzle);
function pregunta2() {
    var corr = 0;
    totalC = (cor * (calificacion / itemsT)).toFixed(2); //suma de calificacion cerrada

    tpre2 = (totalC);
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion





// #region Calculo Nota Final
function NotaFinal() {

    pregunta1();
    pregunta2();

    var Nf = parseFloat(tpre1) + parseFloat(tpre2);
    var Vtotal = Nf.toFixed(2);
    $("#txtNota").html(Vtotal + "/10");
    document.getElementById("bt_comprobar").disabled = true;
}

// #endregion