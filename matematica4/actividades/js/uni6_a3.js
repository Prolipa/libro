var titulos = "aplico";
f_titulos();
numero_pagina(225);

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;


// #region Pregunta1
p1vec1 = [
    '<li class="col-sm-4">                            <div class="table-responsive">                                <center>                                    <table class="table-bordered" class="ta" style="text-align: center;">                                        <tr>                                            <td></td>                                            <td>48</td>                                            <td style="border-left: 2px solid #000000; border-bottom:2px solid #000000;width: 30px">8</td>                                        </tr>                                        <tr>                                            <td colspan="2" style="border-bottom:2px solid #000000;">                                                <input maxlength="3" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #3FC2F3;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="-48">                                            </td>                                            <td style="border-left: 2px solid #000000;"><input maxlength="3" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #3FC2F3;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="6"></td>                                        </tr>                                        <tr>                                            <td></td>                                            <td>                                                <input maxlength="3" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #3FC2F3;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="0">                                            </td>                                            <td style="border-left: 2px solid #000000;"></td>                                        </tr>                                    </table>48 dividido por 8 a <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border:solid 2px #3FC2F3;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="6"><br>                                    porque <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border:solid 2px #3FC2F3;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="6"> x <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border:solid 2px #3FC2F3;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="8"> = 48                                    y sobra <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border:solid 2px #3FC2F3;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="0"><br><br>                                </center>                            </div>                        </li>',
    '<li class="col-sm-4">                            <div class="table-responsive">                                <center>                                    <table class="table-bordered" class="ta" style="text-align: center;">                                        <tr>                                            <td></td>                                            <td>56</td>                                            <td style="border-left: 2px solid #000000; border-bottom:2px solid #000000;width: 30px">7</td>                                        </tr>                                        <tr>                                            <td colspan="2" style="border-bottom:2px solid #000000;">                                                <input maxlength="3" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #3FC2F3;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="-56">                                            </td>                                            <td style="border-left: 2px solid #000000;"><input maxlength="3" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #3FC2F3;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="8"></td>                                        </tr>                                        <tr>                                            <td></td>                                            <td>                                                <input maxlength="3" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #3FC2F3;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="0">                                            </td>                                            <td style="border-left: 2px solid #000000;"></td>                                        </tr>                                    </table>56 dividido por 7 a <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border:solid 2px #3FC2F3;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="8"><br>                                    porque <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border:solid 2px #3FC2F3;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="8"> x <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border:solid 2px #3FC2F3;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="7"> = 56                                    y sobra <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border:solid 2px #3FC2F3;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="0"><br><br>                               </center>                            </div>                        </li>',
    '<li class="col-sm-4">                            <div class="table-responsive">                                <center>                                    <table class="table-bordered" class="ta" style="text-align: center;">                                        <tr>                                            <td></td>                                            <td>36</td>                                            <td style="border-left: 2px solid #000000; border-bottom:2px solid #000000;width: 30px">9</td>                                        </tr>                                        <tr>                                            <td colspan="2" style="border-bottom:2px solid #000000;">                                                <input maxlength="3" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #3FC2F3;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="-36">                                            </td>                                            <td style="border-left: 2px solid #000000;"><input maxlength="3" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #3FC2F3;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="4"></td>                                        </tr>                                        <tr>                                            <td></td>                                            <td>                                                <input maxlength="3" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #3FC2F3;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="0">                                            </td>                                            <td style="border-left: 2px solid #000000;"></td>                                        </tr>                                    </table>36 dividido por 9 a <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border:solid 2px #3FC2F3;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="4"><br>                                    porque <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border:solid 2px #3FC2F3;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="4"> x <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border:solid 2px #3FC2F3;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="9"> = 36                                    y sobra <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border:solid 2px #3FC2F3;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="0"><br><br>                                </center>                            </div>                        </li>',
    '<li class="col-sm-4">                            <div class="table-responsive">                                <center>                                    <table class="table-bordered" class="ta" style="text-align: center;">                                        <tr>                                            <td></td>                                            <td>35</td>                                            <td style="border-left: 2px solid #000000; border-bottom:2px solid #000000;width: 30px">5</td>                                        </tr>                                        <tr>                                            <td colspan="2" style="border-bottom:2px solid #000000;">                                                <input maxlength="3" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #3FC2F3;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="-35">                                            </td>                                            <td style="border-left: 2px solid #000000;"><input maxlength="3" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #3FC2F3;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="7"></td>                                        </tr>                                        <tr>                                            <td></td>                                            <td>                                                <input maxlength="3" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #3FC2F3;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="0">                                            </td>                                            <td style="border-left: 2px solid #000000;"></td>                                        </tr>                                    </table>35 dividido por 5 a <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border:solid 2px #3FC2F3;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="7"><br>                                    porque <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border:solid 2px #3FC2F3;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="5"> x <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border:solid 2px #3FC2F3;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="7"> = 35                                    y sobra <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border:solid 2px #3FC2F3;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="0"><br><br>                                </center>                            </div>                        </li>',
    '<li class="col-sm-4">                            <div class="table-responsive">                                <center>                                    <table class="table-bordered" class="ta" style="text-align: center;">                                        <tr>                                            <td></td>                                            <td>49</td>                                            <td style="border-left: 2px solid #000000; border-bottom:2px solid #000000;width: 30px">7</td>                                        </tr>                                        <tr>                                            <td colspan="2" style="border-bottom:2px solid #000000;">                                                <input maxlength="3" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #3FC2F3;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="-49">                                            </td>                                            <td style="border-left: 2px solid #000000;"><input maxlength="3" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #3FC2F3;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="7"></td>                                        </tr>                                        <tr>                                            <td></td>                                            <td>                                                <input maxlength="3" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #3FC2F3;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="0">                                            </td>                                            <td style="border-left: 2px solid #000000;"></td>                                        </tr>                                    </table>49 dividido por 7 a <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border:solid 2px #3FC2F3;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="7"><br>                                    porque <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border:solid 2px #3FC2F3;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="7"> x <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border:solid 2px #3FC2F3;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="7"> = 49                                    y sobra <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border:solid 2px #3FC2F3;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="0"><br><br>                                </center>                            </div>                        </li>',
    '<li class="col-sm-4">                            <div class="table-responsive">                                <center>                                    <table class="table-bordered" class="ta" style="text-align: center;">                                        <tr>                                            <td></td>                                            <td>27</td>                                            <td style="border-left: 2px solid #000000; border-bottom:2px solid #000000;width: 30px">3</td>                                        </tr>                                        <tr>                                            <td colspan="2" style="border-bottom:2px solid #000000;">                                                <input maxlength="3" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #3FC2F3;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="-27">                                            </td>                                            <td style="border-left: 2px solid #000000;"><input maxlength="3" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #3FC2F3;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="9"></td>                                        </tr>                                        <tr>                                            <td></td>                                            <td>                                                <input maxlength="3" type="text" size="1" style="width:70px;text-align: center;border:solid 2px #3FC2F3;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="0">                                            </td>                                            <td style="border-left: 2px solid #000000;"></td>                                        </tr>                                    </table>27 dividido por 3 a <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border:solid 2px #3FC2F3;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="9"><br>                                    porque <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border:solid 2px #3FC2F3;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="3"> x <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border:solid 2px #3FC2F3;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="9"> = 27                                    y sobra <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border:solid 2px #3FC2F3;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="0"><br><br>                                </center>                            </div>                        </li>'
];
p1vec1.sort(f_randomico);
$('#li1').html(p1vec1);

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
    tpre1 = ((nota * 4) / 10);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2

