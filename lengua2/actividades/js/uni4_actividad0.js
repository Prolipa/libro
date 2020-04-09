$("#n_pagina").html("163"); //impresion de pagina
var titulos = "evaluacion";

var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;


// #region Pregunta3



$(".enc3").click(function() {
    if ($(this).hasClass("pintar")) {
        $(this).removeClass("pintar");
    } else {
        $(this).addClass("pintar");
    }
});

var vec1 = [
    ["1", "img/i1_p163_act3.jpg"],
    ["2", "img/i2_p163_act3.jpg"],
    ["3", "img/i3_p163_act3.jpg"],
    ["4", "img/i4_p163_act3.jpg"],
    ["5", "img/i5_p163_act3.jpg"],
    ["6", "img/i6_p163_act3.jpg"],
    ["7", "img/i7_p163_act3.jpg"],
    ["8", "img/i8_p163_act3.jpg"],
    ["9", "img/i9_p163_act3.jpg"],
    ["10", "img/i10_p163_act3.jpg"],
    ["11", "img/i11_p163_act3.jpg"],
    ["12", "img/i12_p163_act3.jpg"],
    ["13", "img/i13_p163_act3.jpg"],
    ["14", "img/i14_p163_act3.jpg"]
]

var res1 = [
    ["img/i1_p163_act3.jpg"],
    ["img/i3_p163_act3.jpg"],
    ["img/i4_p163_act3.jpg"],
    ["img/i5_p163_act3.jpg"],
    ["img/i7_p163_act3.jpg"],
    ["img/i8_p163_act3.jpg"],
    ["img/i14_p163_act3.jpg"]
]
var random3 = document.getElementsByClassName('imagen');

vec1.sort(f_randomico);
for (i = 0; i < random3.length; i++) {
    $('#' + random3[i].id).html('<img id=' + vec1[i][1] + ' style="mix-blend-mode: multiply;" class=" imgAcom" src="' + vec1[i][1] + '">');
}

$('.enc').click(function() {

    if ($(this).hasClass('seleccionCaja')) {
        $(this).removeClass('seleccionCaja')
    } else {
        $(this).addClass('seleccionCaja')

    }

});

