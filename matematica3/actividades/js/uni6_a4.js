var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;

// #region Pregunta1
p1vec1 = [];
p1vec2 = [];
p1vec3=['10','100'];
p1vec3.sort(f_randomico);
for (var i = 0; i < 30; i++) {
    n1 = parseInt(Math.random() * 40 + 1);
    p1vec3.sort(f_randomico);
    n2 = p1vec3[0];
    p1vec1.push(n1);
    p1vec1.push(n2);
    $('#numa' + [i] + '').html(n1);
    $('#numb' + [i] + '').html(n2);
    if (i % 2 != 0) {
        p1vec2.push((p1vec1[i]) * (p1vec1[i - 1]));
    }
}

function pregunta1() {
    var cor = 0;
    for (var i = 0; i < 15; i++) {
        var num = $('#res' + [i] + '').val();
        if (p1vec2[i] == num) {
            f_ok($('#res' + [i] + ''));
            cor++;
        } else {
            f_no($('#res' + [i] + ''));
            cor;
        }
    }
    var result1 = (cor * 4) / 15;
    tpre1 = parseFloat(result1);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2
var pal1=[
'<img class="img-responsive drag3 c1" alt="1" src="img/i1_p223_act2.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
'<img class="img-responsive drag3 c2" alt="2" src="img/i2_p223_act2.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
'<img class="img-responsive drag3 c2" alt="3" src="img/i3_p223_act2.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
'<img class="img-responsive drag3 c2" alt="4" src="img/i4_p223_act2.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
'<img class="img-responsive drag3 c2" alt="5" src="img/i5_p223_act2.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
'<img class="img-responsive drag3 c3" alt="6" src="img/i6_p223_act2.jpg" style="display:inline-block; mix-blend-mode:multiply;">'];
var pal2=[
'<div><b>800</b></div>',
'<div><b>260</b></div>',
'<div><b>100</b></div>',
'<div><b>1250</b></div>',
'<div><b>530</b></div>',
'<div><b>400</b></div>'
];

pal1.sort(f_randomico);
var p2vec1=['3','6','1','5','4','2'];
var p2aux2=[];
$(".textos").append(pal1);
var myArray2 = ['0','1','2','3','4','5'];
var i,j,k;
for (i = myArray2.length; i; i--) {
j = Math.floor(Math.random() * i);
k = myArray2[i - 1];
myArray2[i - 1] = myArray2[j];
myArray2[j] = k;
}
//aleatorio literal 1
for (var i = 1; i <= 6 ; i++) {
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

function pregunta2() {
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
    var p2im5=$('.p2im5 > img').attr('alt');
    if(p2im5==p2aux2[4]){
        p2cont1++;
        f_ok($('.p2im5'));
    }else{
        f_no($('.p2im5'));
    }
    var p2im6=$('.p2im6 > img').attr('alt');
    if(p2im6==p2aux2[5]){
        p2cont1++;
        f_ok($('.p2im6'));
    }else{
        f_no($('.p2im6'));
    }

    var total= ((p2cont1*4)/6)
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
    tpre3 = ((nota / 10) * 2);
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion


// #region Calculo Nota Final
function NotaFinal() {
    pregunta1();
    pregunta2();
    pregunta3();
    var Nf = parseFloat(tpre1) + parseFloat(tpre2) + parseFloat(tpre3);
    var Vtotal = Nf.toFixed(2);
    $("#txtNota").html(Vtotal);
    document.getElementById("bt_comprobar").disabled = true;
}