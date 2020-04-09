var titulos = "aplico";
numero_pagina(144);


var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;
var tpre6 = 0;

document.getElementById("pre4a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre4a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre4a"), 2);
});

document.getElementById("pre5a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre5a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre5a"), 2);
});

document.getElementById("pre6a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre6a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre6a"), 2);
});



$(".btn_mostrar").on("click", function() {
    //mostrar todas las preguntas
    $(".panel-collapse").removeClass("in");
    $(".panel-collapse").addClass("in");
});


// #region Pregunta1
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
    tpre1 = nota / 5;
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Random2
var p3vec2 = [
    '<li>x−7y =14<br>                                            x = ( <input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="-4"> , <input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="0"> ) ,                                            y = ( <input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="0"> , <input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="-2"> )<br><br>                                        </li>',
    '<li>3x−15y =12<br>                                            x = ( <input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="4"> , <input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="0"> ) ,                                            y = ( <input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="0"> , <input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="-">                                            <div class="fraction">                                                <span class="fup"><input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="4"></span>                                                <span class="bar">/</span>                                                <span class="fdn"><input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="5"></span>                                            </div> )<br><br>                                        </li>',
    '<li>7x+9y = 4<br>                                            x = (                                            <div class="fraction">                                                <span class="fup"><input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="4"></span>                                                <span class="bar">/</span>                                                <span class="fdn"><input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="7"></span>                                            </div> ,                                            <input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="0"> ) ,                                            y = ( <input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="0"> ,                                            <div class="fraction">                                                <span class="fup"><input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="4"></span>                                                <span class="bar">/</span>                                                <span class="fdn"><input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="9"></span>                                            </div> )<br><br>                                        </li>',
    '<li>−5x+11y =10<br>                                            x = ( <input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="-2"> , <input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="0"> ) ,                                            y = ( <input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="0"> ,                                            <div class="fraction">                                                <span class="fup"><input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="10"></span>                                                <span class="bar">/</span>                                                <span class="fdn"><input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="11"></span>                                            </div> )<br><br>                                        </li>',
    '<li>y = -<div class="fraction">                                                <span class="fup">x</span>                                                <span class="bar">/</span>                                                <span class="fdn">3</span>                                            </div>+ 8<br>                                            x = ( <input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="24"> , <input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="0"> ) ,                                            y = ( <input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="0"> , <input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="8"> )<br><br>                                        </li>'
    ];
p3vec2.sort(f_randomico);
$('#li2').html(p3vec2);
// #endregion

// #region Pregunta2
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
    tpre2 = nota / 5;
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Random3
var pal1 = [
  '<img class="img-responsive drag3 c1" alt="1" src="img/i1_p144_act3.jpg"  style="display:inline-block; mix-blend-mode:multiply;">&nbsp;&nbsp;',
  '<img class="img-responsive drag3 c2" alt="2" src="img/i2_p144_act3.jpg" style="display:inline-block; mix-blend-mode:multiply;">&nbsp;&nbsp;',
  '<img class="img-responsive drag3 c3" alt="3" src="img/i3_p144_act3.jpg" style="display:inline-block; mix-blend-mode:multiply;">&nbsp;&nbsp;',
  '<img class="img-responsive drag3 c4" alt="4" src="img/i4_p144_act3.jpg" style="display:inline-block; mix-blend-mode:multiply;">&nbsp;&nbsp;',
  '<img class="img-responsive drag3 c5" alt="5" src="img/i5_p144_act3.jpg" style="display:inline-block; mix-blend-mode:multiply;">&nbsp;&nbsp;'
];

var pal2 = [
  "<div><img src='img/i6_p144_act3.jpg'></div>", 
  "<div><img src='img/i7_p144_act3.jpg'></div>",
  "<div><img src='img/i8_p144_act3.jpg'></div>",
  "<div><img src='img/i9_p144_act3.jpg'></div>",
  "<div><img src='img/i10_p144_act3.jpg'></div>"
];

pal1.sort(f_randomico);

var p2vec1 = ["5", "4", "2", "3", "1"];
var p2aux2 = [];
$(".textos").append(pal1);
var myArray2 = ["0", "1", "2", "3", "4"];
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
}
$(".drag3").draggable({
  revert: "invalid",
  zIndex: 5,
  containment: ".actividad17",
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
// #endregion

// #region Pregunta3

function pregunta3() {
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
  if (p2im5 == p2aux2[4]) {
    p2cont1++;
    f_ok($(".p2im5"));
  } else {
    f_no($(".p2im5"));
  }

  var total = (p2cont1 * 2) / 5;
  tpre3 = total;
  $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Pregunta4
function pregunta4() {
    var pre4a = document.getElementById("pre4a").value;
    tpre4 = pre4a;
    $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion

// #region Pregunta5
function pregunta5() {
    var pre5a = document.getElementById("pre5a").value;
    tpre5 = pre5a;
    $("#pre5a").val(parseFloat(tpre5).toFixed(2));
}
// #endregion

// #region Pregunta6

function pregunta6() {
    var pre6a = document.getElementById("pre6a").value;
    tpre6 = pre6a;
    $("#pre6a").val(parseFloat(tpre6).toFixed(2));
}
// #endregion



// #region Calculo Nota Final
function NotaFinal() {
    var pre4a = document.getElementById("pre4a").value;
    if (pre4a == "") {
        alert("Pregunta 4: Califiqué la pregunta");
    } else {
    var pre5a = document.getElementById("pre5a").value;
    if (pre5a == "") {
        alert("Pregunta 5: Califiqué la pregunta");
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
            var Nf =
                parseFloat(tpre1) +
                parseFloat(tpre2) +
                parseFloat(tpre3) +
                parseFloat(tpre4) +
                parseFloat(tpre5) +
                parseFloat(tpre6);
            var Vtotal = Nf.toFixed(2);
            $("#txtNota").html(Vtotal);
            document.getElementById("bt_comprobar").disabled = true;
            $("input").attr('disabled', 'disabled');
        }
    }
    }   }
// #endregion