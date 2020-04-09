$("#n_pagina").html("252"); //impresion de pagina
var titulos = "exploro";
var cor = 0;
cont = 1,
    ejer = 1,
    itemsT = 10,
    inc = 0,
    calificacion = 10;


var tpre1 = 0;
var tpre3 = 0;



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
    tpre1 = (nota / 2);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}

var pal1=['<img class="img-responsive drag3 c1" src="img/i6_p252_act3.jpg" alt="1" style="display:inline-block; mix-blend-mode:multiply;">',
'<img class="img-responsive drag3 c2" alt="2" src="img/i9_p252_act3.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
'<img class="img-responsive drag3 c1" src="img/i11_p252_act3.jpg" alt="3" style="display:inline-block; mix-blend-mode:multiply;">',
'<img class="img-responsive drag3 c2" alt="4" src="img/i13_p252_act3.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
'<img class="img-responsive drag3 alt="5"  src="img/i5_p252_act3.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
'<img class="img-responsive drag3 alt="6"  src="img/i7_p252_act3.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
'<img class="img-responsive drag3 alt="7"  src="img/i8_p252_act3.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
'<img class="img-responsive drag3 alt="8"  src="img/i10_p252_act3.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
'<img class="img-responsive drag3 alt="9"  src="img/i12_p252_act3.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
'<img class="img-responsive drag3 alt="410"  src="img/i14_p252_act3.jpg" style="display:inline-block; mix-blend-mode:multiply;">',

,];
var pal2=[
'<div><img src="img/i1_p252_act3.jpg" ></div>',
'<div><img src="img/i2_p252_act3.jpg" ></div>',
'<div><img src="img/i3_p252_act3.jpg" ></div>',
'<div><img src="img/i4_p252_act3.jpg" ></div>'];

pal1.sort(f_randomico);
var p2vec1=['2','4','1','3'];
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
function pregunta3() {
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

    var total= ((p2cont1*5)/4)
    tpre3 = total;
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}




// #region Calculo Nota Final
function NotaFinal() {

    pregunta1();
    pregunta3();
    cor =
        parseFloat(tpre1) +
        parseFloat(tpre3);
    Calculo_nota();
}




// #endregion