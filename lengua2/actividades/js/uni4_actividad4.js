$("#n_pagina").html("169"); //impresion de pagina

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;



// #region Pregunta1


var res2 = ['pre4aux0', 'pre4aux5', 'pre4aux13', 'pre4aux17', 'pre4aux22', 'pre4aux27'];
p4vec = [
    '<div class="  text-question" style="text-align: center;display:inline-block;padding:20px">                        <center><img  src="img/i1_p169_act1.jpg"  >                            <table>                                <tr>                                    <td>                                        <div id="pre4aux0" class="cuadros enc1">k</div>                                    </td>                                    <td>                                        <div id="pre4aux1" class="cuadros enc1">o</div>                                    </td>                                    <td>                                        <div id="pre4aux2" class="cuadros enc1">a</div>                                    </td>                                    <td>                                        <div id="pre4aux3" class="cuadros enc1">l</div>                                    </td>                                    <td>                                        <div id="pre4aux4" class="cuadros enc1">a</div>                                    </td>                                </tr>                            </table>                        </center>                    </div>',
    '<div class="  text-question" style="text-align: center;display:inline-block;padding:20px">                        <center><img  src="img/i2_p169_act1.jpg"  >                            <table>                                <tr>                                    <td>                                        <div id="pre4aux5" class="cuadros enc1">k</div>                                    </td>                                    <td>                                        <div id="pre4aux6" class="cuadros enc1">a</div>                                    </td>                                    <td>                                        <div id="pre4aux7" class="cuadros enc1">r</div>                                    </td>                                    <td>                                        <div id="pre4aux8" class="cuadros enc1">a</div>                                    </td>                                    <td>                                        <div id="pre4aux9" class="cuadros enc1">t</div>                                    </td>                                    <td>                                        <div id="pre4aux10" class="cuadros enc1">e</div>                                    </td>                                    <td>                                        <div id="pre4aux11" class="cuadros enc1">c</div>                                    </td>                                    <td>                                        <div id="pre4aux12" class="cuadros enc1">a</div>                                    </td>                                </tr>                            </table>                        </center>                    </div>',
    '<div class="  text-question" style="text-align: center;display:inline-block;padding:20px">                        <center><img  src="img/i3_p169_act1.jpg"  >                            <table>                                <tr>                                    <td>                                        <div id="pre4aux13" class="cuadros enc1">k</div>                                    </td>                                    <td>                                        <div id="pre4aux14" class="cuadros enc1">i</div>                                    </td>                                    <td>                                        <div id="pre4aux15" class="cuadros enc1">l</div>                                    </td>                                    <td>                                        <div id="pre4aux16" class="cuadros enc1">o</div>                                    </td>                                </tr>                            </table>                        </center>                    </div>',
    '<div class="  text-question" style="text-align: center;display:inline-block;padding:20px">                        <center><img  src="img/i4_p169_act1.jpg"  >                            <table>                                <tr>                                    <td>                                        <div id="pre4aux17" class="cuadros enc1">K</div>                                    </td>                                    <td>                                        <div id="pre4aux18" class="cuadros enc1">a</div>                                    </td>                                    <td>                                        <div id="pre4aux19" class="cuadros enc1">t</div>                                    </td>                                    <td>                                        <div id="pre4aux20" class="cuadros enc1">i</div>                                    </td>                                    <td>                                        <div id="pre4aux21" class="cuadros enc1">a</div>                                    </td>                                </tr>                            </table>                        </center>                    </div>',
    '<div class="  text-question" style="text-align: center;display:inline-block;padding:20px">                        <center><img  src="img/i5_p169_act1.jpg"  >                            <table>                                <tr>                                    <td>                                        <div id="pre4aux22" class="cuadros enc1">k</div>                                    </td>                                    <td>                                        <div id="pre4aux23" class="cuadros enc1">a</div>                                    </td>                                    <td>                                        <div id="pre4aux24" class="cuadros enc1">r</div>                                    </td>                                    <td>                                        <div id="pre4aux25" class="cuadros enc1">a</div>                                    </td>                                    <td>                                        <div id="pre4aux26" class="cuadros enc1">o</div>                                    </td>                                    <td>                                        <div id="pre4aux27" class="cuadros enc1">k</div>                                    </td>                                    <td>                                        <div id="pre4aux28" class="cuadros enc1">e</div>                                    </td>                                </tr>                            </table>                        </center>                    </div>'
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
    for (var i = 0; i < 29; i++) {
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
        var total = ((corr - inco) * 4) / 6;
    }
    tpre1 = total.toFixed(2);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2

v2=[
'<div class="col-sm-12 text-question ">                        <table>                            <tr>                                <td colspan="2" style="text-align: center"><h3><b>El</b></h3>                                </td>                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>                                <td colspan="5">                                    <center><img src="img/i1_p169_act3.jpg"></center>                                </td>                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>                                <td colspan="4" style="text-align: center"><h3><b>vive</b></h3>                                </td>                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>                                <td colspan="2" style="text-align: center"><h3><b>en</b></h3>                                </td>                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>                                <td colspan="2" style="text-align: center"><h3><b>el</b></h3>                                </td>                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>                                <td colspan="6">                                    <center><img src="img/i2_p169_act3.jpg"></center>                                </td>                            </tr>                            <tr>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="E"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="l"></td>                                <td></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="k"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="o"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="a"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="l"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="a"></td>                                <td></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="v"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="i"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="v"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="e"></td>                                <td></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="e"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="n"></td>                                <td></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="e"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="l"></td>                                <td></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="b"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="o"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="s"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="q"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="u"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="e"></td>                            </tr>                        </table>                    </div>',
'<div class="col-sm-12 text-question ">                        <table>                            <tr>                                <td colspan="2" style="text-align: center"><h3><b>El</b></h3>                                </td>                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>                                <td colspan="5">                                    <center><img src="img/i1_p169_act3.jpg"></center>                                </td>                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>                                <td colspan="5" style="text-align: center"><h3><b>trepa</b></h3>                                </td>                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>                                <td colspan="2" style="text-align: center"><h3><b>al</b></h3>                                </td>                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>                                <td colspan="5">                                    <center><img src="img/i3_p169_act3.jpg"></center>                                </td>                            </tr>                            <tr>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="E"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="l"></td>                                <td></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="k"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="o"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="a"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="l"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="a"></td>                                <td></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="t"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="r"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="e"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="p"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="a"></td>                                <td></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="a"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="l"></td>                                <td></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="á"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="r"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="b"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="o"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="l"></td>                            </tr>                        </table>                    </div>',
'<div class="col-sm-12 text-question ">                        <table>                            <tr>                                <td colspan="2" style="text-align: center"><h3><b>El</b></h3>                                </td>                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>                                <td colspan="5">                                    <center><img src="img/i1_p169_act3.jpg"></center>                                </td>                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>                                <td colspan="4" style="text-align: center"><h3><b>come</b></h3>                                </td>                                                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>                                <td colspan="9">                                    <center><img src="img/i4_p169_act3.jpg"></center>                                </td>                            </tr>                            <tr>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="E"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="l"></td>                                <td></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="k"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="o"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="a"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="l"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="a"></td>                                <td></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="c"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="o"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="m"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="e"></td>                                <td></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="e"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="u"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="c"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="a"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="l"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="i"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="p"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="t"></td>                                <td><input type="text" size="1" maxlength="1" style="width:40px;text-align: center;" class="cuadros border-blue respuestas2 cajas1"><input type="hidden" class="solucion2" value="o"></td>                            </tr>                                                    </table>                    </div>'
];
v2.sort(f_randomico);
$('#pre4').html(v2);


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
    tpre2 = ((nota * 4) / 10);
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion


// #region Pregunta3
vecpal=['koala','Katia','karaoke'];
    var p2vec1 = [
        '<div class=" col-sm-4" style="display: inline-block;">                        <table class="">                            <tr align="center">                                <td> </td>                                <td> <img src="img/i1_p169_act5.jpg" alt="" class="img-responsive"> <input type="text" class="form-control" style="font-size: 40px; text-align: center; min-width: 60px; max-width: 190px; height: 50px;" id="p2dcon0"> </td>                            </tr>                        </table>                    </div>',
        '<div class=" col-sm-4" style="display: inline-block;">                        <table class="">                            <tr align="center">                                <td> </td>                                <td> <img src="img/i2_p169_act5.jpg" alt="" class="img-responsive"> <input type="text" class="form-control" style="font-size: 40px; text-align: center; min-width: 60px; max-width: 190px; height: 50px;" id="p2dcon1"> </td>                            </tr>                        </table>                    </div>',
        '<div class=" col-sm-4" style="display: inline-block;">                        <table class="">                            <tr align="center">                                <td> </td>                                <td> <img src="img/i3_p169_act5.jpg" alt="" class="img-responsive"> <input type="text" class="form-control" style="font-size: 40px; text-align: center; min-width: 60px; max-width: 190px; height: 50px;" id="p2dcon2"> </td>                            </tr>                        </table>                    </div>'
        ];
    p2vec1.sort(f_randomico);
    $('#p2im1').html(p2vec1);
function pregunta3() {
 var cor=0;
 var inc=0;
    for (var i = 0; i < 3 ; i++) {
        var res=$('#p2dcon'+[i]+'').val();
        if (res == vecpal[i]) {
            cor++;
            f_ok($('#p2dcon'+[i]+''));
        } else {
            inc++;
            f_no($('#p2dcon'+[i]+''));
        }
    }
    if (cor < inc) {
        var total = 0;
    } else {
        var total = ((cor - inc) * 2) / 3;
    }
    tpre3 = total.toFixed(2);
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion



// #region Calculo Nota Final
function NotaFinal() {

    pregunta1();
    pregunta2()
    pregunta3()

    var Nf = parseFloat(tpre1) + parseFloat(tpre2)+ parseFloat(tpre3);
    var Vtotal = Nf.toFixed(2);
    $("#txtNota").html(Vtotal + "/10");
    document.getElementById("bt_comprobar").disabled = true;
}

// #endregion