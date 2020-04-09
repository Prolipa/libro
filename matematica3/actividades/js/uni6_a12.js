var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;
var tpre6 = 0;

// #region Pregunta1
p1vec1 = [
    '<li class="col-sm-3">                           <div class="table-responsive">                               <center><img src="img/i1_p241_act1.jpg" width="180" height="180"><br>                                <input type="text" size="1" maxlength="2" style="width:40px;text-align: center;border:solid 2px #89ABEC;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="10"> : <input type="text" size="1" maxlength="2" style="width:40px;text-align: center;border:solid 2px #89ABEC;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="15"><br><br>                                </center>                           </div>                         </li>',
    '<li class="col-sm-3">                           <div class="table-responsive">                               <center><img src="img/i2_p241_act1.jpg" width="180" height="180"><br>                                <input type="text" size="1" maxlength="2" style="width:40px;text-align: center;border:solid 2px #89ABEC;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="06*6"> : <input type="text" size="1" maxlength="2" style="width:40px;text-align: center;border:solid 2px #89ABEC;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="15"><br><br>                                </center>                           </div>                         </li>',
    '<li class="col-sm-3">                           <div class="table-responsive">                               <center><img src="img/i3_p241_act1.jpg" width="180" height="180"><br>                                <input type="text" size="1" maxlength="2" style="width:40px;text-align: center;border:solid 2px #89ABEC;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="01*1"> : <input type="text" size="1" maxlength="2" style="width:40px;text-align: center;border:solid 2px #89ABEC;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="15"><br><br>                                </center>                           </div>                         </li>',
    '<li class="col-sm-3">                           <div class="table-responsive">                               <center><img src="img/i4_p241_act1.jpg" width="180" height="180"><br>                                <input type="text" size="1" maxlength="2" style="width:40px;text-align: center;border:solid 2px #89ABEC;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="09*9"> : <input type="text" size="1" maxlength="2" style="width:40px;text-align: center;border:solid 2px #89ABEC;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="30"><br><br>                                </center>                           </div>                         </li>',
    '<li class="col-sm-3">                           <div class="table-responsive">                               <center><img src="img/i5_p241_act1.jpg" width="180" height="180"><br>                                <input type="text" size="1" maxlength="2" style="width:40px;text-align: center;border:solid 2px #89ABEC;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="03*3"> : <input type="text" size="1" maxlength="2" style="width:40px;text-align: center;border:solid 2px #89ABEC;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="05*5"><br><br>                                </center>                           </div>                         </li>',
    '<li class="col-sm-3">                           <div class="table-responsive">                               <center><img src="img/i6_p241_act1.jpg" width="180" height="180"><br>                                <input type="text" size="1" maxlength="2" style="width:40px;text-align: center;border:solid 2px #89ABEC;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="04*4"> : <input type="text" size="1" maxlength="2" style="width:40px;text-align: center;border:solid 2px #89ABEC;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="30"><br><br>                                </center>                           </div>                         </li>',
    '<li class="col-sm-3">                           <div class="table-responsive">                               <center><img src="img/i7_p241_act1.jpg" width="180" height="180"><br>                                <input type="text" size="1" maxlength="2" style="width:40px;text-align: center;border:solid 2px #89ABEC;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="04*4"> : <input type="text" size="1" maxlength="2" style="width:40px;text-align: center;border:solid 2px #89ABEC;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="00"><br><br>                                </center>                           </div>                         </li>',
    '<li class="col-sm-3">                           <div class="table-responsive">                               <center><img src="img/i8_p241_act1.jpg" width="180" height="180"><br>                                <input type="text" size="1" maxlength="2" style="width:40px;text-align: center;border:solid 2px #89ABEC;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="12"> : <input type="text" size="1" maxlength="2" style="width:40px;text-align: center;border:solid 2px #89ABEC;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="30"><br><br>                                </center>                           </div>                         </li>'
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
    tpre1 = ((nota / 10) * 2);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion
document.getElementById("pre2a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre2a"), 1);
});
// #region Pregunta2