function pregunta3() {
    var corr = 0;
    var inco = 0;
    for (var i = 1; i < 15; i++) {
        var acu = 0;
        if ($("#caja_img" + [i] + "").hasClass("seleccionCaja")) {
            var caja = $("div[id=caja_img" + [i] + "").find('img')[0].id;

            for (var j = 0; j < 9; j++) {
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
        var total = ((corr - inco) * 4) / 7;
    }
    tpre3 = total.toFixed(2);
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}

// #endregion

// #region Pregunta4

var res2 = ['pre4aux0', 'pre4aux7', 'pre4aux10', 'pre4aux16', 'pre4aux18', 'pre4aux24', 'pre4aux28', 'pre4aux30'];
p4vec = [
    '<div class="col-sm-4 table-responsive"  style="text-align: center"><center><img  src="img/i1_p163_act4.jpg"  >                            <table>                                <tr>                                    <td>                                        <div id="pre4aux0" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux1" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux2" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux3" class="cuadros enc1"></div>                                    </td>                                </tr>                            </table>                        </center></div>',
    '<div class="col-sm-4 table-responsive"  style="text-align: center"><center><img  src="img/i2_p163_act4.jpg"  >                            <table>                                <tr>                                    <td>                                        <div id="pre4aux4" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux5" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux6" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux7" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux8" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux9" class="cuadros enc1"></div>                                    </td>                                </tr>                            </table>                        </center></div>',
    '<div class="col-sm-4 table-responsive"  style="text-align: center"><center><img  src="img/i3_p163_act4.jpg"  >                            <table>                                <tr>                                    <td>                                        <div id="pre4aux10" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux11" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux12" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux13" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux14" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux15" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux16" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux17" class="cuadros enc1"></div>                                    </td>                                </tr>                            </table>                        </center></div>',
    '<div class="col-sm-4 table-responsive"  style="text-align: center"><center><img  src="img/i4_p163_act4.jpg"  >                            <table>                                <tr>                                    <td>                                        <div id="pre4aux18" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux19" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux20" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux21" class="cuadros enc1"></div>                                    </td>                                </tr>                            </table>                        </center></div>',
    '<div class="col-sm-4 table-responsive"  style="text-align: center"><center><img  src="img/i5_p163_act4.jpg"  >                            <table>                                <tr>                                    <td>                                        <div id="pre4aux22" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux23" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux24" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux25" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux26" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux27" class="cuadros enc1"></div>                                    </td>                                </tr>                            </table>                        </center></div>',
    '<div class="col-sm-4 table-responsive"  style="text-align: center"><center><img  src="img/i6_p163_act4.jpg"  >                            <table>                                <tr>                                    <td>                                        <div id="pre4aux28" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux29" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux30" class="cuadros enc1"></div>                                    </td>                                    <td>                                        <div id="pre4aux31" class="cuadros enc1"></div>                                    </td>                                </tr>                            </table>                        </center></div>'
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
    for (var i = 0; i < 32; i++) {
        var acu = 0;
        if ($("#pre4aux" + [i] + "").hasClass("pintar")) {
            var caja = $("div[id=pre4aux" + [i] + "").attr("id");

            for (var j = 0; j < 9; j++) {
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
        var total = ((corr - inco) * 4) / 8;
    }
    tpre4 = total.toFixed(2);
    $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion

// #region Pregunta5
var pal1 = [
    '<img class="img-responsive drag3 c1" alt="1" src="img/i6_p163_act5.jpg"  style="display:inline-block; mix-blend-mode:multiply;">',
    '<img class="img-responsive drag3 c2" alt="2" src="img/i7_p163_act5.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
    '<img class="img-responsive drag3 c1" alt="3" src="img/i8_p163_act5.jpg"  style="display:inline-block; mix-blend-mode:multiply;">',
    '<img class="img-responsive drag3 c2" alt="4" src="img/i9_p163_act5.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
    '<img class="img-responsive drag3 c3" alt="5" src="img/i10_p163_act5.jpg" style="display:inline-block; mix-blend-mode:multiply;">'
];
var pal2 = [
    '<div><center><img src="img/i1_p163_act5.jpg"></center></div>',
    '<div><center><img src="img/i2_p163_act5.jpg"></center></div>',
    '<div><center><img src="img/i3_p163_act5.jpg"></center></div>',
    '<div><center><img src="img/i4_p163_act5.jpg"></center></div>',
    '<div><center><img src="img/i5_p163_act5.jpg"></center></div>'
];

pal1.sort(f_randomico);
var p2vec1 = ['2', '3', '5', '1', '4'];
var p2aux2 = [];
$(".textos").append(pal1);
var myArray2 = ['0', '1', '2', '3', '4'];
var i, j, k;
for (i = myArray2.length; i; i--) {
    j = Math.floor(Math.random() * i);
    k = myArray2[i - 1];
    myArray2[i - 1] = myArray2[j];
    myArray2[j] = k;
}
//aleatorio literal 1
for (var i = 1; i <= 5; i++) {
    var c1 = myArray2[i - 1];
    $(".p2cim1" + i).html(pal2[c1]);
    p2aux2.push(p2vec1[c1]);

};
$(".drag3").draggable({
    revert: "invalid",
    zIndex: 5,
    containment: ".actividad17",
    scroll: false,
});

$(".drop3").droppable({
    accept: ".drag3",
    drop: function(e, ui) {
        $(ui.draggable).removeClass("drag3");
        $(ui.draggable).removeClass("bg_palabra");
        ui.draggable.attr("style", "mix-blend-mode:multiply;");
        $(this).append(ui.draggable);

    }
});

function pregunta5() {
    var p2im1 = $('.p2im1 > img').attr('alt');
    var p2cont1 = 0;
    if (p2im1 == p2aux2[0]) {
        p2cont1++;
        f_ok($('.p2im1'));
    } else {
        f_no($('.p2im1'));
    }
    var p2im2 = $('.p2im2 > img').attr('alt');
    if (p2im2 == p2aux2[1]) {
        p2cont1++;
        f_ok($('.p2im2'));
    } else {
        f_no($('.p2im2'));
    }
    var p2im3 = $('.p2im3 > img').attr('alt');
    if (p2im3 == p2aux2[2]) {
        p2cont1++;
        f_ok($('.p2im3'));
    } else {
        f_no($('.p2im3'));
    }
    var p2im4 = $('.p2im4 > img').attr('alt');
    if (p2im4 == p2aux2[3]) {
        p2cont1++;
        f_ok($('.p2im4'));
    } else {
        f_no($('.p2im4'));
    }
    var p2im5 = $('.p2im5 > img').attr('alt');
    if (p2im5 == p2aux2[4]) {
        p2cont1++;
        f_ok($('.p2im5'));
    } else {
        f_no($('.p2im5'));
    }

    var total = ((p2cont1 * 2) / 5)
    tpre5 = total;
    $("#pre5a").val(parseFloat(tpre5).toFixed(2));
}
// #endregion


// #region Calculo Nota Final
function NotaFinal() {
    pregunta3();
    pregunta4();
    pregunta5();
    var Nf = parseFloat(tpre3) + parseFloat(tpre4) + parseFloat(tpre5);
    var Vtotal = Nf.toFixed(2);
    $("#txtNota").html(Vtotal + "/10");
    document.getElementById("bt_comprobar").disabled = true;
    $("input").attr('disabled', 'disabled');
}

// #endregion