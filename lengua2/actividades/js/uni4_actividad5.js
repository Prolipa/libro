$("#n_pagina").html("171"); //impresion de pagina
var titulos = "evaluacion";
var tpre4 = 0;




// #region Pregunta4

var res2 = ['pre4aux6', 'pre4aux8', 'pre4aux14', 'pre4aux16', 'pre4aux18', 'pre4aux21', 'pre4aux28'];
p4vec = [
    '<div class="col-sm-6 table-responsive" style="text-align: center">                        <center><img  src="img/i1_p171_act4.jpg"  >                            <table>                                <tr>                                    <td>                                        <div id="pre4aux0" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux1" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux2" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux3" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux4" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux5" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux6" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux7" class="cuadros enc1"></div>                                    </td>                                </tr>                            </table>                        </center>                    </div>',
    '<div class="col-sm-6 table-responsive" style="text-align: center">                        <center><img  src="img/i2_p171_act4.jpg"  >                            <table>                                <tr>                                    <td>                                        <div id="pre4aux8" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux9" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux10" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux11" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux12" class="cuadros enc1"></div>                                    </td>                                </tr>                            </table>                        </center>                    </div>',
    '<div class="col-sm-6 table-responsive" style="text-align: center">                        <center><img  src="img/i3_p171_act4.jpg"  >                            <table>                                <tr>                                    <td>                                        <div id="pre4aux13" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux14" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux15" class="cuadros enc1"></div>                                    </td>                                </tr>                            </table>                        </center>                    </div>',
    '<div class="col-sm-6 table-responsive" style="text-align: center">                        <center><img  src="img/i4_p171_act4.jpg"  >                            <table>                                <tr>                                    <td>                                        <div id="pre4aux16" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux17" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux18" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux19" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux20" class="cuadros enc1"></div>                                    </td>                                </tr>                            </table>                        </center>                    </div>',
    '<div class="col-sm-6 table-responsive" style="text-align: center">                        <center><img  src="img/i5_p171_act4.jpg"  >                            <table>                                <tr>                                    <td>                                        <div id="pre4aux21" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux22" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux23" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux24" class="cuadros enc1"></div>                                    </td>                                </tr>                            </table>                        </center>                    </div>',
    '<div class="col-sm-6 table-responsive" style="text-align: center">                        <center><img  src="img/i6_p171_act4.jpg"  >                            <table>                                <tr>                                    <td>                                        <div id="pre4aux25" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux26" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux27" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux28" class="cuadros enc1"></div>                                    </td>                                </tr>                            </table>                        </center>                    </div>'
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

function pregunta4() {
    var corr = 0;
    var inco = 0;
    for (var i = 0; i < 29; i++) {
        var acu = 0;
        if ($("#pre4aux" + [i] + "").hasClass("pintar")) {
            var caja = $("div[id=pre4aux" + [i] + "").attr("id");

            for (var j = 0; j < 8; j++) {
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
        var total = ((corr - inco) * 10) / 7;
    }
    tpre4 = total.toFixed(2);
    $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion




// #region Calculo Nota Final
function NotaFinal() {
    pregunta4();
    var Nf = parseFloat(tpre4) ;
    var Vtotal = Nf.toFixed(2);
    $("#txtNota").html(Vtotal + "/10");
    document.getElementById("bt_comprobar").disabled = true;
    $("input").attr('disabled', 'disabled');
}

// #endregion