function pregunta2() {
    var pre2a = document.getElementById("pre2a").value;
    tpre2 = pre2a;
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Pregunta3
p3vec1 = [
    '<div class="col-sm-4">                        <center>Te levantas<br>                            a las 06:00<br>                            <img src="img/i1_p241_act3.jpg"><br>                            El <span style="color: #0096A2">horario</span> señala el <input type="text" size="1" maxlength="2" style="width:40px;text-align: center;border:solid 2px #89ABEC;border-radius:10px" class="border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="6*06"><br>                            El <span style="color: #00913D">minutero</span> señala el <input type="text" size="1" maxlength="2" style="width:40px;text-align: center;border:solid 2px #89ABEC;border-radius:10px" class="border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="12"><br>                        </center>                    </div>',
    '<div class="col-sm-4">                        <center>Sales al recreo<br>                            a las 10:00<br>                            <img src="img/i2_p241_act3.jpg"><br>                            El <span style="color: #0096A2">horario</span> señala el <input type="text" size="1" maxlength="2" style="width:40px;text-align: center;border:solid 2px #89ABEC;border-radius:10px" class="border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="10"><br>                            El <span style="color: #00913D">minutero</span> señala el <input type="text" size="1" maxlength="2" style="width:40px;text-align: center;border:solid 2px #89ABEC;border-radius:10px" class="border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="12"><br>                        </center>                    </div>',
    '<div class="col-sm-4">                        <center>Llegas a casa<br>                            a las 02:00<br>                            <img src="img/i3_p241_act3.jpg"><br>                            El <span style="color: #0096A2">horario</span> señala el <input type="text" size="1" maxlength="2" style="width:40px;text-align: center;border:solid 2px #89ABEC;border-radius:10px" class="border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="2"><br>                            El <span style="color: #00913D">minutero</span> señala el <input type="text" size="1" maxlength="2" style="width:40px;text-align: center;border:solid 2px #89ABEC;border-radius:10px" class="border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="12"><br>                        </center>                    </div>'
];
p3vec1.sort(f_randomico);
$('#div3').html(p3vec1);

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
    tpre3 = ((nota / 10));
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Pregunta4
document.getElementById("pre4a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre4a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre4a"), 2);
});

