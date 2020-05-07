var titulos = "aplico";
f_titulos();
$("#n_pagina").html('219');

document.getElementById("pre3a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre3a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre3a"), 2.5);
});

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;

var cor = 0;
cont = 1,
    ejer = 1,
    itemsT = 10,
    inc = 0,
    calificacion = 10;


// #region Pregunta1
$(".enc1").click(function() {
    if ($(this).hasClass("subrayar")) {
        $(this).removeClass("subrayar");
    } else {
        $(this).addClass("subrayar");
    }
});

function pregunta1() {
    var respr1 = 0,
        respr2 = 0;
    for (var i = 1; i <= 107; i++) {
        var caja = $("span[id=" + [i] + "]").text();
        if ($("#" + [i] + "").hasClass("subrayar")) {
            if (caja == "y" || caja == "porque" || caja == "Además" || caja == "Por eso") {
                respr1 = respr1 + 1;

                f_ok($("#" + [i] + ""));
                ($("#" + [i] + "")).removeClass('subrayar');
            } else {
                respr2 = respr2 + 1;
                f_no($("#" + [i] + ""));
                ($("#" + [i] + "")).removeClass('subrayar');
            }
        } else {}
    }

    var total = ((respr1 - respr2) * 2.5) / 5;
    if (total < 0) {
        total = 0;
        tpre1 = total;
    } else {
        tpre1 = total;
    }

    tpre1 = total.toFixed(2);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2
p2vec1=
[
'<div class="col-sm-12">                            Yo leo libros <input type="text" size="10" style="width:100px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="porque"> me gusta la ciencia.<br><br>                        </div>',
'<div class="col-sm-12">                            Los estudiantes investigan <input type="text" size="10" style="width:100px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="ya que*ya  que"> quieren conocer muchas cosas.<br><br>                        </div>',
'<div class="col-sm-12">                            La información científica es interesante, <input type="text" size="10" style="width:100px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="además"> es entretenida.<br><br>                        </div>',
'<div class="col-sm-12">                            Daniel es un científico <input type="text" size="10" style="width:100px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="y"> quiere descubrir una cura para las enfermedades.<br><br>                        </div>'
];
p2vec1.sort(f_randomico);
$('#li2').html(p2vec1);
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
    tpre2 = ((nota * 2.5) / 10);
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Pregunta3

function pregunta3() {
    var pre3a = document.getElementById("pre3a").value;
    tpre3 = pre3a;
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Pregunta4
var pal1=['<img class="img-responsive drag3 c1" src="img/i1_p219_act4.jpg" alt="1" style="display:inline-block; mix-blend-mode:multiply;">',
'<img class="img-responsive drag3 c2" alt="2" src="img/i2_p219_act4.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
'<img class="img-responsive drag3 c1" src="img/i3_p219_act4.jpg" alt="3" style="display:inline-block; mix-blend-mode:multiply;">',
'<img class="img-responsive drag3 c2" alt="4" src="img/i4_p219_act4.jpg" style="display:inline-block; mix-blend-mode:multiply;">'];
var pal2=[
'<div class="text-question">Ampliar información.</div>',
'<div class="text-question">Dar explicaciones</div>',
'<div class="text-question">Añadir algo.</div>',
'<div class="text-question">Aclarar algo.</div>'];

pal1.sort(f_randomico);
var p2vec1=['4','1','2','3'];
var p2aux2=[];
$(".textos").append(pal1);
var myArray2 = ['0','1','2','3'];
var i,j,k;
for (i = myArray2.length; i; i--) {
j = Math.floor(Math.random() * i);
k = myArray2[i - 1];
myArray2[i - 1] = myArray2[j];
myArray2[j] = k;
}
//aleatorio literal 1
for (var i = 1; i <= 4 ; i++) {
var c1=myArray2[i-1];
$(".p2cim1"+i).html(pal2[c1]);
p2aux2.push(p2vec1[c1]);

};
$(".drag3").draggable({
revert:"invalid",
zIndex:5,
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
function pregunta4() {
    var p2im1=$('.p2im1 > img').attr('alt');
    var p2cont1=0;
    if(p2im1==p2aux2[0]){
        p2cont1++;
        f_ok($('.p2im1'));
    }else{
        f_no($('.p2im1'));
    }
    var p2im2=$('.p2im2 > img').attr('alt');
    if(p2im2==p2aux2[1]){
        p2cont1++;
        f_ok($('.p2im2'));
    }else{
        f_no($('.p2im2'));
    }
    var p2im3=$('.p2im3 > img').attr('alt');
    if(p2im3==p2aux2[2]){
        p2cont1++;
        f_ok($('.p2im3'));
    }else{
        f_no($('.p2im3'));
    }
    var p2im4=$('.p2im4 > img').attr('alt');
    if(p2im4==p2aux2[3]){
        p2cont1++;
        f_ok($('.p2im4'));
    }else{
        f_no($('.p2im4'));
    }

    var total= ((p2cont1*2.5)/4)
    tpre4 = total;
    $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion


// #region Calculo Nota Final
function NotaFinal() {
    var pre3a = document.getElementById("pre3a").value;
    if (pre3a == "") {
        alert("Pregunta 3: Califiqué la pregunta");
    } else {
        pregunta1();
        pregunta2();
        pregunta3();
        pregunta4();
        cor =
            parseFloat(tpre1) +
            parseFloat(tpre2) +
            parseFloat(tpre3) +
            parseFloat(tpre4);
        Calculo_nota();
    }
}


// #endregion