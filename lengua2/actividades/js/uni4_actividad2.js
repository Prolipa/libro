$("#n_pagina").html("165"); //impresion de pagina
var titulos = "evaluacion";

var tpre1 = 0;
var tpre2 = 0;



// #region Pregunta1
var pal1 = ['<span class="bg_palabra drag1">quinua</span>',
    '<span class="bg_palabra drag1">parque</span>',
    '<span class="bg_palabra drag1">quijada</span>',
    '<span class="bg_palabra drag1">Quito</span>',
    '<span class="bg_palabra drag1">raqueta</span>',
    '<span class="bg_palabra drag1">paquete</span>'
];
pal1.sort(f_randomico);

pal2=
[
'Raquel quiere ir al <div class=" c_destino1 drop1 p1im1" style="display: inline-block;"></div>.<br><br>',
'A Paquita le duele la <div class=" c_destino1 drop1 p1im2" style="display: inline-block;"></div>.<br><br>',
'Roque tiene un <div class=" c_destino1 drop1 p1im3" style="display: inline-block;"></div> de <div class=" c_destino1 drop1 p1im4" style="display: inline-block;"></div>.<br><br>',
'Quique limpia la <div class=" c_destino1 drop1 p1im5" style="display: inline-block;"></div>.<br><br>',
'Riqui quiere viajar a <div class=" c_destino1 drop1 p1im6" style="display: inline-block;"></div>.<br><br>'
];
pal2.sort(f_randomico);
for (var i = 0; i < 5; i++) {
    $('#pre7aux' + [i] + '').html(pal2[i]);
}
$(".textos").append(pal1);
$(".drag1").draggable({
    revert: "invalid",
    zIndex: 5,
    containment: "#actividad70",
    scroll: false,
});

$(".drop1").droppable({
    accept: ".drag1",
    drop: function(e, ui) {
        $(ui.draggable).removeClass("drag1");
        $(ui.draggable).removeClass("bg_palabra");
        $(ui.draggable).addClass("img-responsive");
        ui.draggable.attr("style", "");
        $(this).append(ui.draggable);

    }
});

function pregunta1() {
    var corr=0;
    var p1res1 = $('.p1im1 span').text();
    if (p1res1 == 'parque') {
        corr++;
        f_ok($('.p1im1'));
    } else {
        corr;
        f_no($('.p1im1'));
    }

    var p1res2 = $('.p1im2 span').text();
    if (p1res2 == 'quijada') {
        corr++;
        f_ok($('.p1im2'));
    } else {
        corr;
        f_no($('.p1im2'));
    }

    var p1res3 = $('.p1im3 span').text();
    if (p1res3 == 'paquete') {
        corr++;
        f_ok($('.p1im3'));
    } else {
        corr;
        f_no($('.p1im3'));
    }

    var p1res4 = $('.p1im4 span').text();
    if (p1res4 == 'quinua') {
        corr++;
        f_ok($('.p1im4'));
    } else {
        corr;
        f_no($('.p1im4'));
    }

    var p1res5 = $('.p1im5 span').text();
    if (p1res5 == 'raqueta') {
        corr++;
        f_ok($('.p1im5'));
    } else {
        corr;
        f_no($('.p1im5'));
    }

    var p1res6 = $('.p1im6 span').text();
    if (p1res6 == 'Quito') {
        corr++;
        f_ok($('.p1im6'));
    } else {
        corr;
        f_no($('.p1im6'));
    }
    var total = ((corr * 5) / 6)
    tpre1 = total;
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion


// #region Pregunta2
vecpal=['karateca','máquina','paquete','raqueta','Riqui','Quito'];
    var p2vec1 = [
        '<div class="table-responsive col-sm-4" style="display: inline-block;">                        <table class="table-responsive">                            <tr align="center">                                <td>                                                                    </td>                                <td>                                    <img src="img/i1_p166_act4.jpg" alt="" class="img-responsive">                                    <input type="text" class="form-control"  style="font-size: 40px; text-align: center; min-width: 60px; max-width: 190px; height: 50px;" id="p2dcon0">                                </td>                            </tr>                        </table>                    </div>',
        '<div class="table-responsive col-sm-4" style="display: inline-block;">                        <table class="table-responsive">                            <tr align="center">                                <td>                                                                    </td>                                <td>                                    <img src="img/i2_p166_act4.jpg" alt="" class="img-responsive">                                    <input type="text" class="form-control"  style="font-size: 40px; text-align: center; min-width: 60px; max-width: 190px; height: 50px;" id="p2dcon1">                                </td>                            </tr>                        </table>                    </div>',
        '<div class="table-responsive col-sm-4" style="display: inline-block;">                        <table class="table-responsive">                            <tr align="center">                                <td>                                                                    </td>                                <td>                                    <img src="img/i3_p166_act4.jpg" alt="" class="img-responsive">                                    <input type="text" class="form-control"  style="font-size: 40px; text-align: center; min-width: 60px; max-width: 190px; height: 50px;" id="p2dcon2">                                </td>                            </tr>                        </table>                    </div>',
        '<div class="table-responsive col-sm-4" style="display: inline-block;">                        <table class="table-responsive">                            <tr align="center">                                <td>                                                                   </td>                                <td>                                    <img src="img/i4_p166_act4.jpg" alt="" class="img-responsive">                                    <input type="text" class="form-control"  style="font-size: 40px; text-align: center; min-width: 60px; max-width: 190px; height: 50px;" id="p2dcon3">                                </td>                            </tr>                        </table>                    </div>',
        '<div class="table-responsive col-sm-4" style="display: inline-block;">                        <table class="table-responsive">                            <tr align="center">                                <td>                                                                    </td>                                <td>                                    <img src="img/i5_p166_act4.jpg" alt="" class="img-responsive">                                    <input type="text" class="form-control"  style="font-size: 40px; text-align: center; min-width: 60px; max-width: 190px; height: 50px;" id="p2dcon4">                                </td>                            </tr>                        </table>                    </div>',
        '<div class="table-responsive col-sm-4" style="display: inline-block;">                        <table class="table-responsive">                            <tr align="center">                                <td>                                                                    </td>                                <td>                                    <img src="img/i6_p166_act4.jpg" alt="" class="img-responsive">                                    <input type="text" class="form-control"  style="font-size: 40px; text-align: center; min-width: 60px; max-width: 190px; height: 50px;" id="p2dcon5">                                </td>                            </tr>                        </table>                    </div>'
    ];
    p2vec1.sort(f_randomico);
    $('#p2im1').html(p2vec1);
function pregunta2() {
 var cor=0;
 var inc=0;
    for (var i = 0; i < 6 ; i++) {
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
        var total = ((cor - inc) * 5) / 6;
    }
    tpre2 = total.toFixed(2);
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));

}
// #endregion



// #region Calculo Nota Final
function NotaFinal() {

    pregunta1();
    pregunta2();
    var Nf = parseFloat(tpre1)+parseFloat(tpre2);
    var Vtotal = Nf.toFixed(2);
    $("#txtNota").html(Vtotal + "/10");
    document.getElementById("bt_comprobar").disabled = true;
}

// #endregion