function pregunta4() {
    var pre4a = document.getElementById("pre4a").value;
    tpre4 = pre4a;
    $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion

// #region Pregunta5
var pal1 = [
    '<img class="img-responsive drag3 c1" alt="1" src="img/i1_p241_act5.jpg"  style="display:inline-block; mix-blend-mode:multiply;">',
    '<img class="img-responsive drag3 c2" alt="2" src="img/i2_p241_act5.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
    '<img class="img-responsive drag3 c2" alt="3" src="img/i3_p241_act5.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
    '<img class="img-responsive drag3 c3" alt="4" src="img/i4_p241_act5.jpg" style="display:inline-block; mix-blend-mode:multiply;">'
];

var pal10 = [
    '<img class="img-responsive drag4 c1" alt="1" src="img/i5_p241_act5.jpg"  style="display:inline-block; mix-blend-mode:multiply;">',
    '<img class="img-responsive drag4 c2" alt="2" src="img/i6_p241_act5.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
    '<img class="img-responsive drag4 c2" alt="3" src="img/i7_p241_act5.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
    '<img class="img-responsive drag4 c3" alt="4" src="img/i8_p241_act5.jpg" style="display:inline-block; mix-blend-mode:multiply;">'
];

var pal2 = [
    "<div><b>3 : 15</b></div>",
    "<div><b>6 : 30</b></div>",
    "<div><b>11 : 15</b></div>",
    "<div><b>12 : 30</b></div>"
];

pal1.sort(f_randomico);
pal10.sort(f_randomico);

var p2vec1 = ["4", "1", "3", "2"];
var p2vec10 = ["2", "4", "1", "3"];
var p2aux2 = [];
var p2aux20 = [];
$(".textos").append(pal1);
$(".textos1").append(pal10);
var myArray2 = ["0", "1", "2", "3"];
var i, j, k;
for (i = myArray2.length; i; i--) {
    j = Math.floor(Math.random() * i);
    k = myArray2[i - 1];
    myArray2[i - 1] = myArray2[j];
    myArray2[j] = k;
}
//aleatorio literal 1
for (var i = 1; i <= 4; i++) {
    var c1 = myArray2[i - 1];
    $(".p2cim1" + i).html(pal2[c1]);
    p2aux2.push(p2vec1[c1]);
    p2aux20.push(p2vec10[c1]);
}
$(".drag3").draggable({
    revert: "invalid",
    zIndex: 5,
    containment: ".actividad1",
    scroll: false
});
$(".drag4").draggable({
    revert: "invalid",
    zIndex: 5,
    containment: ".actividad2",
    scroll: false
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
$(".drop4").droppable({
    accept: ".drag4",
    drop: function(e, ui) {
        $(ui.draggable).removeClass("drag4");
        $(ui.draggable).removeClass("bg_palabra");
        ui.draggable.attr("style", "mix-blend-mode:multiply;");
        $(this).append(ui.draggable);
    }
});

function pregunta5() {
    var p2im1 = $(".p2im1 > img").attr("alt");
    var p2cont1 = 0;
    if (p2im1 == p2aux2[0]) {
        p2cont1++;
        f_ok($(".p2im1"));
    } else {
        f_no($(".p2im1"));
    }
    var p2im2 = $(".p2im2 > img").attr("alt");
    if (p2im2 == p2aux2[1]) {
        p2cont1++;
        f_ok($(".p2im2"));
    } else {
        f_no($(".p2im2"));
    }
    var p2im3 = $(".p2im3 > img").attr("alt");
    if (p2im3 == p2aux2[2]) {
        p2cont1++;
        f_ok($(".p2im3"));
    } else {
        f_no($(".p2im3"));
    }
    var p2im4 = $(".p2im4 > img").attr("alt");
    if (p2im4 == p2aux2[3]) {
        p2cont1++;
        f_ok($(".p2im4"));
    } else {
        f_no($(".p2im4"));
    }
    var p2im5 = $(".p2im5 > img").attr("alt");
    if (p2im5 == p2aux20[0]) {
        p2cont1++;
        f_ok($(".p2im5"));
    } else {
        f_no($(".p2im5"));
    }
    var p2im6 = $(".p2im6 > img").attr("alt");
    if (p2im6 == p2aux20[1]) {
        p2cont1++;
        f_ok($(".p2im6"));
    } else {
        f_no($(".p2im6"));
    }
    var p2im7 = $(".p2im7 > img").attr("alt");
    if (p2im7 == p2aux20[2]) {
        p2cont1++;
        f_ok($(".p2im7"));
    } else {
        f_no($(".p2im7"));
    }
    var p2im8 = $(".p2im8 > img").attr("alt");
    if (p2im8 == p2aux20[3]) {
        p2cont1++;
        f_ok($(".p2im8"));
    } else {
        f_no($(".p2im8"));
    }



    var total = (p2cont1 * 2) / 8;
    tpre5 = total;
    $("#pre5a").val(parseFloat(tpre5).toFixed(2));
}
// #endregion

// #region Pregunta6
document.getElementById("pre6a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre6a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre6a"), 3);
});

function pregunta6() {
    var pre6a = document.getElementById("pre6a").value;
    tpre6 = pre6a;
    $("#pre6a").val(parseFloat(tpre6).toFixed(2));
}
// #endregion


// #region Calculo Nota Final
function NotaFinal() {
    var pre2a = document.getElementById("pre2a").value;
    if (pre2a == "") {
        alert("Pregunta 2: Califiqué la pregunta");
    } else {
        var pre4a = document.getElementById("pre4a").value;
        if (pre4a == "") {
            alert("Pregunta 4: Califiqué la pregunta");
        } else {
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
                $("#txtNota").html(Vtotal);
                document.getElementById("bt_comprobar").disabled = true;
            }
        }
    }
}