var pal1 = [
    '<img class="img-responsive drag3 c1" alt="1" src="img/i1_p225_act2.jpg"  style="display:inline-block; mix-blend-mode:multiply;">',
    '<img class="img-responsive drag3 c2" alt="2" src="img/i2_p225_act2.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
    '<img class="img-responsive drag3 c2" alt="3" src="img/i3_p225_act2.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
    '<img class="img-responsive drag3 c3" alt="4" src="img/i4_p225_act2.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
    '<img class="img-responsive drag3 c3" alt="5" src="img/i5_p225_act2.jpg" style="display:inline-block; mix-blend-mode:multiply;">'
];
var pal2 = [
    '<div><b>60</b></div>',
    '<div><b>38</b></div>',
    '<div><b>55</b></div>',
    '<div><b>33</b></div>',
    '<div><b>61</b></div>'
];

pal1.sort(f_randomico);
var p2vec1 = ['4', '3', '2', '1', '5'];
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
for (var i = 1; i <= 6; i++) {
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

function pregunta2() {
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


    var total = ((p2cont1 * 4) / 5)
    tpre2 = total;
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Pregunta3
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
    tpre3 = ((nota * 2) / 10);
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
    // var pre3a = document.getElementById("pre3a").value;
    // if (pre3a == "") {
    //     alert("Pregunta 3: Califiqué la pregunta");
    // } else {
    pregunta1();
    pregunta2();
    pregunta3();
    var Nf =
        parseFloat(tpre1) +
        parseFloat(tpre2) +
        parseFloat(tpre3);

    var Vtotal = Nf.toFixed(2);
    $("#txtNota").html(Vtotal);
    document.getElementById("bt_comprobar").disabled = true;
    $("input").attr('disabled', 'disabled');
}
// }
// #endregion